import React, { Component } from "react"
import { Link } from "react-router-dom"
import "./Login.css"

class Login extends Component {

   constructor(props) {
      super(props)
      this.state = {
         username: "",
         password: ""
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

      console.log("e.target: ", e.target)

      this.setState({
         username: "",
         password: ""
      })
   }

   render() {

      const { username, password } = this.state

      return (
         <>
            <h1>Login is up Man!</h1>
            <div className="Login">
               <form onSubmit={this.handleSubmit}>
                  <div className="Login-div-row">
                     <label>Username:
                  <input className="Login-input-column-one"
                           type="text"
                           placeholder="Username"
                           name="username"
                           value={username}
                           onChange={this.handleChange}
                        />
                     </label>
                     <label>Password:
                  <input className="Login-input-column-one"
                           type="password"
                           placeholder="Password"
                           name="password"
                           value={password}
                           onChange={this.handleChange}
                        />
                     </label>
                  </div>
                  <Link
                     to="/recipes"
                     className="Login-button"
                  >Submit</Link>
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