import React from "react";
import HighlightGroup from "./HighlightGroup";



class HighlightCollection extends React.Component{
  constructor(){
    super()
  }

  groupByArray(xs, key) {
    // from stackoverflow: https://stackoverflow.com/questions/14446511/what-is-the-most-efficient-method-to-groupby-on-a-javascript-array-of-objects
    return xs.reduce(function (rv, x) {
      let v = key instanceof Function ? key(x) : x[key];
      let el = rv.find((r) => r && r.key === v);
      if (el) {
        el.values.push(x);
      } else {
        rv.push({ key: v, values: [x] });
      }
      return rv;
    }, []);
  }

  groupHighlightsByDate(){
    return this.groupByArray(this.props.highlights, "posted_utc_date")
  }

  highlightGroups(){
    return this.groupHighlightsByDate().map((dateGroup, index) => < HighlightGroup highlights={dateGroup} key={index}/>)
  }

  render(){
    return(
      <div>
        {this.highlightGroups()}
      </div>
    )
  }
}

export default HighlightCollection;
