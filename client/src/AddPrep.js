import React, { Component } from "react"
import "./AddPrep.css"

class AddPrep extends Component {

   constructor(props) {
      super(props)
      this.state = {
         prepStep: "",
         prep: []
      }
      this.handleChange = this.handleChange.bind(this)
      this.addPrep = this.addPrep.bind(this)
      this.handleSubmit = this.handleSubmit.bind(this)
   }

   handleChange(e) {
      this.setState({
         [e.target.name]: e.target.value
      })
   }

   addPrep(e) {
      e.preventDefault()
      e.stopPropagation()

      const { prep, prepStep } = this.state

      this.setState({
         prep: [...prep, { step: prepStep }],
      })
   }

   handleSubmit(e) {
      e.preventDefault()
      this.props.addPrep(this.state.prep)
   }

   render() {
      return (
         <div>

            <form onSubmit={this.addPrep}>

               <div className="AddPrep-container">

                  <div className="AddPrep-two-columns">

                     <label className="AddRecipe-label">Preperation Step:
                  <div>
                        <textarea
                           className="AddRecipe-textarea-description"
                           type="text"
                           rows="6"
                           cols="100"
                           placeholder="Preperation Step"
                           name="prepStep"
                           onChange={this.handleChange}>
                        </textarea>
                     </div>
                  </label>

                  </div>
                  <div className="AddPrep-button-div">
                     <button className="AddPrep-submit-button">Add Prep Step</button>
                     <button className="AddPrep-finished-button" onClick={this.handleSubmit}>Finished Adding Prep Steps</button>
                  </div>
               </div>
            </form>
         </div>
      )
   }
}

export default AddPrep