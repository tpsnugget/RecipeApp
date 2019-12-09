import React, { Component } from "react"
import { Link } from "react-router-dom"
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
               { isLoggedIn ? <>Signed in as: Mike Giebner</> : <>Please Login or Sign Up<i className="fa fa-arrow-right"></i></>}
            </div>
            <div className="NavBar-right-side">
               { isLoggedIn ? "" : <Link to="/login" className="NavBar-Login-button">LOGIN</Link>}
               { isLoggedIn ? "" : <Link to="/signup" className="NavBar-SignUp-button">SIGN UP</Link>}
               { isLoggedIn ? <Link className="NavBar-SignOut-button">SIGN OUT</Link> : ""}
            </div>
         </div>
      )
   }
}

export default NavBar

