import React, { Component } from "react"
import "./NavBar.css"

class NavBar extends Component {

   render() {
      return (
         <div className="NavBar">
            <div className="NavBar-left-side">
               <>Signed in as: Mike Giebner</>
            </div>
            <div className="NavBar-right-side">
               <button className="NavBar-Login-button">LOGIN</button>
               <button className="NavBar-SignUp-button">SIGN UP</button>
               <button className="NavBar-SignOut-button">SIGN OUT</button>
            </div>

         </div>
      )
   }
}

export default NavBar