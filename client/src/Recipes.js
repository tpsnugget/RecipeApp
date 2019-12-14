import React, { Component, Fragment } from 'react';
import { Redirect } from "react-router-dom"
import SideRecipes from "./SideRecipes"
import MainRecipe from "./MainRecipe"
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
               description: "",
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
            description: "",
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
      this.callAPI = this.callAPI.bind(this)
   }

   selectRecipe(recipe) {
      this.setState({
         chosenRecipe: recipe
      })
   }

   async callAPI() {
      try {
         this.setState({
            data: await axios.get("http://localhost:9000/recipes", {})
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
         if(!Array.isArray(data)){data = data.data}
      }

      const { title, ingredients, prep } = this.state.chosenRecipe[0]



      const { addRecipe, snackBarOpen, msg, goodDelete } = this.state

      return (
         <Fragment>
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
               <MainRecipe data={this.state.chosenRecipe[0]} callAPI={this.callAPI} />


               </div>
            </div >
         </Fragment>
      )
   }
}

export default Recipes