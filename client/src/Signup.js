import React, { Component, Fragment } from "react"
import { Link, Redirect } from "react-router-dom"
import Snackbar from '@material-ui/core/Snackbar';
import axios from "axios"
import "./Signup.css"

class Signup extends Component {

   constructor(props) {
      super(props)
      this.state = {
         first: "",
         last: "",
         username: "",
         email: "",
         password: "",
         password2: "",
         loggedInId: false,
         snackBarOpen: false,
         msg: ""
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

      // send the data somewhere
      if (this.state.first === "" || this.state.last === "" || this.state.username === "" ||
         this.state.email === "" || this.state.password === "" || this.state.password2 === "") {
         this.setState({
            snackBarOpen: true,
            msg: "Entries not allowed to be empty, please try again"
         })
      } else {
         const newUser = {
            first: this.state.first,
            last: this.state.last,
            username: this.state.username.toLowerCase(),
            email: this.state.email,
            password: this.state.password
         }

         axios.post("http://localhost:9000/signup", newUser)
            .then((response) => {
               console.log(response)
               if (response.data.name === "MongoError") {
                  this.setState({
                     loggedInId: false,
                     snackBarOpen: true,
                     msg: "Those login credentials have already been used"
                  })
               } else {
                  this.setState({
                     loggedInId: response.data._id
                  })
               }
            })
            .catch((err) => console.log(err))

         this.setState({
            first: "",
            last: "",
            username: "",
            email: "",
            password: "",
            password2: ""
         })
      }
   }

   render() {

      if (this.state.snackBarOpen) {
         setTimeout(() => {
            this.setState({
               snackBarOpen: false
            })
         }, 3000);
      }

      const { first, last, username, email, password, password2,
         loggedInId, snackBarOpen, msg } = this.state

      return (
         <Fragment>
            {loggedInId && <Redirect to="/login" />}
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

            <div className="Signup">
               <h1 className="Signup-h1">Signup</h1>

               <div className="Signup-container">

                  <form onSubmit={this.handleSubmit} action="" method="post">

                     <div className="Signup-div-row">
                        <label className="Signup-label">First Name:
                           <div>
                              <input className="Signup-input"
                                 type="text"
                                 placeholder="First Name"
                                 name="first"
                                 value={first}
                                 onChange={this.handleChange}
                              />
                           </div>
                        </label>

                        <label className="Signup-label">Last Name:
                           <div>
                              <input className="Signup-input"
                                 type="text"
                                 placeholder="Last Name"
                                 name="last"
                                 value={last}
                                 onChange={this.handleChange}
                              />
                           </div>
                        </label>
                     </div>

                     <div className="Signup-div-row">
                        <label className="Signup-label">Username:
                  <input className="Signup-input"
                              type="text"
                              placeholder="Username"
                              name="username"
                              value={username}
                              onChange={this.handleChange}
                           />
                        </label>
                        <label className="Signup-label">Email:
                           <input className="Signup-input"
                              type="email"
                              placeholder="Email"
                              name="email"
                              value={email}
                              onChange={this.handleChange}
                           />
                        </label>
                     </div>

                     <div className="Signup-div-row">
                        <label className="Signup-label">Password:
                  <input className="Signup-input"
                              type="password"
                              placeholder="Password"
                              name="password"
                              value={password}
                              onChange={this.handleChange}
                           />
                        </label>
                        <label className="Signup-label">Password:
                           <input className="Signup-input"
                              type="password"
                              placeholder="Password"
                              name="password2"
                              value={password2}
                              onChange={this.handleChange}
                           />
                        </label>
                     </div>
                     <button>Submit</button>
                     <Link
                        to="/"
                        className="Signup-button"
                     >Cancel</Link>

                  </form>
               </div>
            </div>
         </Fragment>
      )
   }
}

export default Signup