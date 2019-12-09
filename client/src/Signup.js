import React, { Component } from "react"
import { Link } from "react-router-dom"
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
         password2: ""
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

      const newUser = {
         first: this.state.first,
         last: this.state.last,
         username: this.state.username,
         email: this.state.email,
         password: this.state.password
      }

      axios.post("http://localhost:9000/signup", newUser)

      this.setState({
         first: "",
         last: "",
         username: "",
         email: "",
         password: "",
         password2: ""
      })
   }

   render() {

      const { first, last, username, email, password, password2 } = this.state

      return (
         <>
            <h1>Signup is up Man!</h1>
            <div className="Signup">
               <form onSubmit={this.handleSubmit} action="" method="post">
                  <div className="Signup-div-row">
                     <label>First Name:
                  <input className="Signup-input-column-one"
                           type="text"
                           placeholder="First Name"
                           name="first"
                           value={first}
                           onChange={this.handleChange}
                        />
                     </label>
                     <label>Last Name:
                  <input
                           type="text"
                           placeholder="Last Name"
                           name="last"
                           value={last}
                           onChange={this.handleChange}
                        />
                     </label>
                  </div>

                  <div className="Signup-div-row">
                     <label>Username:
                  <input className="Signup-input-column-one"
                           type="text"
                           placeholder="Username"
                           name="username"
                           value={username}
                           onChange={this.handleChange}
                        />
                     </label>
                     <label>Email:
                  <input
                           type="email"
                           placeholder="Email"
                           name="email"
                           value={email}
                           onChange={this.handleChange}
                        />
                     </label>
                  </div>

                  <div className="Signup-div-row">
                     <label>Password:
                  <input className="Signup-input-column-one"
                           type="password"
                           placeholder="Password"
                           name="password"
                           value={password}
                           onChange={this.handleChange}
                        />
                     </label>
                     <label>Password:
                  <input
                           type="password"
                           placeholder="Password"
                           name="password2"
                           value={password2}
                           onChange={this.handleChange}
                        />
                     </label>
                  </div>
                  <Link
                     to="/login"
                     className="Signup-button"
                  >Submit</Link>
                  <button>Submit</button>
                  <Link
                     to="/"
                     className="Signup-button"
                  >Cancel</Link>
               </form>
            </div>
         </>
      )
   }
}

export default Signup