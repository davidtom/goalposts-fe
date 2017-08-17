import React from "react";
import {Segment, Form, Button, Divider} from 'semantic-ui-react'
// // Dependencies for react-datepicker
// import DatePicker from 'react-datepicker';
// import moment from 'moment';
// import 'react-datepicker/dist/react-datepicker.css';

class Filter extends React.Component{

  changeSearchInput = (event) => {
    this.props.updateTextFilter(event.target.value)
  }

  titleSortIcon = () => {
    if (this.props.filters.sortTitle){
      return `sort alphabet ${this.props.filters.sortTitle}ending`
    } else {
      return null
    }
  }

  dateSortIcon = () => {
    if (this.props.filters.sortDate){
      return `sort numeric ${this.props.filters.sortDate}ending`
    } else {
      return null
    }
  }

  render(){
    return (
      <Segment raised secondary textAlign="center">
        <Form size="large" onSubmit={this.props.submitSearch}>
          <Form.Group>
            <Form.Input placeholder='Search title...' value={this.props.filters.text} onChange={this.changeSearchInput}/>
            <Button type='submit'>Search</Button>
          </Form.Group>
        </Form>
          <Divider horizontal>sort results by</Divider>
          <Button content='Title' icon={`${this.titleSortIcon()}`} labelPosition='left' onClick={this.props.toggleTitleSort} />
          <Button content='Date' icon={`${this.dateSortIcon()}`} labelPosition='left' onClick={this.props.toggleDateSort} />
      </Segment>
    )
  }
}

export default Filter;
