// Run this example by adding <%= javascript_pack_tag 'hello_react' %> to the head of your layout file,
// like app/views/layouts/application.html.erb. All it does is render <div>Hello React</div> at the bottom
// of the page.

import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import NoteList from './NoteList'
import Note from './Note'


class App extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      notes: [],
      currentNote: {
        title: "Click Note",
        tags: " ",
      },
    }
  }
  componentDidMount() {
    fetch('/notes.json')
      .then(response => response.json())
      .then(json => this.setState({ notes:json }));
  }
  postNote = (data) => {
    this.addNote(data)
    let token = document.querySelector('meta[name="csrf-token"]').getAttribute('content');
    fetch('/notes.json', {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
        'X-CSRF-Token': token,
      },
      body: JSON.stringify(data)
    })
  }
  addNote = (note) => {
    //Add note to the notes array
    const previousNotes = this.state.notes;
    previousNotes.push(note);
    this.setState({
      notes:  previousNotes
    })
  }
  deleteNote = (id) => {
    let token = document.querySelector('meta[name="csrf-token"]').getAttribute('content');
    fetch(`/notes/${id}.json`, {
      method: 'DELETE',
      credentials: 'include',
      headers: {
        'X-CSRF-Token': token,
      },
    })
    this.removeNote(id);
  }
  updateNote = (data, id) => {
    let token = document.querySelector('meta[name="csrf-token"]').getAttribute('content');
    fetch(`/notes/${id}.json`, {
      method: 'PUT',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
        'X-CSRF-Token': token,
      },
      body: JSON.stringify(data)
    })
  }
  saveNote = () => {

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
  currentNote = (id) => {
    const previousNotes = this.state.notes;
    for(var i=0; i < previousNotes.length; i++){
      if(id === previousNotes[i].id){
        console.log(previousNotes[i])
        this.setState({
          currentNote: previousNotes[i]
        })
      }
    }
    console.log(this.state.currentNote)
  }
  render(){
    return(
      <div id= 'page'>
        <NoteList
          notes={this.state.notes}
          deleteNote={this.deleteNote}
          currentNote={this.currentNote}
        />
        <Note
          currentNote={this.state.currentNote}
          postNote={this.postNote}
          updateNote={this.updateNote}
        />
      </div>
    )
  }
}

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <App />,
    document.querySelector('#app'),
  )
})
