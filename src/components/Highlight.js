import React from "react";
import HighlightDetails from "./HighlightDetails";
import { Divider, Image, Header, Button, Icon} from 'semantic-ui-react'

class Highlight extends React.Component {
  constructor(){
    super()

    this.state = {
      displayDetails: false,
    }
  }

  embedVideo(){
    if (this.props.highlight.media_embed)
      return <div dangerouslySetInnerHTML={{__html: this.props.highlight.media_embed}}></div>
    else {
      return <Image shape='rounded' centered={true} src={require('./images/noMediaEmbed.png')}/>
    }
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
      <div>
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
