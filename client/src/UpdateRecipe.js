import React, { Component } from "react"
import { Redirect } from "react-router-dom"
import "./UpdateRecipe.css"
import axios from "axios"
import AddIngredients from "./AddIngredients"
import AddPrep from "./AddPrep"
import UpdateKeywords from "./UpdateKeywords"

class UpdateRecipe extends Component {

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
               ingredients: [""],
               prep: [""],
               cooked: "",
               cooked_date: "",
               keywords: {
                  beans: false,
                  cheese: false,
                  entree: false,
                  instantPot: false,
                  meat: false,
                  onion: false,
                  pasta: false,
                  poultry: false,
                  rice: false,
                  risotto: false,
                  saucesAndGravies: false,
                  sideDish: false,
                  slowCooker: false,
                  squash: false
               },
               rating: 0,
               _id: ""
            }],
         addRecipeSuccessful: false,
         recipeValidationError: false,
         snackBarOpen: false,
         msg: "",
         cancel: false,
         goToAddIngredients: false
      }
      this.handleChange = this.handleChange.bind(this)
      this.handleSubmit = this.handleSubmit.bind(this)
      this.cancel = this.cancel.bind(this)
      this.addIngredients = this.addIngredients.bind(this)
      this.addPrep = this.addPrep.bind(this)
      this.addKeywords = this.addKeywords.bind(this)
   }

   async callAPI() {
      axios.get("http://localhost:9000/recipes", {
         params: {
            _id: this.props.location.state.id
         }
      })
         .then((response) => {
            if (response.data === "") {
               console.log("axios.get not in the db")
            } else {
               this.setState({
                  title: response.data[0].title,
                  description: response.data[0].description,
                  author: response.data[0].author,
                  website: response.data[0].website,
                  url: response.data[0].url,
                  image: response.data[0].image,
                  servings: response.data[0].servings,
                  time: response.data[0].time,
                  ingredients: response.data[0].ingredients,
                  prep: response.data[0].prep,
                  cooked: "",
                  cooked_date: "",
                  keywords: response.data[0].keywords,
                  rating: 0,
                  _id: response.data[0]._id
               })
            }
         })
         .catch((err) => console.log(err))
   }

   componentDidMount() {
      this.callAPI()
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
         prep: this.state.prep,
         cooked: this.state.cooked,
         cooked_date: this.state.cooked_date,
         keywords: [this.state.keywords],
         _id: this.state._id
      }

      axios.put("http://localhost:9000/recipes", newRecipe)
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
   }

   render() {

      const { title, description, author, website, servings, time, url, image, cancel } = this.state
      console.log("UpdateRecipe Component: this.state: ", this.state)
      return (
         <div>
            {cancel && <Redirect to="/recipes" />}
            <form onSubmit={this.handleSubmit} action="" method="post">

               <h1 className="UpdateRecipe-h1">Update Recipe</h1>

               <div className="UpdateRecipe-container">

                  <label className="UpdateRecipe-label">Recipe Name:
                  <div>
                        <input
                           className="UpdateRecipe-input"
                           type="text"
                           value={title}
                           name="title"
                           onChange={this.handleChange}>
                        </input>
                     </div>
                  </label>

                  <label className="UpdateRecipe-label">Description:
                  <div>
                        <textarea
                           className="UpdateRecipe-textarea-description"
                           type="text"
                           rows="10"
                           cols="100"
                           value={description}
                           name="descriptions"
                           onChange={this.handleChange}>
                        </textarea>
                     </div>
                  </label>

                  <div className="UpdateRecipe-two-columns">
                     <label className="UpdateRecipe-label">Author:
                     <div>
                           <input
                              className="UpdateRecipe-input"
                              type="text"
                              value={author}
                              name="author"
                              onChange={this.handleChange}>
                           </input>
                        </div>
                     </label>

                     <label className="UpdateRecipe-label">Website:
                     <div>
                           <input
                              className="UpdateRecipe-input"
                              type="text"
                              value={website}
                              name="website"
                              onChange={this.handleChange}>
                           </input>
                        </div>
                     </label>
                  </div>

                  <div className="UpdateRecipe-two-columns">
                     <label className="UpdateRecipe-label">Servings:
                     <div>
                           <input
                              className="UpdateRecipe-input"
                              type="text"
                              value={servings}
                              name="servings"
                              onChange={this.handleChange}>
                           </input>
                        </div>
                     </label>

                     <label className="UpdateRecipe-label">Time:
                     <div>
                           <input
                              className="UpdateRecipe-input"
                              type="text"
                              value={time}
                              name="time"
                              onChange={this.handleChange}>
                           </input>
                        </div>
                     </label>
                  </div>

                  <label className="UpdateRecipe-label">url:
                     <div>
                        <textarea
                           className="UpdateRecipe-textarea"
                           type="text"
                           rows="1"
                           cols="100"
                           value={url}
                           name="url"
                           onChange={this.handleChange}>
                        </textarea>
                     </div>
                  </label>

                  <label className="UpdateRecipe-label">image url:
                     <div>
                        <textarea
                           className="UpdateRecipe-textarea"
                           type="text"
                           rows="1"
                           cols="100"
                           value={image}
                           name="image"
                           onChange={this.handleChange}>
                        </textarea>
                     </div>
                  </label>

                  <AddIngredients addIngredients={this.addIngredients} />
                  <AddPrep addPrep={this.addPrep} />
                  {/* <UpdateKeywords addKeywords={this.addKeywords} data={this.state}/> */}

                  <button className="UpdateRecipe-submit-button">Update Recipe</button>
               </div>
            </form>
            <button className="UpdateRecipe-cancel-button" onClick={this.cancel}>Cancel</button>
         </div>
      )
   }
}

export default UpdateRecipe