import React from "react"
import { Header, Image, Loader, Segment } from 'semantic-ui-react'

const SiteHeader = () => (
  <div className="ui container fluid left aligned">
  <Header as='h1'>
    <Image shape='rounded' verticalAlign="middle" src='./soccer-silhouette-image.png' />
    {' '}GoalPosts
  </Header>
  </div>
)

const PageHeader = ({title}) => (
  <Header size="huge">{title}</Header>
)

const SectionHeader = ({title}) => (
  <Header size="large" block>{title}</Header>
)

const textLoader = () => (
  <Loader active size='large' inline='centered'>Loading</Loader>
)

const contentEndAlert = () => (
   <Segment color='red' textAlign='center'>No Additional Content to Load</Segment>
)

export {SiteHeader}
export {PageHeader}
export {SectionHeader}
export {textLoader}
export {contentEndAlert}
