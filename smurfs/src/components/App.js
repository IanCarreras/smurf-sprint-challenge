import React from "react";

import SmurfForm from './Form'
import SmurfList from './SmurfList'

import "./App.css";

const App = props => {
  return (
    <div className="App">
      <h1>SMURFS! 2.0 W/ Redux</h1>
      <SmurfForm />
      <SmurfList />
    </div>
  );
}

export default App