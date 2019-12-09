import React, { Component } from "react"
import "./NavBar.css"

class NavBar extends Component {

   constructor(props){
      super(props)
      this.state = {
         isLoggedIn: false
      }
   }

   render() {

      const { isLoggedIn } = this.state

      return (
         <div className="NavBar">
            <div className="NavBar-left-side">
               { isLoggedIn ? <>Signed in as: Mike Giebner</> : <>Please Login or Sign Up</>}
            </div>
            <div className="NavBar-right-side">
               { isLoggedIn ? "" : <button className="NavBar-Login-button">LOGIN</button>}
               { isLoggedIn ? "" : <button className="NavBar-SignUp-button">SIGN UP</button>}
               { isLoggedIn ? <button className="NavBar-SignOut-button">SIGN OUT</button> : ""}
            </div>

         </div>
      )
   }
}

export default NavBar