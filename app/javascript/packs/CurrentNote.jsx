import React from 'react'

class CurrentNote extends React.Component{
  constructor(props){
    super(props)
  }
  render(){
    return(
      <div id="note">
        <input id="note-title" className="current" value={this.props.currentNote.title}/>
        <input id="note-tags" className="current" value={`Tags: ${this.props.currentNote.tags}`}/>
        <textarea id="note-content" className="current" value={this.props.currentNote.content}/>
      </div>
    )
  }
}
export default CurrentNote;
