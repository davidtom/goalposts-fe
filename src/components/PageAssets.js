import React from "react"
import { Header, Image, Loader, Segment, Container, Divider } from 'semantic-ui-react'

const APIURL = () => (
  "http://localhost:3000/api/v1/highlights"
  // "https://goalposts-api.herokuapp.com/api/v1/highlights"
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

const TextLoader = () => (
  <Loader active size='large' inline='centered'>Loading</Loader>
)

const ContentEndAlert = () => (
   <Segment color='red' textAlign='center'>No Additional Content to Load</Segment>
)
const SiteFooter = () => (
   <footer className="footer">David Tomczyk | Flatiron School Web-060517</footer>
)

export {APIURL}
export {SiteLogo}
export {SiteHeader}
export {PageHeader}
export {SectionHeader}
export {TextLoader}
export {ContentEndAlert}
export {SiteFooter}
