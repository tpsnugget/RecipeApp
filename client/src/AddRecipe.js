import React, { Component } from "react"
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
         rating: 0
      }
      this.handleChange = this.handleChange.bind(this)
      this.handleSubmit = this.handleSubmit.bind(this)
   }

   handleChange(e) {
      this.setState({
         [e.target.name]: e.target.value
      })
   }

   handleSubmit(e){
      e.preventDefault()

      const newRecipe = {
         title: this.state.title,
         descriptions: this.state.descriptions,
         author: this.state.author,
         website: this.state.website,
         url: this.state.url,
         image: this.state.iage,
         servings: this.state.servings,
         time: this.state.time,
         ingredients:this.state.ingredients,
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
               // this.setState({
               //    loggedInId: response.data._id
               // })
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

   render() {

      const { title, descriptions, author, website, url, image, servings, time,
         ingredients, prep, cooked, cooked_date, keywords, rating }
         = this.state

      return (
         <div>
            <form onSubmit={this.handleSubmit} action="" method="post">
               <h1>Add Recipe Page is up Man!</h1>

               <div>
                  <label>Recipe Name:
                  <input
                        type="text"
                        placeholder="Recipe Name"
                        name="title"
                        value={title}
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
                        value={descriptions}
                        onChange={this.handleChange}>
                     </textarea>
                  </label>
               </div>

               <div>
                  <label>Author:
                  <input
                        type="text"
                        placeholder="Author"
                        name="author"
                        value={author}
                        onChange={this.handleChange}>
                     </input>
                  </label>

                  <label>Website:
                  <input
                        type="text"
                        placeholder="Website"
                        name="website"
                        value={website}
                        onChange={this.handleChange}>
                     </input>
                  </label>

                  <label>Servings:
                  <input
                        type="text"
                        placeholder="Servings"
                        name="servings"
                        value={servings}
                        onChange={this.handleChange}>
                     </input>
                  </label>

                  <label>Time:
                     <input
                        type="text"
                        placeholder="Time"
                        name="time"
                        value={time}
                        onChange={this.handleChange}>
                     </input>
                  </label>
               </div>

               <div>
                  <label>url:
                  <textarea
                        type="text"
                        rows="1"
                        cols="100"
                        placeholder="url"
                        name="url"
                        value={url}
                        onChange={this.handleChange}>
                     </textarea>
                  </label>
               </div>

               <div>
                  <label>image url:
                  <textarea
                        type="text"
                        rows="1"
                        cols="100"
                        placeholder="image url"
                        name="image"
                        value={image}
                        onChange={this.handleChange}>
                     </textarea>
                  </label>
               </div>

               <div>
               <label>Ingredients:
                     <input
                        type="text"
                        placeholder="Ingredient"
                        name="ingredients"
                        value={ingredients}
                        onChange={this.handleChange}>
                     </input>
                  </label>

               <label>Prep:
                     <input
                        type="text"
                        placeholder="Prep"
                        name="prep"
                        value={prep}
                        onChange={this.handleChange}>
                     </input>
                  </label>

               <label>Cooked:
                     <input
                        type="text"
                        placeholder="Yes or No"
                        name="cooked"
                        value={cooked}
                        onChange={this.handleChange}>
                     </input>
                  </label>

               <label>Cooked Date:
                     <input
                        type="text"
                        placeholder="Cooked Date"
                        name="cooked_date"
                        value={cooked_date}
                        onChange={this.handleChange}>
                     </input>
                  </label>

               <label>Keywords:
                     <input
                        type="text"
                        placeholder="Keywords"
                        name="keywords"
                        value={keywords}
                        onChange={this.handleChange}>
                     </input>
                  </label>

               <label>Rating:
                     <input
                        type="text"
                        placeholder="Rating"
                        name="rating"
                        value={rating}
                        onChange={this.handleChange}>
                     </input>
                  </label>
               </div>
               <button>Submit</button>
            </form>
         </div>
      )
   }
}

export default AddRecipe