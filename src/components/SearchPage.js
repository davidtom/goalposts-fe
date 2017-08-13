import React from "react";
import Filter from "./Filter";
import Highlight from "./Highlight";
import { Container, Header } from 'semantic-ui-react'


class SearchPage extends React.Component{
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

  // TODO: Figure out best place/structure of props and state
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
      <Container textAlign="center">
        <Header as="h1">Search Highlights</Header>
        <Filter filters={this.state.filters} updateTextFilter={this.updateTextFilter}/>
        {this.filteredHighlights()}
      </Container>
    )
  }
}

export default SearchPage;
