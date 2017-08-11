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

  filterByTitle(highlights){
    return highlights.filter(highlight => highlight.title.toLowerCase().indexOf(this.state.filters.text) !== -1)
  }

  filteredHighlights(){
    const filtered_highlights = this.filterByTitle(this.props.highlights)
    return filtered_highlights.map((highlight, index) => <Highlight highlight={highlight} index={index}/>)
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
