import React, { Component } from "react"
import "./UpdatePrep.css"

class UpdatePrep extends Component{

   static defaultProps = {
      prep: []
   }

   constructor(props){
      super(props)
      this.state = {
         prep: this.props.prep,
         count: 1
      }
      this.handleChange = this.handleChange.bind(this)
      this.updatePrep = this.updatePrep.bind(this)
      this.handleSubmit = this.handleSubmit.bind(this)
      this.setPropsToState = this.setPropsToState.bind(this)
   }

   async setPropsToState(){
      try{
         await this.setState({
            prep: this.props.prep
         })
      } catch (error){
         console.error("UpdatePrep Component, setPropsToState error: ", error)
      }
   }

   componentDidUpdate(){
      if(this.state.count === 1){
         this.setPropsToState()
         this.setState({
            count: 2
         })
      }
   }

   handleChange(e) {
      var tempPrep = [...this.state.prep]
      tempPrep[e.target.id] = {step: e.target.value}
      this.setState({
         prep: tempPrep
      })
   }

   updatePrep(e) {
      e.preventDefault()
      e.stopPropagation()

      const { prep, prepStep } = this.state

      this.setState({
         prep: [...prep, { step: prepStep }],
      })
   }

   handleSubmit(e) {
      e.preventDefault()

      // console.log("this.props.prep.length: ", this.props.prep.length)
      // console.log("this.state.prep.length: ", this.state.prep.length)

      this.props.updatePrep(this.state.prep)
   }

   render(){

      var prepSteps = this.state.prep.map( (step, i) => {
         
         var name = `prepStep-${i}`

         return (
            <div>
            <textarea
               id={i}
               className="AddRecipe-textarea-description"
               type="text"
               rows="6"
               cols="100"
               value={step.step}
               name={name}
               // onFocus={this.handleFocus}
               onChange={this.handleChange}>
            </textarea>
         </div>
         )
      } )

      return(
         <div>

            <form onSubmit={this.updatePrep}>

               <div className="AddPrep-container">

                  <div className="AddPrep-two-columns">

                     <label className="AddRecipe-label">Preperation Step:
                        {prepSteps}
                  </label>

                  </div>
                  <div className="AddPrep-button-div">
                     {/* <button className="AddPrep-submit-button">Add Prep Step</button> */}
                     <button className="AddPrep-finished-button" onClick={this.handleSubmit}>Finished Editing Prep Steps</button>
                  </div>
               </div>
            </form>
         </div>
      )
   }
}

export default UpdatePrep