import React from "react";

class Highlight extends React.Component {
  constructor(){
    super()

    this.state = {
      displayVideo: false,
    }
  }

  embedVideo(){
    return {__html: this.props.highlight.media_embed}
  }

  toggleDisplayVideo = () => {
    this.setState({
      displayVideo: !this.state.displayVideo
    })
  }

  render(){
    return (
      <div class="ui card">
        <div class="content">
          <div class="header">Project Timeline</div>
        </div>
        <div class="content">
          <h4 class="ui sub header">Activity</h4>
          <div class="ui small feed">
            <div class="event">
              <div class="content">
                <div class="summary">
                  <a>Elliot Fu</a> added <a>Jenny Hess</a> to the project
                </div>
              </div>
            </div>
            <div class="event">
              <div class="content">
                <div class="summary">
                  <a>Stevie Feliciano</a> was added as an <a>Administrator</a>
                </div>
              </div>
            </div>
            <div class="event">
              <div class="content">
                <div class="summary">
                  <a>Helen Troy</a> added two pictures
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="extra content">
          <button class="ui button">Join Project</button>
        </div>
      </div>
    )
  }
}

export default Highlight;


// <div onClick={this.toggleDisplayVideo}>
//   <h3>{this.props.highlight.title}</h3>
//   {this.state.displayVideo && <div dangerouslySetInnerHTML={this.embedVideo()}/>}
//   <div>
//     <p><b>Source media:</b> {this.props.highlight.url}</p>
//     <p><b>Reddit post:</b> {this.props.highlight.permalink}</p>
//     <p><b>Created (UTC):</b> {this.props.highlight.posted_utc_date} @ {this.props.highlight.posted_utc_time}</p>
//   </div>
// </div>
