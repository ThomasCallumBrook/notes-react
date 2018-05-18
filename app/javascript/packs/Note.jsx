import React from 'react'
import NoteForm from './NoteForm'
import CurrentNote from './CurrentNote'

class Note extends React.Component{
  constructor(props){
    super(props)
  }
  static getDerivedStateFromProps(props){
    return props;
  }
  render(){
    return(
      <div>
        <CurrentNote
          {...this.state.currentNote}
          currentNote={this.state.currentNote}
          updateNote={this.props.updateNote}
          postNote = {this.props.postNote}
        />
        <div id='new-note-form'>
          <NoteForm postNote = {this.props.postNote}/>
        </div>
      </div>
    )
  }
}
export default Note;
