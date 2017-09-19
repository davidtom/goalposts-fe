import React from "react";
import HighlightDetails from "./HighlightDetails";
import {APIURL} from "./PageAssets";
import {Divider, Image, Header, Button, Icon} from 'semantic-ui-react'
import {AuthAdapter as Auth} from "./AuthAdapter"
import noEmbed from "./images/NoMediaEmbed.png"
import ReactPlayer from 'react-player'

class Highlight extends React.Component {
  constructor(){
    super()

    this.state = {
      displayDetails: false,
      videoEmbedError: false,
      deleted: false
    }
  }

  embedVideo(){
    let video = this.findEmbedVideo()
    if (!this.state.videoEmbedError){
      return video
    } else {
      return <Image shape='rounded' centered={true} src={noEmbed}/>
    }
  }

  findEmbedVideo(){
    if (this.props.highlight.media_embed) {
      return <div dangerouslySetInnerHTML={{__html: this.props.highlight.media_embed}}></div>
    } else {
      return <ReactPlayer url={this.props.highlight.url} controls={true} onError={this.rescueVideoEmbed}/>
    }
  }

  rescueVideoEmbed = () => {
    console.log("error!")
    this.setState({videoEmbedError: true})
  }

  toggleDisplayDetails = () => {
    this.setState({
      displayDetails: !this.state.displayDetails
    })
  }

  detailButtonText(){
    let action = this.state.displayDetails ? "Hide" : "Show"
    return `${action} Details`
  }

  detailButtonIcon(){
    return this.state.displayDetails ? "compress" : "expand"
  }

  destroyHighlight = () => {
    const prompt = "Delete highlight?"
    if (window.confirm(prompt)){
      let url = `${APIURL}/highlights/${this.props.highlight.id}`
      fetch(url, {
        method: "DELETE",
        headers: Auth.headers()
      })
      .then(resp => resp.json())
      .then(json => this.handleDestroyResponse(json))
    }
  }

  handleDestroyResponse(json){
    if (json.success){
      this.setState({deleted: true})
      // TODO: figure out how I want to handle this delete - MAKE IT AS DRY AS POSSIBLE!
      // I should probably practice removing something from state/store...
    } else {
      console.log(json)
    }
  }

  render(){
    return (
      <div className="highlight-container">
        <Header size="large">{this.props.highlight.title}</Header>
        {!this.state.deleted ? this.embedVideo() : null}
        <Divider hidden/>
        <Button size="medium" onClick={this.toggleDisplayDetails}> <Icon name={this.detailButtonIcon()} /> {this.detailButtonText()} </Button>
        <Divider hidden/>
        {this.state.displayDetails && <HighlightDetails highlight={this.props.highlight} authData={this.props.authData} destroyHighlight={this.destroyHighlight}/>}
        <Divider />
      </div>
    )
  }
}

export default Highlight;
