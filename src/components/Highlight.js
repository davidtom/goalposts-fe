import React from "react";
import { Container, Segment, Header, Button, List } from 'semantic-ui-react'

class Highlight extends React.Component {
  constructor(){
    super()

    this.state = {
      displayDetails: false,
    }
  }

  embedVideo(){
    return {__html: this.props.highlight.media_embed}
  }

  toggleDisplayDetails = () => {
    this.setState({
      displayDetails: !this.state.displayDetails
    })
  }

  render(){
    return (
      <Container textAlign="center">
        <Segment>
          <Header size="large">{this.props.highlight.title}</Header>
          <Button size="medium" onClick={this.toggleDisplayDetails}>Details</Button>
          {this.state.displayDetails && <div>
            <div dangerouslySetInnerHTML={this.embedVideo()}/>
            <Button size="huge"> Source Media </Button>
            <Button size='huge'> Reddit Post </Button>
          </div>}
        </Segment>
        <br/>
      </Container>
    )
  }
}

export default Highlight;


// <div onClick={this.toggleDisplayVideo}>
//   <h3></h3>
//   {this.state.displayVideo && <div dangerouslySetInnerHTML={this.embedVideo()}/>}
//   <div>
//     <p><b>Source media:</b> {this.props.highlight.url}</p>
//     <p><b>Reddit post:</b> {this.props.highlight.permalink}</p>
//     <p><b>Created (UTC):</b> {this.props.highlight.posted_utc_date} @ {this.props.highlight.posted_utc_time}</p>
//   </div>
// </div>
