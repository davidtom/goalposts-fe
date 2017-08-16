import React, { Component } from 'react';
import NavBar from "./components/NavBar";
import IndexPage from "./components/IndexPage";
import SearchPage from "./components/SearchPage";
import AboutPage from "./components/AboutPage";
import {Route} from "react-router-dom"
import {SiteFooter} from "./components/PageAssets";

class App extends Component {

  render() {

    return (
        <div>
          < Route path="/" component={NavBar} />
          < Route exact path="/" component={IndexPage} />
          < Route exact path="/search" component={SearchPage} />
          < Route exact path="/about"  component={AboutPage}/>
          < SiteFooter />
        </div>
    )
  }

}

export default App;
