import React from "react";
import {PageHeader} from "./Headers";
import HighlightCollection from "./HighlightCollection";
import Highlight from "./Highlight";
import { Container, Header } from 'semantic-ui-react'


class IndexPage extends React.Component{

  render(){
    return(
      <Container textAlign="center">
        <PageHeader title="Highlights"/>
        <HighlightCollection highlights = {this.props.data.highlights} />
      </Container>
    )
  }
}

export default IndexPage;
