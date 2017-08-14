import React from "react";
import {Segment, Form, Button, Divider} from 'semantic-ui-react'
// Dependencies for react-datepicker
import DatePicker from 'react-datepicker';
import moment from 'moment';
import 'react-datepicker/dist/react-datepicker.css';

class Filter extends React.Component{

  changeSearchInput = (event) => {
    this.props.updateTextFilter(event.target.value)
  }

  render(){
    return (
      <Segment raised>
        <Form onSubmit={this.props.submitSearch}>
          <Form.Group>
            <Form.Input placeholder='Search...' value={this.props.filters.text} onChange={this.changeSearchInput} width={4}/>
            <Button type='submit'>Search</Button>
          </Form.Group>
        </Form>
      </Segment>
    )
  }
}

export default Filter;
// TODO: Add in date range
// <Divider horizontal>Optional Criteria</Divider>
// <DatePicker />
// <DatePicker />
