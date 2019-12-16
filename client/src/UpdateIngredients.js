import React, { Component } from "react"
import "./UpdateIngredients.css"

class UpdateIngredients extends Component {

   static defaultProps = {
      ingredients: []
   }

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

      var ingredientList = this.props.ingredients.map((ingredient) => {
         return (
            <div className="UpdateIngredient-main-div">
               <label className="UpdateIngredients-label">Amount:
            <div>
                     <input
                        className="UpdateIngredients-input-amount"
                        type="text"
                        value={ingredient.amount}
                        name="amount"
                        onChange={this.handleChange}>
                     </input>
                  </div>
               </label>

               <label className="UpdateIngredients-label">Measure:
            <div>
                     <input
                        className="UpdateIngredients-input-measure"
                        type="text"
                        value={ingredient.measure}
                        name="measure"
                        onChange={this.handleChange}>
                     </input>
                  </div>
               </label>

               <label className="UpdateIngredients-label">Ingredient:
            <div>
                     <input
                        className="UpdateIngredients-input-ingredient"
                        type="text"
                        value={ingredient.ingredient}
                        name="ingredient"
                        onChange={this.handleChange}>
                     </input>
                  </div>
               </label>
            </div>
         )
      })

      return (
         <div>

            <form onSubmit={this.addIngredient}>

               <div className="UpdateIngredients-container">

                  <div className="UpdateIngredients-two-columns">
                     {ingredientList}
                  </div>
                  <div className="UpdateIngredients-button-div">
                     {/* <button className="UpdateIngredients-submit-button">Add Ingredient</button> */}
                     <button className="UpdateIngredients-finished-button" onClick={this.handleSubmit}>Finished Editing Ingredients</button>
                  </div>
               </div>
            </form>
         </div>
      )
   }
}

export default UpdateIngredients