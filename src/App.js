import React, { Component } from 'react';
import NavBar from "./components/NavBar";
import IndexPage from "./components/IndexPage";
import SearchPage from "./components/SearchPage";
import AboutPage from "./components/AboutPage";
import LoginPage from "./components/LoginPage";
import {Route} from "react-router-dom"
import {SiteFooter} from "./components/PageAssets";
import {AuthAdapter} from "./components/AuthAdapter"

class App extends Component {

  constructor(){
    super()

    this.state = {
      auth: {
        isLoggedIn: false,
        user: null
      }
    }
  }

  render() {

    return (
        <div>
          < Route path="/" component={NavBar} />
          < Route exact path="/" component={IndexPage} />
          < Route exact path="/search" component={SearchPage} />
          < Route exact path="/about"  component={AboutPage}/>
        < Route exact path="/login"  render={(props) => (<LoginPage {...props} authData={this.state.auth}/>)} />
          < SiteFooter />
        </div>
    )
  }

}

export default App;
