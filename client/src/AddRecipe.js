import React, { Component } from "react"
import { Redirect } from "react-router-dom"
import "./AddRecipe.css"
import axios from "axios"
import AddIngredients from "./AddIngredients"
import AddPrep from "./AddPrep"
// import Keywords from "./Keywords"

class AddRecipe extends Component {

   constructor(props) {
      super(props)
      this.state = {
         title: "",
         description: "",
         author: "",
         website: "",
         url: "",
         image: "",
         servings: "",
         time: "",
         ingredients: [],
         prep: [],
         addRecipeSuccessful: false,
         recipeValidationError: false,
         snackBarOpen: false,
         msg: "",
         cancel: false,
         goToAddIngredients: false
      }
      this.handleChange = this.handleChange.bind(this)
      this.handleSubmit = this.handleSubmit.bind(this)
      this.addPrep = this.addPrep.bind(this)
      this.cancel = this.cancel.bind(this)
      this.addIngredients = this.addIngredients.bind(this)
      this.addPrep = this.addPrep.bind(this)
      this.addKeywords = this.addKeywords.bind(this)
   }

   handleChange(e) {
      this.setState({
         [e.target.name]: e.target.value
      })
   }

   handleSubmit(e) {
      e.preventDefault()

      const newRecipe = {
         title: this.state.title,
         description: this.state.descriptions,
         author: this.state.author,
         website: this.state.website,
         url: this.state.url,
         image: this.state.image,
         servings: this.state.servings,
         time: this.state.time,
         ingredients: this.state.ingredients,
         prep: this.state.prep
      }

      axios.post("http://localhost:9000/recipes", newRecipe)
         .then((response) => {
            console.log(response)
            if (response.data._message === "Recipe validation failed") {
               console.log("Running Recipe Validation Failed code")
               this.setState({
                  snackBarOpen: true,
                  msg: "Recipe not added...",
                  recipeValidationError: true
               })
            } else {
               console.log("Running addRecipe Successful code")
               this.setState({
                  addRecipeSuccessful: true
               })
            }
         })
         .catch((err) => console.log(err))

      this.setState({
         title: "",
         description: "",
         author: "",
         website: "",
         url: "",
         image: "",
         servings: "",
         time: "",
         ingredients: [""],
         prep: [""]
      })
   }

   cancel(){
      this.setState({cancel: true})
   }

   addIngredients(e){
      this.setState({ingredients: e})
   }

   addPrep(e){
      this.setState({prep: e})
   }

   addKeywords(e){
      console.log("addKeywords says: ", e)
      this.setState({keywords: e})
   }

   render() {

      const { addRecipeSuccessful, recipeValidationError, cancel } = this.state

      return (
         <div>
            {addRecipeSuccessful && <Redirect to="/recipes" />}
            {recipeValidationError && <Redirect to="/recipes" />}
            {cancel && <Redirect to="/recipes" />}

            <form onSubmit={this.handleSubmit} action="" method="post">

               <h1 className="AddRecipe-h1">Add a New Recipe</h1>

               <div className="AddRecipe-container">

                  <label className="AddRecipe-label">Recipe Name:
                  <div>
                        <input
                           className="AddRecipe-input"
                           type="text"
                           placeholder="Recipe Name"
                           name="title"
                           onChange={this.handleChange}>
                        </input>
                     </div>
                  </label>

                  <label className="AddRecipe-label">Description:
                  <div>
                        <textarea
                           className="AddRecipe-textarea-description"
                           type="text"
                           rows="10"
                           cols="100"
                           placeholder="Description"
                           name="descriptions"
                           onChange={this.handleChange}>
                        </textarea>
                     </div>
                  </label>

                  <div className="AddRecipe-two-columns">
                     <label className="AddRecipe-label">Author:
                     <div>
                           <input
                              className="AddRecipe-input"
                              type="text"
                              placeholder="Author"
                              name="author"
                              onChange={this.handleChange}>
                           </input>
                        </div>
                     </label>

                     <label className="AddRecipe-label">Website:
                     <div>
                           <input
                              className="AddRecipe-input"
                              type="text"
                              placeholder="Website"
                              name="website"
                              onChange={this.handleChange}>
                           </input>
                        </div>
                     </label>
                  </div>

                  <div className="AddRecipe-two-columns">
                     <label className="AddRecipe-label">Servings:
                     <div>
                           <input
                              className="AddRecipe-input"
                              type="text"
                              placeholder="Servings"
                              name="servings"
                              onChange={this.handleChange}>
                           </input>
                        </div>
                     </label>

                     <label className="AddRecipe-label">Time:
                     <div>
                           <input
                              className="AddRecipe-input"
                              type="text"
                              placeholder="Time"
                              name="time"
                              onChange={this.handleChange}>
                           </input>
                        </div>
                     </label>
                  </div>

                  <label className="AddRecipe-label">url:
                     <div>
                        <textarea
                           className="AddRecipe-textarea"
                           type="text"
                           rows="1"
                           cols="100"
                           placeholder="url"
                           name="url"
                           onChange={this.handleChange}>
                        </textarea>
                     </div>
                  </label>

                  <label className="AddRecipe-label">image url:
                     <div>
                           <textarea
                        className="AddRecipe-textarea"
                        type="text"
                        rows="1"
                        cols="100"
                        placeholder="image url"
                        name="image"
                        onChange={this.handleChange}>
                     </textarea>
                     </div>
                  </label>

                  <AddIngredients addIngredients={this.addIngredients}/>
                  <AddPrep addPrep={this.addPrep}/>
                  {/* <Keywords addKeywords={this.addKeywords}/> */}

                  <button className="AddRecipe-submit-button">Add Recipe</button>
               </div>
            </form>
            <button className="AddRecipe-cancel-button" onClick={this.cancel}>Cancel</button>
         </div>
      )
   }
}

export default AddRecipe