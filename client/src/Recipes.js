import React, { Component } from 'react';
import SideRecipes from "./SideRecipes"
import axios from "axios"
import "./Recipes.css"

class Recipes extends Component {

   constructor(props) {
      super(props)
      this.state = {
         apiResponse: {
            data: [{
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
            }]
         }
      }
      this.selectRecipe = this.selectRecipe.bind(this)
   }

   selectRecipe(id) {
      this.setState({
         _id: id
      })
   }

   async callAPI() {
      try {
         this.setState({
            apiResponse: await axios.get("http://localhost:9000/recipes")
         })
      } catch (error) {
         console.error(error)
      }
   }

   componentWillMount() {
      this.callAPI()
   }

   render() {

      console.log("State: ", this.state.apiResponse.data)

      return (
         <div className="main-container">
            <div className="left-side-container">
               <SideRecipes 
                  data={this.state.apiResponse.data}
                  selectRecipe={this.selectRecipe}
               />
            </div>
            <div className="right-side-container">
               <h1>{this.state._id}</h1>
            </div>
         </div >
      )
   }
}

export default Recipes