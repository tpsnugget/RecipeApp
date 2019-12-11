import React, { Component } from "react"
import { Redirect } from "react-router-dom"
import "./AddRecipe.css"
import axios from "axios"

class AddRecipe extends Component {

   constructor(props) {
      super(props)
      this.state = {
         title: "",
         descriptions: "",
         author: "",
         website: "",
         url: "",
         image: "",
         servings: "",
         time: "",
         ingredients: [""],
         prep: [""],
         cooked: "",
         cooked_date: "",
         keywords: [""],
         rating: 0,
         addRecipeSuccessful: false
      }
      this.handleChange = this.handleChange.bind(this)
      this.handleSubmit = this.handleSubmit.bind(this)
      this.addPrep = this.addPrep.bind(this)
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
         descriptions: this.state.descriptions,
         author: this.state.author,
         website: this.state.website,
         url: this.state.url,
         image: this.state.image,
         servings: this.state.servings,
         time: this.state.time,
         ingredients: this.state.ingredients,
         prep: [this.state.prep],
         cooked: this.state.cooked,
         cooked_date: this.state.cooked_date,
         keywords: [this.state.keywords],
         rating: this.state.rating
      }

      axios.post("http://localhost:9000/recipes", newRecipe)
         .then((response) => {
            console.log(response)
            if (response.data.name === "MongoError") {
               // this.setState({
               //    loggedInId: false,
               //    snackBarOpen: true,
               //    msg: "Those login credentials have already been used"
               // })
            } else {
               this.setState({
                  addRecipeSuccessful: true
               })
            }
         })
         .catch((err) => console.log(err))

      this.setState({
         title: "",
         descriptions: "",
         author: "",
         website: "",
         url: "",
         image: "",
         servings: "",
         time: "",
         ingredients: [""],
         prep: [""],
         cooked: "",
         cooked_date: "",
         keywords: [""],
         rating: 0
      })
   }

   addPrep(e) {
      var newStep = [this.state.prep]
      newStep.push(e.target.value)
      console.log("prep is array: ", Array.isArray(newStep))
      console.log("e.target.value: ", e.target.value)
      this.setState({
         prep: newStep
      })
   }

   render() {

      return (
         <div>
            {this.state.addRecipeSuccessful && <Redirect to="/recipes" />}
            <form onSubmit={this.handleSubmit} action="" method="post">
               <h1>Add a New Recipe</h1>

               <div className="AddRecipe-div">
                  <label>Recipe Name:
                  <input
                        type="text"
                        placeholder="Recipe Name"
                        name="title"
                        onChange={this.handleChange}>
                     </input>
                  </label>

                  <label>Description:
                  <textarea
                        type="text"
                        rows="5"
                        cols="100"
                        placeholder="Description"
                        name="descriptions"
                        onChange={this.handleChange}>
                     </textarea>
                  </label>
               </div>

               <div className="AddRecipe-div">
                  <label>Author:
                  <input
                        type="text"
                        placeholder="Author"
                        name="author"
                        onChange={this.handleChange}>
                     </input>
                  </label>

                  <label>Website:
                  <input
                        type="text"
                        placeholder="Website"
                        name="website"
                        onChange={this.handleChange}>
                     </input>
                  </label>

                  <label>Servings:
                  <input
                        type="text"
                        placeholder="Servings"
                        name="servings"
                        onChange={this.handleChange}>
                     </input>
                  </label>

                  <label>Time:
                     <input
                        type="text"
                        placeholder="Time"
                        name="time"
                        onChange={this.handleChange}>
                     </input>
                  </label>
               </div>

               <div className="AddRecipe-div">
                  <label>url:
                  <textarea
                        type="text"
                        rows="1"
                        cols="100"
                        placeholder="url"
                        name="url"
                        onChange={this.handleChange}>
                     </textarea>
                  </label>
               </div>

               <div className="AddRecipe-div">
                  <label>image url:
                  <textarea
                        type="text"
                        rows="1"
                        cols="100"
                        placeholder="image url"
                        name="image"
                        onChange={this.handleChange}>
                     </textarea>
                  </label>
               </div>

               <div className="AddRecipe-div">
                  <p>Ingredients:</p>
                  <label>Amount
                     <input
                        type="text"
                        placeholder="Ingredient"
                        name="ingredients"
                        onChange={this.handleChange}>
                     </input>
                  </label>
                  <label>Ingredient
                     <input
                        type="text"
                        placeholder="Ingredient"
                        name="ingredients"
                        onChange={this.handleChange}>
                     </input>
                  </label>
                  <span>Add another ingredient</span>
               </div>

               <div className="AddRecipe-div">
                     <label>Prep:
                     <input
                           type="text"
                           placeholder="Prep"
                           name="prep"
                           onChange={this.handleChange}>
                        </input>
                        <button onClick={this.addPrep}>Add another prep step</button>
                     </label>
               </div>

               <div className="AddRecipe-div">
                  <label>Cooked:
                     <input
                        type="text"
                        placeholder="Yes or No"
                        name="cooked"
                        onChange={this.handleChange}>
                     </input>
                  </label>

                  <label>Cooked Date:
                     <input
                        type="text"
                        placeholder="Cooked Date"
                        name="cooked_date"
                        onChange={this.handleChange}>
                     </input>
                  </label>

                  <label>Keywords:
                     <input
                        type="text"
                        placeholder="Keywords"
                        name="keywords"
                        onChange={this.handleChange}>
                     </input>
                  </label>

                  <label>Rating:
                     <input
                        type="text"
                        placeholder="Rating"
                        name="rating"
                        onChange={this.handleChange}>
                     </input>
                  </label>
               </div>
               <button>Submit</button>
            </form>

            <div className="AddRecipe-array-div">
               <div className="AddRecipe-ingredients">
                  <h3>Ingredients:</h3>
                  {this.state.ingredient}
               </div>
               <div className="AddRecipe-pred">
                  <h3>Prep Steps:</h3>
                  {this.state.prep}
               </div>
            </div>

         </div>
      )
   }
}

export default AddRecipe