import React, { Component } from 'react';
import NavBar from "./components/NavBar";
import IndexPage from "./components/IndexPage";
import SearchPage from "./components/SearchPage";
import AboutPage from "./components/AboutPage";
import AdminPage from "./components/AdminPage";
import {Route} from "react-router-dom"
import {SiteFooter} from "./components/PageAssets";
import {AuthAdapter as Auth} from "./components/AuthAdapter"

class App extends Component {

  constructor(){
    super()

    this.state = {
      auth: {
        isLoggedIn: false,
        user: {},
        error: null
      }
    }
  }

  logIn = (loginParams) => {
    Auth.login(loginParams)
      .then( data => {
        if (!data.error){
          this.setState({
            auth: {
              isLoggedIn: true,
              user: data.user,
              error: null}
            }, localStorage.setItem("jwt", data.jwt))
        } else {
          this.setState(
            {auth: {
              ...this.state.auth,
              error: data.error
            }}
          )
        }
      })
    }

  logOut = () => {
    localStorage.removeItem("jwt")
    this.setState({
      auth: {
        ...this.state.auth,
        isLoggedIn: false,
        user: {}
      }
    })
  }

  componentWillMount(){
    // Anytime app is mounted (aka page is joined/refreshed), check to see if
    // someone is logged in and set state accordingly
    if (localStorage.getItem('jwt')){
      Auth.currentUser()
      .then(user => {
        if(!user.error){
          this.setState({
            auth: {
              ...this.state.auth,
              isLoggedIn: true,
              user: user
            }
          })
        }
      })
    }
  }

  render() {
    return (
        <div>
          < Route path="/" component={NavBar} />
          < Route exact path="/" component={IndexPage} />
          < Route exact path="/search" component={SearchPage} />
          < Route exact path="/about"  component={AboutPage}/>
          < Route exact path="/admin"  render={(props) =>
            (<AdminPage {...props}
              logIn={this.logIn}
              logOut={this.logOut}
              authData={this.state.auth}/>)} />
          < SiteFooter />
        </div>
    )
  }

}

export default App;
