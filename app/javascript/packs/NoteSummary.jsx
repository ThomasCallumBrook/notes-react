import React from 'react'

class NoteSummary extends React.Component{
  render(){
    return(
      <div className ="noteSummary">
        <h3> {this.props.title}</h3>
        <p>{this.props.content.slice(0,30)}...</p>
        <p>Tags: <em>{this.props.tags.slice(0,30)}</em></p>
        <button className="delete-btn">X</button>
      </div>
    )
  }
}
export default NoteSummary;
