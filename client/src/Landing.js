import React from 'react'
import NavBar from "./NavBar"
import "./css/Landing.css"
import { Link } from "react-router-dom"

function Landing() {
   return (
      <div>
         <NavBar />
         <h1>Recipe App</h1>
         <Link
            className="Landing-button"
            to="/recipes"
         >See All Recipes</Link>
      </div>
   )
}

export default Landing
