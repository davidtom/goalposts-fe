import React from "react";

class Filter extends React.Component{
  constructor(){
    super()
  }

  changeTextFilter = (event) => {
    this.props.updateTextFilter(event.target.value)
  }

  render(){
    return (
      <div>
        <label>Filter Goals:</label>
        <input type="text" value={this.props.filters.text} onChange={this.changeTextFilter}/>
      </div>
    )
  }
}

export default Filter;
