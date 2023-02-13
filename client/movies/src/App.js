import Navbar from "./Navbar"
import { Route, Routes } from "react-router-dom"
import Login from "./pages/Login"
import  "./styles.css"
import Movies from "./pages/Movies"

function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/home" element={<Movies/>} />
          <Route path="/login" element={<Login/>} />
         
        </Routes>
      </div>
    </>
  )
}

export default App
