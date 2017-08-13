import React, { Component } from 'react';
import {SiteHeader} from "./components/Headers";
import NavBar from "./components/NavBar";
import IndexPage from "./components/IndexPage";
import SearchPage from "./components/SearchPage";
import AboutPage from "./components/AboutPage";
import {BrowserRouter as Router, Route} from "react-router-dom"



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
          < SiteHeader />
          < NavBar />
          < Route exact path="/" render={(props)=> (<IndexPage {...props} data={highlights}/>)} />
          < Route exact path="/search" render={(props)=> (<SearchPage {...props} data={highlights}/>)} />
          < Route exact path="/about" render={(props)=> (<AboutPage {...props} data={highlights}/>)} />
        </div>
      </Router>
    )
  }

}

export default App;
