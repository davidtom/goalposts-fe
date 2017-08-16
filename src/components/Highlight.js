import React from "react";
import HighlightDetails from "./HighlightDetails";
import { Divider, Image, Header, Button, Icon} from 'semantic-ui-react'
import noEmbed from "./images/NoMediaEmbed.png"
import ReactPlayer from 'react-player'

class Highlight extends React.Component {
  constructor(){
    super()

    this.state = {
      displayDetails: false,
      videoEmbedError: false
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

  render(){
    return (
      <div className="highlight-container">
        <Header size="large">{this.props.highlight.title}</Header>
        {this.embedVideo()}
        <Divider hidden/>
        <Button size="medium" onClick={this.toggleDisplayDetails}> <Icon name={this.detailButtonIcon()} /> {this.detailButtonText()} </Button>
        <Divider hidden/>
        {this.state.displayDetails && <HighlightDetails highlight={this.props.highlight}/>}
        <Divider />
      </div>
    )
  }
}

export default Highlight;
