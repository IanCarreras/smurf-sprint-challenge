import React, { useEffect } from "react";
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { actionCreators } from '../actions/actions'

import "./App.css";

const App = props => {
  const { smurfs, actions } = props

  useEffect(() => {
    actions.getSmurfs()
  }, [actions])

  return (
    <div className="App">
      <h1>SMURFS! 2.0 W/ Redux</h1>
      <div>Welcome to your state management version of Smurfs!</div>
      <div>Start inside of your `src/index.js` file!</div>
      <div>Have fun!</div>
    </div>
  );
}


const mapStateToProps = ({ smurfs }) => {
  return { smurfs }
}

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(actionCreators, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);