import React, { Component } from 'react';
import SiteHeader from "./components/SiteHeader";
import NavBar from "./components/NavBar";
import HighlightSearchPage from "./components/HighlightSearchPage";
import HighlightDisplayPage from "./components/HighlightDisplayPage";
import {BrowserRouter as Router, Route, NavLink} from "react-router-dom"



class App extends Component {

  constructor(){
    super()

    this.state = {
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

  render() {

    const highlights = {highlights: this.state.highlights}

    return (
      <Router>
        <div>
          < NavBar />
          < Route exact path="/" render={(props)=> (<HighlightDisplayPage {...props} data={highlights}/>)} />
          < Route exact path="/search" render={(props)=> (<HighlightSearchPage {...props} data={highlights}/>)} />
        </div>
      </Router>
    )
  }

}

export default App;
