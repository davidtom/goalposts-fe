import React from "react";
import {PageHeader} from "./PageAssets";
import {Container} from 'semantic-ui-react'


class AboutPage extends React.Component{

  render(){
    return(
      <Container textAlign="center">
        <PageHeader title="About GoalPosts"/>
      </Container>
    )
  }
}

export default AboutPage;
