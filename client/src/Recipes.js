import React, { Component, Fragment } from 'react';
import SideRecipes from "./SideRecipes"
import axios from "axios"
import "./Recipes.css"

class Recipes extends Component {

   constructor(props) {
      super(props)
      this.state = {
         data:
            [{
               title: "",
               descriptions: "",
               author: "",
               website: "",
               url: "",
               image: "",
               servings: "",
               time: "",
               ingredients: "",
               prep: "",
               cooked: "",
               cooked_date: "",
               keywords: "",
               rating: 0
            }],
         chosenRecipe: [{
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
            keywords: "",
            rating: 0
         }]
      }
      this.selectRecipe = this.selectRecipe.bind(this)
   }

   selectRecipe(recipe) {
      console.log("Received recipe: ", recipe)
      this.setState({
         chosenRecipe: recipe
      })
      console.log("state: ", this.state)
   }

   async callAPI() {
      try {
         this.setState({
            data: await axios.get("http://localhost:9000/recipes")
         })
      } catch (error) {
         console.error(error)
      }
   }

   componentDidMount() {
      this.callAPI()
   }

   render() {

      var data = this.state.data

      /* The ternary operator below is because sometimes the data from the db
         is one-level down in an array, and sometimes it is two-levels down
         in an array */
      {
         Array.isArray(data) ? data = data : data = data.data
      }

      const { title, ingredients, prep } = this.state.chosenRecipe[0]
      console.log("ingredients: ", ingredients)

      const showIngredients = ingredients.map((ingredient) => {
         return (
            <Fragment>
               <p>
                  {ingredient.amount} {ingredient.ingredient}
               </p>
            </Fragment>
         )
      })

      const showPrep = prep.map((step, i) => {
         return (
            <Fragment>
               <p><strong>Step {i + 1}:</strong>
                  {step}
               </p>
            </Fragment>
         )
      })

      return (
         <div className="main-container">
            <div className="left-side-container">
               <SideRecipes
                  data={data}
                  selectRecipe={this.selectRecipe}
               />
            </div>
            <div className="right-side-container">               <button>Edit</button>
               <button>Delete</button>
               {title !== "" ? <h1>{title}</h1> : (<><h1>Main Recipe Page</h1> <h2>Click on a Recipe to the Left for More Information</h2></>)}
               <p className="description">{this.state.chosenRecipe[0].description}</p>
               <img src={this.state.chosenRecipe[0].image} alt={this.state.chosenRecipe[0].title} />
               <div className="right-side-inner-container">
                  <div className="right-side-ingredients">
                     {title !== "" ? <h4>Ingredients:</h4> : ""}
                     {showIngredients}
                  </div>
                  <div className="right-side-prep">
                     {title !== "" ? <h4>Prep:</h4> : ""}
                     {title !== "" ? showPrep : ""}
                  </div>
               </div>
            </div>
         </div >
      )
   }
}

export default Recipes