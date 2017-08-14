import React from "react";
import Filter from "./Filter";
import HighlightCollection from "./HighlightCollection";

import {PageHeader, textLoader} from "./PageAssets";
import { Container, Message } from 'semantic-ui-react'


class SearchPage extends React.Component{
  constructor(){
    super()

    this.state = {
      highlights: [],
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

  submitSearch = () => {
    let url = `http://localhost:3000/api/v1/highlights/search?title=${this.state.filters.text}`

    fetch(url)
    .then(resp => resp.json())
    .then(highlights => this.setState({highlights}))
  }

  searchResultMessage = () => (
    <Message info>
      <Message.Header>Search Complete</Message.Header>
      <p><b>{this.state.highlights.length}</b> results found.</p>
    </Message>
  )

  render(){
    return(
      <Container textAlign="center">
        <PageHeader title="Search Highlights"/>
        <Filter filters={this.state.filters} updateTextFilter={this.updateTextFilter} submitSearch={this.submitSearch}/>
        {!!this.state.highlights.length && this.searchResultMessage()}
        <HighlightCollection highlights = {this.state.highlights} />
      </Container>
    )
  }
}

export default SearchPage;
