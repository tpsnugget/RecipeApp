import React from 'react';
import { Route, Switch } from "react-router-dom"
import Recipes from "./Recipes"
import Show from "./Show"
import Users from "./Users"
import Landing from "./Landing"
import Error from "./Error"
import './App.css';

function App() {

  return (
    <div className="App">
      <Switch>
        <Route exact path="/recipes/:id" component={Show}>
        </Route>
        <Route exact path="/recipes">
          <Recipes />
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

export default App;
