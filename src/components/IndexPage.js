import React from "react";
import HighlightCollection from "./HighlightCollection";
import {APIURL, PageHeader, TextLoader, ContentEndAlert} from "./PageAssets";
import {Container} from 'semantic-ui-react'
import InfiniteScroll from "react-infinite-scroller"

class IndexPage extends React.Component{

  constructor(){
    super()

    this.state = {
      highlights: [],
      hasMoreItems: true,
      nextPage: 1
    }

  }

  loadHighlights = (page) => {
    let url = `${APIURL}/highlights?page=`

    if (this.state.nextPage){
      url += this.state.nextPage
    }

    fetch(url)
    .then(resp => resp.json())
    .then(highlight_page => {
      if (highlight_page.length){
        this.setState({
          highlights: [...this.state.highlights, ...highlight_page],
          nextPage: this.state.nextPage + 1
        })
      } else {
        this.setState({
          hasMoreItems: false
        })
      }
    })
  }

  removeHighlightFromState = (highlight) => {
    let filteredHighlights = this.state.highlights.filter(h => h.id !== highlight.id)
    this.setState({
      highlights: filteredHighlights
    })
  }

  render(){

    return(
      <Container textAlign="center" className="Site">
        <PageHeader title="View Highlights"/>
        <InfiniteScroll
          pageStart={0}
          loadMore={this.loadHighlights}
          hasMore={this.state.hasMoreItems}
          loader={ TextLoader() }>
            <HighlightCollection
              highlights = {this.state.highlights}
              authData = {this.props.authData}
              removeHighlightFromState = {this.removeHighlightFromState} />
        </InfiniteScroll>
        {!this.state.hasMoreItems && ContentEndAlert()}
      </Container>
    )
  }
}

export default IndexPage;
