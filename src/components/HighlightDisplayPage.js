import React from "react";
import Filter from "./Filter";
import HighlightGroup from "./HighlightGroup";
import Highlight from "./Highlight";


class HighlightDisplayPage extends React.Component{
  constructor(){
    super()

    this.state = {
      filters: {
        text: "",
      }
    }
  }

  updateTextFilter = (text) => {
    this.setState({
      filters: {
        text: text
      }
    })
  }

  // TODO: I still think highlights should be a part of state!
  // TODO: add prop types!
  // TODO: highlight group should be called highlight collection (more of a norm - per Es)
  // TODO: display page and search page are not DRY! fix this - the component
  //        above them should probably have state, these just display the props in one way or another
  filterByTitle(highlights){
    return highlights.filter(highlight => highlight.title.toLowerCase().indexOf(this.state.filters.text) !== -1)
  }

  filteredHighlights(){
    const filtered_highlights = this.filterByTitle(this.props.data.highlights)
    return filtered_highlights.map((highlight, index) => <Highlight highlight={highlight} key={index}/>)
  }

  render(){
    return(
      <div className="">
        <h1>Highlights</h1>
        {this.filteredHighlights()}
      </div>
    )
  }
}

export default HighlightDisplayPage;
