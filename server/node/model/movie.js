const mongoose = require('mongoose');

const { Schema } = mongoose;
const movieSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true,
    lowercase: false,
  },
  
  rating: {
    type: number,
    required: true,
    trim: true,
  },
  releaseDate: {
    type: Date,
    required: true,
    trim: true,
  }

 
});

const Movie = mongoose.model('Movie', movieSchema);

module.exports = Movie;
