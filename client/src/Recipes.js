import React, { Component } from 'react';
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
      this.handleClick = this.handleClick.bind(this)
   }

   handleClick(e) {
      console.log("e.target.name", e.target.name)
      console.log("e.target.value", e.target.value)
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

      // const {  title, descriptions, author, 
      //          website, url, image, servings,
      //          time, ingredients, prep, cooked,
      //          cooked_date, keywords, rating    } = this.state.apiResponse.data

      const recipes = this.state.apiResponse.data.map( (recipe, i) => {
         return (
            <div key={recipe._id} id={recipe._id} className="recipe">
               <h2>{recipe.title}</h2>
               <img src={recipe.image} alt={recipe.title} />
               <button
                  name={recipe.title}
                  value={recipe._id}
                  onClick={this.handleClick}
               >
                  More Info
               </button>
               { i < this.state.apiResponse.data.length - 1 && <hr /> }
            </div>
         )
      })

      return (
         <div className="main-container">
            <div className="left-side-container">
               {recipes}
            </div>
            <div className="right-side-container">
               <h1>Main Container</h1>
            </div>
         </div >
      )
   }
}

export default Recipes