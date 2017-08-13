import React from "react";
import {PageHeader} from "./Headers";
import HighlightCollection from "./HighlightCollection";
import Highlight from "./Highlight";
import { Container, Header } from 'semantic-ui-react'


class IndexPage extends React.Component{

  constructor(){
    super()

    this.state = {
      highlights: [],
    }

  }

  getHighlights(){
    return fetch("http://localhost:3000/api/v1/highlights")
    .then(resp => resp.json())
    .then(highlights => this.setState({highlights}))
  }

  componentDidMount(){
    this.getHighlights()
  }

  render(){
    return(
      <Container textAlign="center">
        <PageHeader title="Highlights"/>
        <HighlightCollection highlights = {this.state.highlights} />
      </Container>
    )
  }
}

export default IndexPage;
