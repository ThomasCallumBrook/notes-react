import React from 'react'
import NoteForm from './NoteForm'

class Note extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      notes: [],
    }
  }
  addNote = (note) => {
    //Add note to the notes array
    const previousNotes = this.state.notes;
    previousNotes.push(note);
    this.setState({
      notes:  previousNotes
    })
  }
  render(){
    return(
      <div>
        <div id = "note">
          This is a Note
        </div>
        <div id='new-note-form'>
          <NoteForm addNote = {this.addNote}/>
        </div>
      </div>
    )
  }
}
export default Note;
