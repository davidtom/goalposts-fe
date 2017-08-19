import React, { Component } from 'react';
import NavBar from "./components/NavBar";
import IndexPage from "./components/IndexPage";
import SearchPage from "./components/SearchPage";
import AboutPage from "./components/AboutPage";
import LoginPage from "./components/LoginPage";
import {Route} from "react-router-dom"
import {SiteFooter} from "./components/PageAssets";
import {AuthAdapter as Auth} from "./components/AuthAdapter"

class App extends Component {

  constructor(){
    super()

    this.state = {
      auth: {
        isLoggedIn: false,
        token: {},
        error: null
      }
    }
  }

  logIn = (loginParams) => {
    Auth.login(loginParams)
      .then( token => {
        if (!token.error){
          this.setState({
            auth: {
              isLoggedIn: true,
              token:token}
            }, localStorage.setItem("jwt", token.jwt))
        } else {
          this.setState(
            {auth: {
              ...this.state.auth,
              error: token.error
            }}
          )
        }
      })
    }

  logOut = () => {
    localStorage.removeItem("jwt")
    this.setState({
      auth: {
        isLoggedIn: false,
        user: {}
      }
    })
  }

  render() {
    return (
        <div>
          < Route path="/" component={NavBar} />
          < Route exact path="/" component={IndexPage} />
          < Route exact path="/search" component={SearchPage} />
          < Route exact path="/about"  component={AboutPage}/>
        < Route exact path="/login"  render={(props) => (<LoginPage {...props} logIn={this.logIn} authData={this.state.auth}/>)} />
          < SiteFooter />
        </div>
    )
  }

}

export default App;
