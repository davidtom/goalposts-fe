import React from "react";
import Highlight from "./Highlight";
import {SectionHeader} from "./PageAssets";
import {Segment} from 'semantic-ui-react'


class HighlightGroup extends React.Component{
  constructor(){
    super()

    this.state = {
      display: true
    }
  }

toggleDisplay = () => {
  this.setState({display: !this.state.display})
}

highlightCards(){
  return this.props.highlights.values.map((highlight, index) =>
    < Highlight
        highlight={highlight}
        key={index}
        authData={this.props.authData}
        removeHighlightFromState={this.props.removeHighlightFromState}
        />)
}

  render(){
    return(
      <Segment padded>
        <SectionHeader title={this.props.highlights.key} onClick={this.toggleDisplay} />
        {this.state.display && this.highlightCards()}
      </Segment>
    )
  }
}

export default HighlightGroup;
