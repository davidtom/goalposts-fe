import React from "react"
import {Button, Icon} from 'semantic-ui-react'

function redditURL(permalink){
  return `http://www.reddit.com${permalink}`
}

const HighlightDetails = ({highlight}) => (
    <div>
      <Button as="a" href={highlight.url} target="_blank" size="huge"> <Icon name="external" />Source Media</Button>
      <Button as="a" href={redditURL(highlight.permalink)} target="_blank" size='huge'> <Icon name="reddit" />Reddit Post</Button>
    </div>
  )

export default HighlightDetails
