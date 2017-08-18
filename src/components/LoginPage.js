import React from "react";
import {PageHeader} from "./PageAssets";
import {LoginForm} from "./LoginForm";
import {Container} from 'semantic-ui-react'


class LoginPage extends React.Component{

  constructor(){
    super()

    this.state = {
      username: "",
      password: "" //TODO: these belong in App?? Or does it pass them up to app??
    }
  }

  changeUsername = (event) => {
    let text = event.target.value
    this.setState({
      username: text
    })
  }

  changePassword = (event) => {
    let text = event.target.value
    this.setState({
      password: text
    })
  }

  render(){
    return(
      <Container textAlign="center" className="Site">
        <PageHeader title="Admin Log In"/>
          <LoginForm
            username={this.state.username}
            passworde={this.state.password}
            changeUsername={this.changeUsername}
            changePassword={this.changePassword}
            loggedIn={this.props.authData.isLoggedIn}/>
      </Container>
    )
  }
}

export default LoginPage;
