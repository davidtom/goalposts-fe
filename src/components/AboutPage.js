import React from "react";
import {PageHeader} from "./PageAssets";
import {Container} from 'semantic-ui-react'


class AboutPage extends React.Component{
  constructor(){
    super()
  }

  render(){
    return(
      <Container textAlign="center">
        <PageHeader title="About"/>
      </Container>
    )
  }
}

export default AboutPage;
