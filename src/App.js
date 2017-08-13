import React, { Component } from 'react';
import {SiteHeader} from "./components/Headers";
import NavBar from "./components/NavBar";
import IndexPage from "./components/IndexPage";
import SearchPage from "./components/SearchPage";
import AboutPage from "./components/AboutPage";
import {BrowserRouter as Router, Route} from "react-router-dom"



class App extends Component {

  render() {

    return (
      <Router>
        <div>
          < SiteHeader />
          < NavBar />
          < Route exact path="/" component={IndexPage} />
          < Route exact path="/search" component={SearchPage} />
          < Route exact path="/about"  component={AboutPage}/>
        </div>
      </Router>
    )
  }

}

export default App;
