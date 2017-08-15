import React from "react"
import { Header, Image, Loader, Segment } from 'semantic-ui-react'

const apiURL = () => (
  "http://localhost:3000/api/v1/highlights"
)

const SiteLogo = () => (
  <Image shape='rounded' height="70" verticalAlign="middle" spaced src='./soccer-silhouette-image.png' />
)

const SiteHeader = () => (
  <Header size="huge">GoalPosts</Header>
)

const PageHeader = (props) => (
  <Header id="page-header">{props.title}</Header>
)

const SectionHeader = (props) => (
  <Header id="section-header" size="huge" block onClick={props.onClick}>{props.title}</Header>
)

const textLoader = () => (
  <Loader active size='large' inline='centered'>Loading</Loader>
)

const contentEndAlert = () => (
   <Segment color='red' textAlign='center'>No Additional Content to Load</Segment>
)

export {apiURL}
export {SiteLogo}
export {SiteHeader}
export {PageHeader}
export {SectionHeader}
export {textLoader}
export {contentEndAlert}
