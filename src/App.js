import React, { Component } from 'react';
import HighlightPage from "./components/HighlightPage"
import Filter from "./components/Filter"
import HighlightGroup from "./components/HighlightGroup"
import Highlight from "./components/Highlight"


class App extends Component {

  constructor(){
    super()

    this.state = {
      currentPage: "highlights",
      goals: [],
      filters: {
        text: "",
      }
    }

  }

  updateTextFilter = (text) => {
    this.setState({
      filters: {
        text: text
      }
    })
  }

  getHighlights(){
    return fetch("http://localhost:3000/api/v1/highlights")
    .then(resp => resp.json())
    .then(goals => this.setState({goals: goals}))
  }

  componentWillMount(){
    this.getHighlights()
  }

  render() {
    if (this.state.currentPage === "highlights"){return (<HighlightPage />)}
  }

}

export default App;
