import React, { Component } from "react"
import "./UpdateIngredients.css"

class UpdateIngredients extends Component {

   static defaultProps = {
      ingredients: []
   }

   constructor(props) {
      super(props)
      this.state = {
         ingredients: this.props.ingredients,
         count: 1
      }
      this.handleAmountChange = this.handleAmountChange.bind(this)
      this.handleMeasureChange = this.handleMeasureChange.bind(this)
      this.handleIngredientChange = this.handleIngredientChange.bind(this)
      this.addIngredient = this.addIngredient.bind(this)
      this.handleSubmit = this.handleSubmit.bind(this)
      this.setPropsToState = this.setPropsToState.bind(this)
   }


   async setPropsToState(){
      try{
         await this.setState({
            ingredients: this.props.ingredients
         })
      } catch (error){
         console.error("UpdatePrep Component, setPropsToState error: ", error)
      }
   }

   componentDidUpdate() {
      if(this.state.count === 1){
         this.setPropsToState()
         this.setState({
            count: 2
         })
      }
   }

   handleAmountChange(e) {
      var tempState = [...this.state.ingredients]
      var tempIngredient = tempState[e.target.id]
      tempIngredient = { ...tempIngredient, amount: e.target.value }
      tempState[e.target.id] = tempIngredient
      console.log("tempIngredient: ", tempIngredient)
      this.setState({
         ingredients: tempState
      })
   }

   handleMeasureChange(e) {
      var tempState = [...this.state.ingredients]
      var tempIngredient = tempState[e.target.id]
      tempIngredient = { ...tempIngredient, measure: e.target.value }
      tempState[e.target.id] = tempIngredient
      console.log("tempIngredient: ", tempIngredient)
      this.setState({
         ingredients: tempState
      })
   }

   handleIngredientChange(e) {
      var tempState = [...this.state.ingredients]
      var tempIngredient = tempState[e.target.id]
      tempIngredient = { ...tempIngredient, ingredient: e.target.value }
      tempState[e.target.id] = tempIngredient
      console.log("tempIngredient: ", tempIngredient)
      this.setState({
         ingredients: tempState
      })
   }

   addIngredient(e) {
      e.preventDefault()
      e.stopPropagation()

      const { ingredient, ingredients } = this.state

      this.setState({
         ingredients: [...ingredients, { amount: this.state.amount, measure: this.state.measure, ingredient: ingredient }],
      })
   }

   handleSubmit(e) {
      e.preventDefault()
      this.props.addIngredients(this.state.ingredients)
   }

   render() {

      var ingredientList = this.state.ingredients.map((ingredient, i) => {
         return (
            <div className="UpdateIngredient-main-div">
               <label className="UpdateIngredients-label">Amount:
            <div>
                     <input
                        id={i}
                        className="UpdateIngredients-input-amount"
                        type="text"
                        value={ingredient.amount}
                        name="amount"
                        onChange={this.handleAmountChange}>
                     </input>
                  </div>
               </label>

               <label className="UpdateIngredients-label">Measure:
            <div>
                     <input
                        id={i}
                        className="UpdateIngredients-input-measure"
                        type="text"
                        value={ingredient.measure}
                        name="measure"
                        onChange={this.handleMeasureChange}>
                     </input>
                  </div>
               </label>

               <label className="UpdateIngredients-label">Ingredient:
            <div>
                     <input
                        id={i}
                        className="UpdateIngredients-input-ingredient"
                        type="text"
                        value={ingredient.ingredient}
                        name="ingredient"
                        onChange={this.handleIngredientChange}>
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