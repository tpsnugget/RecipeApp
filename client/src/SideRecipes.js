import React, { Component } from "react"

class SideRecipes extends Component {

   constructor(props) {
      super(props)
      this.handleClick = this.handleClick.bind(this)
   }

   handleClick(e) {
      const selectedRecipe = this.props.data.filter((r) => {
         return r._id === e.target.value
      })
      this.props.selectRecipe(selectedRecipe)
   }

   render() {
      const { data } = this.props

      const recipes = data.map((recipe, i) => {
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
               {i < data.length - 1 && <hr />}
            </div>
         )
      })
      return recipes
   }
}

export default SideRecipes