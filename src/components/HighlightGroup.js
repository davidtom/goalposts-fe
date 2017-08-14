import React from "react";
import Highlight from "./Highlight";
import {SectionHeader} from "./PageAssets";
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
      <Segment padded>
        <SectionHeader title={this.props.highlights.key} />
        {this.highlightCards()}
      </Segment>
    )
  }
}

export default HighlightGroup;
