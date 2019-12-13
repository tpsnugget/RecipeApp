import React, { Component } from 'react';
import { Route, Switch } from "react-router-dom"
import Recipes from "./Recipes"
import Show from "./Show"
import Users from "./Users"
import Landing from "./Landing"
import Error from "./Error"
import Signup from "./Signup"
import Login from "./Login"
import AddRecipe from "./AddRecipe"
import AddIngredients from "./AddIngredients"
import './App.css';

class App extends Component {

  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/recipes/:id" component={Show}>
          </Route>
          <Route exact path="/AddRecipe">
            <AddRecipe />
          </Route>
          <Route exact path="/addIngredients">
            <AddIngredients />
          </Route>
          <Route exact path="/recipes">
            <Recipes />
          </Route>
          <Route exact path="/signup">
            <Signup />
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/users">
            <Users />
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
