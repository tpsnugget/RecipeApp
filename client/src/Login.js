import React, { Component } from "react"
import { Link, Redirect } from "react-router-dom"
import Snackbar from '@material-ui/core/Snackbar';
import axios from "axios"
import "./css/Login.css"

class Login extends Component {

   constructor(props) {
      super(props)
      this.state = {
         first: "",
         last: "",
         username: "",
         password: "",
         passwordFromDB: "",
         _id: "",
         snackBarOpen: false,
         msg: "",
         isLoggedIn: false
      }
      this.handleChange = this.handleChange.bind(this)
      this.handleSubmit = this.handleSubmit.bind(this)
   }

   handleChange(e) {
      this.setState({
         [e.target.name]: e.target.value
      })
   }

   handleSubmit(e) {
      e.preventDefault()

      axios.get("http://localhost:9000/signup", {
         params: {
            username: this.state.username.toLowerCase()
         }
      })
         .then((response) => {
            if (response.data === "") {
               console.log("axios.get not in the db")
            } else {
               this.setState({
                  first: response.data.first,
                  last: response.data.last,
                  username: response.data.username,
                  passwordFromDB: response.data.password,
                  _id: response.data._id
               })
               this.checkForGoodLogin()
            }
         })
         .catch((err) => console.log(err))
   }

   checkForGoodLogin(){
      if( this.state._id && ( this.state.password === this.state.passwordFromDB ) ){
         this.setState({
            snackBarOpen: true,
            msg: "Successfull Login",
         })
         setTimeout(() => {
            this.setState({
               isLoggedIn: true
            })
         }, 3000);
      } else {
         this.setState({
            first: "",
            last: "",
            username: "",
            password: "",
            passwordFromDB: "",
            _id: "",
            snackBarOpen: true,
            msg: "Login not successful",
         })
      }
   }

   render() {

      if (this.state.snackBarOpen) {
         setTimeout(() => {
            this.setState({
               snackBarOpen: false
            })
         }, 2500);
      }

      const { username, password, snackBarOpen, msg, isLoggedIn } = this.state

      return (
         <>
         {isLoggedIn && <Redirect to={{
            pathname: "/recipes",
            state: {
               isLoggedIn: true,
               username: this.state.username
            }
         }} />}
            <Snackbar
               open={snackBarOpen}
               variant="error"
               className={"snackbar"}
               message={msg}
               anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left"
               }}
            />
            <h1 className="Login-h1">Login</h1>
            <div className="Login">
               <form onSubmit={this.handleSubmit}>
                  <div className="Login-div-row">
                     <label className="Login-label">Username:
                  <input className="Login-input"
                           type="text"
                           placeholder="Username"
                           name="username"
                           value={username}
                           onChange={this.handleChange}
                        />
                     </label>
                     <label className="Login-label">Password:
                  <input className="Login-input"
                           type="password"
                           placeholder="Password"
                           name="password"
                           value={password}
                           onChange={this.handleChange}
                        />
                     </label>
                  </div>
                  <button
                     className="Login-button"
                  >Submit</button>
                  <Link
                     to="/"
                     className="Login-button"
                  >Cancel</Link>
               </form>
            </div>
         </>
      )
   }
}

export default Login