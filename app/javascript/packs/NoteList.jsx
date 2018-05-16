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
  removeNote = (id) => {
    const previousNotes = this.state.notes;
    for(var i=0; i < previousNotes.length; i++){
      if(id === previousNotes[i].id){
        previousNotes.splice(i, 1);
      }
    }
    this.setState({
      notes:  previousNotes
    })
  }

  render(){
    return(
        <div id="note-list">
          {this.state.notes.map((note) => {
              return (
                <NoteSummary title={note.title} content={note.content} tags={note.tags} key={note.id} id={note.id} removeNote={this.removeNote}/>
              )
            })
          }
        </div>
    )
  }

}
export default NoteList;
