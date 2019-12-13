import React, { Component } from "react"
import "./Keywords.css"

class Keywords extends Component {

   constructor(props) {
      super(props)
      this.state = {
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
      }
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
      return (
         <div className="Keywords-container">

            <form onSubmit={this.handleSubmit}>
               <div className="Keywords-row">
                  <div className="Keywords-div">
                     <label>Beans
               <div className="Keywords-div-input">
                           <input type="checkbox" name="beans" onClick={this.handleClick} className="Keywords-input" />
                        </div>
                     </label>
                  </div>

                  <div className="Keywords-div">
                     <label>Cheese
               <div className="Keywords-div-input">
                           <input type="checkbox" name="cheese" onClick={this.handleClick} className="Keywords-input" />
                        </div>
                     </label>
                  </div>

                  <div className="Keywords-div">
                     <label>Entree
               <div className="Keywords-div-input">
                           <input type="checkbox" name="entree" onClick={this.handleClick} className="Keywords-input" />
                        </div>
                     </label>
                  </div>

                  <div className="Keywords-div">
                     <label>Instant Pot
               <div>
                           <input type="checkbox" name="instantPot" onClick={this.handleClick} className="Keywords-input" />
                        </div>
                     </label>
                  </div>

                  <div className="Keywords-div">
                     <label>Meat
               <div>
                           <input type="checkbox" name="meat" onClick={this.handleClick} className="Keywords-input" />
                        </div>
                     </label>
                  </div>

                  <div className="Keywords-div">
                     <label>Onion
               <div>
                           <input type="checkbox" name="onion" onClick={this.handleClick} className="Keywords-input" />
                        </div>
                     </label>
                  </div>

                  <div className="Keywords-div">
                     <label>Pasta
               <div>
                           <input type="checkbox" name="pasta" onClick={this.handleClick} className="Keywords-input" />
                        </div>
                     </label>
                  </div>
               </div>

               <div className="Keywords-row">
                  <div className="Keywords-div">
                     <label>Poultry
               <div>
                           <input type="checkbox" name="poultry" onClick={this.handleClick} className="Keywords-input" />
                        </div>
                     </label>
                  </div>

                  <div className="Keywords-div">
                     <label>Rice
               <div>
                           <input type="checkbox" name="rice" onClick={this.handleClick} className="Keywords-input" />
                        </div>
                     </label>
                  </div>

                  <div className="Keywords-div">
                     <label>Risotto
               <div>
                           <input type="checkbox" name="risotto" onClick={this.handleClick} className="Keywords-input" />
                        </div>
                     </label>
                  </div>

                  <div className="Keywords-div">
                     <label>Sauces/Gravies
               <div>
                           <input type="checkbox" name="saucesAndGravies" onClick={this.handleClick} className="Keywords-input" />
                        </div>
                     </label>
                  </div>

                  <div className="Keywords-div">
                     <label>Side Dish
               <div>
                           <input type="checkbox" name="sideDish" onClick={this.handleClick} className="Keywords-input" />
                        </div>
                     </label>
                  </div>

                  <div className="Keywords-div">
                     <label>Slow Cooker
               <div>
                           <input type="checkbox" name="slowCooker" onClick={this.handleClick} className="Keywords-input" />
                        </div>
                     </label>
                  </div>

                  <div className="Keywords-div">
                     <label>Squash
               <div>
                           <input type="checkbox" name="squash" onClick={this.handleClick} className="Keywords-input" />
                        </div>
                     </label>
                  </div>
               </div>
               <button className="Keywords-button">Submit Keywords</button>
            </form>

         </div>
      )
   }
}

export default Keywords