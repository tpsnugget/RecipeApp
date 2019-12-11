import React, { Component } from "react"
import { Link, Redirect } from "react-router-dom"
import "./NavBar.css"

class NavBar extends Component {

   constructor(props){
      super(props)
      this.state = {
         isLoggedIn: this.props.isLoggedIn
      }
      this.toggleClick = this.toggleClick.bind(this)
   }

   toggleClick(){
      this.setState({
         isLoggedIn: false
      })
   }

   render() {

      const { isLoggedIn } = this.state
      const { first, last } = this.props

      return (
         <div className="NavBar">
         {!isLoggedIn && <Redirect to="/"/>}
            <div className="NavBar-left-side">
               { isLoggedIn ? <>Signed in as: `${first} ${last}`</> : <>Please Login or Sign Up<i className="fa fa-arrow-right"></i></>}
            </div>
            <div className="NavBar-right-side">
               { isLoggedIn ? "" : <Link to="/login" className="NavBar-Login-button">LOGIN</Link>}
               { isLoggedIn ? "" : <Link to="/signup" className="NavBar-SignUp-button">SIGN UP</Link>}
               { isLoggedIn ? <Link to="/" className="NavBar-SignOut-button" onClick={this.toggleClick}>SIGN OUT</Link> : ""}
            </div>
         </div>
      )
   }
}

export default NavBar

