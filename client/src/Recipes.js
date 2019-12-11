import React, { Component, Fragment } from 'react';
import { Redirect } from "react-router-dom"
import SideRecipes from "./SideRecipes"
import Snackbar from '@material-ui/core/Snackbar';
import axios from "axios"
import "./Recipes.css"
import NavBar from "./NavBar"

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
         }],
         isLoggedIn: true,
         addRecipe: false,
         goodDelete: false,
         snackBarOpen: false,
         msg: "",
      }
      this.selectRecipe = this.selectRecipe.bind(this)
      this.addRecipe = this.addRecipe.bind(this)
      this.deleteRecipe = this.deleteRecipe.bind(this)
   }

   selectRecipe(recipe) {
      this.setState({
         chosenRecipe: recipe
      })
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

   addRecipe() {
      this.setState({
         addRecipe: true
      })
   }

   deleteRecipe() {
      if(this.state.chosenRecipe[0].title === ""){
         this.setState({
            snackBarOpen: true,
            msg: "You must select a recipe before it can be deleted"
         })
         setTimeout(() => {
            this.setState({
               snackBarOpen: false,
               msg: ""
            })
         }, 2000);
      } else {
         axios.delete("http://localhost:9000/recipes", {
            params: {
               _id: this.state.chosenRecipe[0]._id
            }
         })
            .then((response) => {
               if (response.data.name === "MongoError") {
                  this.setState({
                     snackBarOpen: true,
                     msg: "Delete was not successfull"
                  })
               } else {
                  this.setState({
                     snackBarOpen: true,
                     msg: "Delete was successful",
                     goodDelete: true
                  })
                  setTimeout(() => {
                     this.setState({
                        snackBarOpen: false,
                        msg: "",
                        goodDelete: false,
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
                     })
                     this.callAPI()
                  }, 2500);
               }
            })
            .catch((err) => console.log(err))
      }
   }

   render() {

      var data = this.state.data

      /* The ternary operator below is because sometimes the data from the db
         is one-level down in an array, and sometimes it is two-levels down
         in an array */
      {
         if(!Array.isArray(data)){data = data.data}
      }

      const { title, ingredients, prep } = this.state.chosenRecipe[0]

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

      const { addRecipe, snackBarOpen, msg, goodDelete } = this.state

      return (
         <Fragment>
            <Snackbar
               open={snackBarOpen}
               variant="error"
               className={"snackbar"}
               message={msg}
               anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left"
               }}
            />
            <NavBar
               isLoggedIn={this.state.isLoggedIn}
            />
            {addRecipe && <Redirect to="/AddRecipe" />}
            {goodDelete && <Redirect to="/recipes" />}
            <div className="main-container">
               <div className="left-side-container">
                  <SideRecipes
                     data={data}
                     selectRecipe={this.selectRecipe}
                  />
               </div>
               <div className="right-side-container">
                  <button onClick={this.addRecipe}>Add Recipe</button>
                  <button>Edit Recipe</button>
                  <button onClick={this.deleteRecipe}>Delete Recipe</button>
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
         </Fragment>
      )
   }
}

export default Recipes