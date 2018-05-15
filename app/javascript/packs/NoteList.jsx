import React from 'react'
import NoteSummary from './NoteSummary'
import NoteForm from './NoteForm'


class NoteList extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      notes: [],
    }
  }
  componentDidMount() {
    fetch('/notes.json')
      .then(response => response.json())
      .then(json => this.setState({ notes:json }));

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
    var summaries = this.state.notes.map((note, i) => {
      return <NoteSummary title={note.title} content={note.content} tags={note.tags} key={i}/>
    })
    return(
        <div id="note-list">
          <div>
            <NoteForm addNote = {this.addNote}/>
          </div>
          {
            this.state.notes.map((note, i) => {
              return (
                <NoteSummary title={note.title} content={note.content} tags={note.tags} key={i}/>
              )
            })
          }
        </div>
    )
  }
  onNoteClicked(){
    
  }

}
export default NoteList;
