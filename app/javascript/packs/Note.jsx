import React from 'react'
import NoteForm from './NoteForm'
import CurrentNote from './CurrentNote'

class Note extends React.Component{
  constructor(props){
    super(props)
  }
  render(){
    return(
      <div>
        <CurrentNote
          currentNote={this.props.currentNote}
          updateNote={this.props.updateNote}
        />
        <div id='new-note-form'>
          <NoteForm postNote = {this.props.postNote}/>
        </div>
      </div>
    )
  }
}
export default Note;
