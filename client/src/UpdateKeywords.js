import React, { Component } from "react"
import "./css/Keywords.css"

class UpdateKeywords extends Component {

   constructor(props) {
      super(props)
      this.state = {
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
      }}
      this.handleClick = this.handleClick.bind(this)
      this.handleSubmit = this.handleSubmit.bind(this)
   }

   handleClick(e) {

      this.setState({
         [e.target.name]: e.target.value === "on" ? true : false
      })
   }

   handleSubmit(e){
      e.preventDefault()
      e.stopPropagation()

      this.props.addKeywords(this.state)
   }

   render() {

      const { beans, cheese, entree, instantPot, meat, onion, pasta, poultry,
              rice, risotto, saucesAndGravies, sideDish, slowCooker, squash } = this.props

      console.log("UpdateKeywords Component: this.props", this.props)
      console.log("UpdateKeywords Component: this.props.data", this.props.data)
      // console.log("UpdateKeywords Component: this.props.instantPot: ", this.props.instantPot)

      return (
         <div className="Keywords-container">

            <form onSubmit={this.handleSubmit}>
               <div className="Keywords-row">
                  <div className="Keywords-div">
                     <label>Beans
               <div className="Keywords-div-input">
                           <input checked={beans} type="checkbox" name="beans" onClick={this.handleClick} className="Keywords-input" />
                        </div>
                     </label>
                  </div>

                  <div className="Keywords-div">
                     <label>Cheese
               <div className="Keywords-div-input">
                           <input checked={cheese} type="checkbox" name="cheese" onClick={this.handleClick} className="Keywords-input" />
                        </div>
                     </label>
                  </div>

                  <div className="Keywords-div">
                     <label>Entree
               <div className="Keywords-div-input">
                           <input checked={entree} type="checkbox" name="entree" onClick={this.handleClick} className="Keywords-input" />
                        </div>
                     </label>
                  </div>

                  <div className="Keywords-div">
                     <label>Instant Pot
               <div>
                           <input checked={instantPot} type="checkbox" name="instantPot" onClick={this.handleClick} className="Keywords-input" />
                        </div>
                     </label>
                  </div>

                  <div className="Keywords-div">
                     <label>Meat
               <div>
                           <input checked={meat} type="checkbox" name="meat" onClick={this.handleClick} className="Keywords-input" />
                        </div>
                     </label>
                  </div>

                  <div className="Keywords-div">
                     <label>Onion
               <div>
                           <input checked={onion} type="checkbox" name="onion" onClick={this.handleClick} className="Keywords-input" />
                        </div>
                     </label>
                  </div>

                  <div className="Keywords-div">
                     <label>Pasta
               <div>
                           <input checked={pasta} type="checkbox" name="pasta" onClick={this.handleClick} className="Keywords-input" />
                        </div>
                     </label>
                  </div>
               </div>

               <div className="Keywords-row">
                  <div className="Keywords-div">
                     <label>Poultry
               <div>
                           <input checked={poultry} type="checkbox" name="poultry" onClick={this.handleClick} className="Keywords-input" />
                        </div>
                     </label>
                  </div>

                  <div className="Keywords-div">
                     <label>Rice
               <div>
                           <input checked={rice} type="checkbox" name="rice" onClick={this.handleClick} className="Keywords-input" />
                        </div>
                     </label>
                  </div>

                  <div className="Keywords-div">
                     <label>Risotto
               <div>
                           <input checked={risotto} type="checkbox" name="risotto" onClick={this.handleClick} className="Keywords-input" />
                        </div>
                     </label>
                  </div>

                  <div className="Keywords-div">
                     <label>Sauces/Gravies
               <div>
                           <input checked={saucesAndGravies} type="checkbox" name="saucesAndGravies" onClick={this.handleClick} className="Keywords-input" />
                        </div>
                     </label>
                  </div>

                  <div className="Keywords-div">
                     <label>Side Dish
               <div>
                           <input checked={sideDish} type="checkbox" name="sideDish" onClick={this.handleClick} className="Keywords-input" />
                        </div>
                     </label>
                  </div>

                  <div className="Keywords-div">
                     <label>Slow Cooker
               <div>
                           <input checked={slowCooker} type="checkbox" name="slowCooker" onClick={this.handleClick} className="Keywords-input" />
                        </div>
                     </label>
                  </div>

                  <div className="Keywords-div">
                     <label>Squash
               <div>
                           <input checked={squash} type="checkbox" name="squash" onClick={this.handleClick} className="Keywords-input" />
                        </div>
                     </label>
                  </div>
               </div>
               <button className="Keywords-button">Update Keywords</button>
            </form>

         </div>
      )
   }
}

export default UpdateKeywords