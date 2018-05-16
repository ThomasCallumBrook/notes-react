import React from 'react'
import NoteForm from './NoteForm'

class Note extends React.Component{
  constructor(props){
    super(props)
  }
  render(){
    return(
      <div>
        <div id = "note">
          This is a Note
        </div>
        <div id='new-note-form'>
          <NoteForm
            postNote = {this.props.postNote}/>
        </div>
      </div>
    )
  }
}
export default Note;
