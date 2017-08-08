import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import HighlightOverview from "./components/HighlightOverview"

class App extends Component {

  getHighlights(){
    return fetch("http://localhost:3000/api/v1/highlights")
    .then(resp => resp.json())
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          <HighlightOverview />
        </p>
      </div>
    );
  }
}

export default App;
