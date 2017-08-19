import React from "react";
import {PageHeader} from "./PageAssets";
import {LoginForm} from "./LoginForm";
import {Container} from 'semantic-ui-react'


class AdminPage extends React.Component{

  constructor(){
    super()

    this.state = {
      username: "",
      password: ""
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

  handleLogIn = () => {
    let loginParams={
      username: this.state.username,
      password: this.state.password
    }
    this.setState({username: "", password: ""})
    this.props.logIn(loginParams)
  }

  render(){
    return(
      <Container textAlign="center" className="Site">
        <PageHeader title="Admin Page"/>
          <LoginForm
            username={this.state.username}
            password={this.state.password}
            changeUsername={this.changeUsername}
            changePassword={this.changePassword}
            handleLogIn={this.handleLogIn}
            handleLogOut={this.props.logOut}
            authData={this.props.authData}/>
      </Container>
    )
  }
}

export default AdminPage;
