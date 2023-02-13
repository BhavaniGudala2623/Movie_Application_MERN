const express = require('express');
const Movie = require('../models/movie');
const data = require('../data.json')
const router = new express.Router();

// Create a movie
router.post('/movies', auth.enhance, async (req, res) => {
  const movie = new Movie(req.body);
  try {
    await movie.save();
    res.status(201).send(movie);
  } catch (e) {
    res.status(400).send(e);
  }
});


// Get all movies
router.get('/movies', async (req, res) => {
  try {
    // const movies = await Movie.find({});
    res.send(data);
  } catch (e) {
    res.status(400).send(e);
  }
});

// // Get movie by id
// router.get('/movies/:id', async (req, res) => {
//   const _id = req.params.id;

//   try {
//     const movie = await Movie.findById(_id);
//     if (!movie) return res.sendStatus(404);
//     return res.send(movie);
//   } catch (e) {
//     return res.status(400).send(e);
//   }
// });



module.exports = router;
