import React from "react";
import {PageHeader} from "./PageAssets";
import {Container, Segment} from 'semantic-ui-react'


class AboutPage extends React.Component{

  openMessage = (event) => {
    event.preventDefault()
    window.location.href = "mailto:davidjtomczyk@gmail.com"
  }

  render(){
    return(
      <Container textAlign="center" className="Site">
        <PageHeader title="About GoalPosts"/>
          <Container text textAlign="left">
            <Segment padded>
            <p>GoalPosts uses the <a href="https://github.com/avinashbot/redd" target="_blank" rel="noopener noreferrer" >Redd API wrapper for Reddit </a> to aggregate goal highlights from <a href="https://www.reddit.com/r/soccer/" target="_blank" rel="noopener noreferrer">/r/soccer</a> and posts them here.</p>
            <p>The site is built using the following technologies:</p>
              <ul>
                <li><a href="https://www.postgresql.org/" target="_blank" rel="noopener noreferrer">PostgreSQL</a></li>
                <li><a href="http://rubyonrails.org/" target="_blank" rel="noopener noreferrer">Ruby on Rails</a></li>
                <li><a href="https://facebook.github.io/react/" target="_blank" rel="noopener noreferrer">React</a></li>
              </ul>
            <p>If you have any comments, suggestions, or feedback on the site please <a href="/" onClick={this.openMessage}>send me an email!</a></p>
            </Segment>
          </Container>
      </Container>
    )
  }
}

export default AboutPage;
