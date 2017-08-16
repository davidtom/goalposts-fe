import React from "react";
import Filter from "./Filter";
import HighlightCollection from "./HighlightCollection";
import {APIURL, PageHeader} from "./PageAssets";
import { Container, Message } from 'semantic-ui-react';
import {sortTitleAscending, sortTitleDescending} from './sortFunctions';

const sortOptions = [null, "asc", "desc"]

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
        ...this.state.filters,
        text: text
      }
    })
  }

  submitSearch = () => {

    let url = `${APIURL()}/search?title=${this.state.filters.text}`

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

  cycleTitleSort = () => {
    let index = sortOptions.indexOf(this.state.filters.sortTitle)
    return sortOptions[(index+1)%3]
  }

  updateTitleSort = () => {
    this.setState({
      filters: {
        ...this.state.filters,
        sortTitle: this.cycleTitleSort(),
      }
    })
  }

  searchResultMessage = () => (
    <Message info>
      <Message.Header>Search for "{this.state.searchTerm}" completed.</Message.Header>
      <p><b>{this.state.highlights.length}</b> results found.</p>
    </Message>
  )

  searchResults = () => {
    if (this.state.filters.sortTitle === "asc"){
      return sortTitleAscending(this.state.highlights)
    } else if (this.state.filters.sortTitle === "desc") {
      return sortTitleDescending(this.state.highlights)
    } else {
      console.log(this.state.highlights)
      return this.state.highlights
    }
  }

  render(){
    return(
      <Container textAlign="center" className="Site">
        <PageHeader title="Search Highlights"/>
        <Filter filters={this.state.filters}
                updateTextFilter={this.updateTextFilter}
                submitSearch={this.submitSearch}
                toggleTitleSort={this.updateTitleSort}
                />
        {!!this.state.searchComplete && this.searchResultMessage()}
        <HighlightCollection highlights = {this.searchResults()}/>
      </Container>
    )
  }
}

export default SearchPage;
