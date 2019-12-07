import React, { Component } from 'react';
import axios from "axios"

class Show extends Component {

   constructor(props) {
      super(props)
      this.state = {
         id: ""
         }
         console.log(props.match.params.id)
      }

   async callAPI() {
      try {
         this.setState({
            apiResponse: await axios.get("http://localhost:9000/recipes/:id")
         })
      } catch (error) {
         console.error(error)
      }
   }

   componentWillMount() {
      this.callAPI()
   }

   render() {

      return (
         <div>
            <h1>Show Single Recipe Component is up Man!</h1>
         </div >
      )
   }
}

export default Show