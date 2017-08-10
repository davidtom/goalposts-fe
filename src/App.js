import React, { Component } from 'react';
import Nav from "./components/Nav";
import HighlightSearchPage from "./components/HighlightSearchPage";
// import Filter from "./components/Filter";
// import HighlightGroup from "./components/HighlightGroup";
// import Highlight from "./components/Highlight";


class App extends Component {

  constructor(){
    super()

    this.state = {
      currentPage: "highlightSearch",
      highlights: [],
    }

  }

  getHighlights(){
    return fetch("http://localhost:3000/api/v1/highlights")
    .then(resp => resp.json())
    .then(highlights => this.setState({highlights}))
  }

  componentDidMount(){
    this.getHighlights()
  }

  selectPage(){
    if (this.state.currentPage === "highlightSearch"){
      return (<HighlightSearchPage highlights={this.state.highlights}
              />)
    } else {
      return "something went wrong"
    }
  }

  render() {
    return (
      <div>
        < Nav />
        {this.selectPage()}
      </div>
    )
  }

}

export default App;
