import React, { Component } from "react"
import "./AddIngredients.css"

class AddIngredients extends Component {

   constructor(props) {
      super(props)
      this.state = {
         amount: "",
         measure: "",
         ingredient: "",
         ingredients: []
      }
      this.handleChange = this.handleChange.bind(this)
      this.addIngredient = this.addIngredient.bind(this)
      this.handleSubmit = this.handleSubmit.bind(this)
   }

   handleChange(e) {
      this.setState({
         [e.target.name]: e.target.value
      })
   }

   addIngredient(e) {
      e.preventDefault()
      e.stopPropagation()

      const { amount, measure, ingredient, ingredients } = this.state

      this.setState({
         ingredients: [...ingredients, { amount: amount, measure: measure, ingredient: ingredient }],
      })
   }

   handleSubmit(e) {
      e.preventDefault()
      this.props.addIngredients(this.state.ingredients)
   }

   render() {
      return (
         <div>

            <form onSubmit={this.addIngredient}>

               <div className="AddIngredients-container">

                  <div className="AddIngredients-two-columns">
                     <label className="AddIngredients-label">Amount:
                     <div>
                           <input
                              className="AddIngredients-input-amount"
                              type="text"
                              placeholder="Amount"
                              name="amount"
                              onChange={this.handleChange}>
                           </input>
                        </div>
                     </label>

                     <label className="AddIngredients-label">Measure:
                     <div>
                           <input
                              className="AddIngredients-input-measure"
                              type="text"
                              placeholder="Measure"
                              name="measure"
                              onChange={this.handleChange}>
                           </input>
                        </div>
                     </label>

                     <label className="AddIngredients-label">Ingredient:
                     <div>
                           <input
                              className="AddIngredients-input-ingredient"
                              type="text"
                              placeholder="Ingredient"
                              name="ingredient"
                              onChange={this.handleChange}>
                           </input>
                        </div>
                     </label>
                  </div>
                  <div className="AddIngredients-button-div">
                     <button className="AddIngredients-submit-button">Add Ingredient</button>
                     <button className="AddIngredients-finished-button" onClick={this.handleSubmit}>Finished Adding Ingredients</button>
                  </div>
               </div>
            </form>
         </div>
      )
   }
}

export default AddIngredients