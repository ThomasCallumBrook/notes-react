import React from 'react'

class NoteSummary extends React.Component{
  handleNoteClick = () => {
    this.props.currentNote(this.props.id);
  }
  handleDeleteNote = () => {
    console.log(this.props.id);
    this.props.deleteNote(this.props.id);
  }
  render(){
    return(
      <div className ="noteSummary">
        <div className="child" onClick = {this.handleNoteClick}>
          <h3> {this.props.title.slice(0,20)}</h3>
          <p>{this.props.content.slice(0,30)}...</p>
          <p>Tags: <em>{this.props.tags.slice(0,30)}</em></p>
        </div>
        <div>
          <button className="delete-btn" onClick={this.handleDeleteNote}>&times;</button>
        </div>
      </div>
    )
  }
}
export default NoteSummary;
