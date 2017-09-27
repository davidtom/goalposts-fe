import React from "react";
import Filter from "./Filter";
import HighlightCollection from "./HighlightCollection";
import {APIURL, PageHeader} from "./PageAssets";
import { Container, Message } from 'semantic-ui-react';

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
        sortTitle: null,
        sortDate: null
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

  searchOptions = () => {
    if (this.state.filters.sortTitle){
      return `&sort=title=${this.state.filters.sortTitle}`
    } else if (this.state.filters.sortDate){
      return `&sort=posted_utc=${this.state.filters.sortDate}`
    } else {
      return ""
    }
  }

  submitSearch = () => {
    if (this.state.filters.text.match(/\S/)){ // Only run fetch if a search term is given
      let url = `${APIURL}/search?resource=highlight&title=${this.state.filters.text}` + this.searchOptions()
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
  }

  removeHighlightFromState = (highlight) => {
    let filteredHighlights = this.state.highlights.filter(h => h.id !== highlight.id)
    this.setState({
      highlights: filteredHighlights
    })
  }

  cycleSort = (param) => {
    let index = sortOptions.indexOf(this.state.filters[param])
    return sortOptions[(index+1)%3]
  }

  updateTitleSort = () => {
    this.setState({
      filters: {
        ...this.state.filters,
        sortTitle: this.cycleSort("sortTitle"),
        sortDate: null
      }
    }, this.submitSearch)
  }

  updateDateSort = () => {
    this.setState({
      filters: {
        ...this.state.filters,
        sortDate: this.cycleSort("sortDate"),
        sortTitle: null
      }
    }, this.submitSearch)
  }

  searchResultMessage = () => (
    <Message info>
      <Message.Header>Search for "{this.state.searchTerm}" completed.</Message.Header>
      <p><b>{this.state.highlights.length}</b> results found.</p>
    </Message>
  )

  render(){
    return(
      <Container textAlign="center" className="Site">
        <PageHeader title="Search Highlights"/>
        <Filter filters={this.state.filters}
                updateTextFilter={this.updateTextFilter}
                submitSearch={this.submitSearch}
                toggleTitleSort={this.updateTitleSort}
                toggleDateSort={this.updateDateSort}
                />
        {!!this.state.searchComplete && this.searchResultMessage()}
        <HighlightCollection
          highlights = {this.state.highlights}
          authData = {this.props.authData}
          removeHighlightFromState = {this.removeHighlightFromState}/>
      </Container>
    )
  }
}

export default SearchPage;
