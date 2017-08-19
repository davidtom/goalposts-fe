import React from "react";
import {Segment, Input, Button, Message} from 'semantic-ui-react'


class LoginForm extends React.Component{

  loggedOutComponents(){
    return (
      <div>
        <Input type="text" label='Username' value={this.props.username} onChange={this.props.changeUsername}/><br/>
        <Input type="password" label='Password' value={this.props.password} onChange={this.props.changePassword}/><br/>
        <Button type='submit' onClick={this.props.handleLogIn}> Log In </Button>
        {this.props.authData.error && <Message negative>{this.props.authData.error}</Message>}
      </div>
    )

  }

  loggedInComponents(){
    return (
      <div>
        <Message success>Logged in as : {this.props.authData.user.username}</Message>
        <Button type='submit' onClick={this.props.handleLogOut}> Log Out </Button>
      </div>
    )
  }

  render(){
    return(
          <Segment>
            {this.props.authData.isLoggedIn ? this.loggedInComponents(): this.loggedOutComponents()}
          </Segment>
    )
  }
}

export {LoginForm};
