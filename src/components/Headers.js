import React from "react"
import { Header, Image } from 'semantic-ui-react'

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

export {SiteHeader}
export {PageHeader}
