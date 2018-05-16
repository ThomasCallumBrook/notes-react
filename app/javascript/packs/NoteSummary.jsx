import React from 'react'

class NoteSummary extends React.Component{
  handleNoteClick = (event) => {
    console.log("clicked");
  }
  deleteNoteDB = (event) => {
    console.log(this.props.id);
    let token = document.querySelector('meta[name="csrf-token"]').getAttribute('content');
    fetch(`/notes/${this.props.id}.json`, {
      method: 'DELETE',
      credentials: 'include',
      headers: {
        'X-CSRF-Token': token,
      },
    })
    this.props.removeNote(this.props.id);
  }
  render(){
    return(
      <div className ="noteSummary">
        <div className="child" onClick = {this.handleNoteClick}>
          <h3> {this.props.title}</h3>
          <p>{this.props.content.slice(0,30)}...</p>
          <p>Tags: <em>{this.props.tags.slice(0,30)}</em></p>
        </div>
        <div>
          <button className="delete-btn" onClick={this.deleteNoteDB}>&times;</button>
        </div>
      </div>
    )
  }
}
export default NoteSummary;
