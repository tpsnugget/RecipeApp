import React, { Component } from 'react';
import { Route, Switch } from "react-router-dom"
import Recipes from "./Recipes"
import Landing from "./Landing"
import Error from "./Error"
import Signup from "./Signup"
import Login from "./Login"
import AddRecipe from "./AddRecipe"
import UpdateRecipe from "./UpdateRecipe"
import AddIngredients from "./AddIngredients"
import './css/App.css';

class App extends Component {

  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/AddRecipe">
            <AddRecipe />
          </Route>
          <Route exact path="/UpdateRecipe" component={UpdateRecipe}>

          </Route>
          <Route exact path="/addIngredients">
            <AddIngredients />
          </Route>
          <Route exact path="/recipes" component={Recipes}>
          </Route>
          <Route exact path="/signup">
            <Signup />
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/">
            <Landing />
          </Route>
          <Route path="">
            <Error />
          </Route>
        </Switch>
      </div>
    );
  }
}

export default App;
