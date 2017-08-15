import React from "react";
import Filter from "./Filter";
import HighlightCollection from "./HighlightCollection";
import {PageHeader} from "./PageAssets";
import { Container, Message } from 'semantic-ui-react';
import {sortTitleAscending, sortTitleDescending} from './sortFunctions';


class SearchPage extends React.Component{
  constructor(){
    super()

    this.state = {
      highlights: [],
      searchTerm: null,
      searchComplete: false,
      filters: {
        text: "",
        sortTitle: null
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

  submitSearch = () => {

    let url = `http://localhost:3000/api/v1/highlights/search?title=${this.state.filters.text}`

    fetch(url)
    .then(resp => resp.json())
    .then(highlights =>
      this.setState(
        {highlights,
        searchTerm: this.state.filters.text,
        searchComplete: true}
      )
    )
  }

  searchResultMessage = () => (
    <Message info>
      <Message.Header>Search for "{this.state.searchTerm}" completed.</Message.Header>
      <p><b>{this.state.highlights.length}</b> results found.</p>
    </Message>
  )

  // TODO: set up button and logic to filter results by name (probably means highlights shouldnt be shown in collection/group)
  render(){
    // console.log(sortTitleDescending(this.state.highlights))
    return(
      <Container textAlign="center">
        <PageHeader title="Search Highlights"/>
        <Filter filters={this.state.filters} updateTextFilter={this.updateTextFilter} submitSearch={this.submitSearch}/>
        {!!this.state.searchComplete && this.searchResultMessage()}
        <HighlightCollection highlights = {this.state.highlights} />
      </Container>
    )
  }
}

export default SearchPage;
