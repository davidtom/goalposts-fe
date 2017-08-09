import React from "react"
import HighlightGroup from "./components/HighlightGroup"
import Highlight from "./components/Highlight"
import Filter from "./components/Filter"

class HighlightPage extends React.Component{
  constructor(){
    super()
  }

  render(){
    return(
      <div className="">
        <h1>{this.props.pageTitle}</h1>
        <Filter filters={this.props.filters} textFilter={this.updateTextFilter}/>
      </div>
    )
  }
}

export default HighlightPage
