import React from "react";
import Highlight from "./Highlight";
import {Segment, Header} from 'semantic-ui-react'


class HighlightGroup extends React.Component{
  constructor(){
    super()
  }

highlightCards(){
  return this.props.highlights.values.map((highlight, index) => < Highlight highlight={highlight} key={index}/>)
}

  render(){
    return(
      <Segment>
        <Header size="large" block>{this.props.highlights.key}</Header>
        {this.highlightCards()}
      </Segment>
    )
  }
}

export default HighlightGroup;
