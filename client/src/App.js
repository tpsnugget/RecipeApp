import React, { useState, useEffect } from 'react';
import './App.css';

function App() {

  const [apiResponse, setApiResponse] = useState("")

  useEffect( () => callAPI() )

  function callAPI(){
    fetch("http://localhost:9000/recipes")
      .then(res => res.text())
      .then(res => setApiResponse(res))
  }

  return (
    <div className="App">
      <h1>{apiResponse}</h1>
    </div>
  );
}

export default App;
