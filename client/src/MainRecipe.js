import React, { Component, Fragment } from "react"
import "./MainRecipe.css"
import axios from "axios"
import Snackbar from '@material-ui/core/Snackbar';

class MainRecipe extends Component {

   constructor(props) {
      super(props)
      this.state = {
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
      this.addRecipe = this.addRecipe.bind(this)
      this.deleteRecipe = this.deleteRecipe.bind(this)
      this.updateRecipe = this.updateRecipe.bind(this)
   }

   addRecipe() {
      this.setState({
         addRecipe: true
      })
   }

   updateRecipe() {

   }

   deleteRecipe() {
      if (this.props.data.title === "") {
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
               _id: this.props.data._id
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
                     this.props.callAPI()
                  }, 2500);
               }
            })
            .catch((err) => console.log(err))
      }
   }


   render() {

      const { snackBarOpen, msg } = this.state
      const { title, ingredients, prep, description, image } = this.props.data

      const showIngredients = ingredients.map((ingredient) => {
         return (
            <Fragment>
               <p>
                  {ingredient.amount} {ingredient.measure} {ingredient.ingredient}
               </p>
            </Fragment>
         )
      })

      const showPrep = prep.map((step, i) => {
         return (
            <Fragment>
               <p><strong>Step {i + 1}:</strong>
                  {step.step}
               </p>
            </Fragment>
         )
      })

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
            <button onClick={this.addRecipe}>Add Recipe</button>
            <button onClick={this.updateRecipe}>Edit Recipe</button>
            <button onClick={this.deleteRecipe}>Delete Recipe</button>

            {title !== "" ? <h1>{title}</h1> : (<><h1>Main Recipe Page</h1> <h2>Click on a Recipe to the Left for More Information</h2></>)}
            <p className="description">{description}</p>
            <img src={image} alt={title} />
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

         </Fragment>
      )
   }
}

export default MainRecipe