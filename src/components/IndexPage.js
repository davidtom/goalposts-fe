import React from "react";
import {PageHeader} from "./Headers";
import HighlightCollection from "./HighlightCollection";
import Highlight from "./Highlight";
import { Container, Header } from 'semantic-ui-react'
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
    let url = "http://localhost:3000/api/v1/highlights?page="

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

  // TODO: Set up a loader!

  render(){

    const loader = <div className="loader">Loading ...</div>;

    return(
      <Container textAlign="center">
        <PageHeader title="Highlights"/>
        <InfiniteScroll
          pageStart={0}
          loadMore={this.loadHighlights}
          hasMore={this.state.hasMoreItems}
          loader={loader}>

            <HighlightCollection highlights = {this.state.highlights} />

        </InfiniteScroll>
      </Container>
    )
  }
}

export default IndexPage;
