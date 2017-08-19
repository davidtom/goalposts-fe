import React from "react";
import {Segment, Input, Button, Message} from 'semantic-ui-react'


class LoginForm extends React.Component{

  render(){
    return(
          <Segment>
              <Input type="text" label='Username' value={this.props.username} onChange={this.props.changeUsername}/><br/>
              <Input type="password" label='Password' value={this.props.password} onChange={this.props.changePassword}/><br/>
              {!this.props.authData.isLoggedIn ? <Button type='submit' onClick={this.props.handleLogIn}> Log In </Button> : <Message success>Log In Successful</Message>}
              {this.props.authData.error && <Message negative>{this.props.authData.error}</Message>}
          </Segment>
    )
  }
}

export {LoginForm};
