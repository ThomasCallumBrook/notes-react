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
      <div id= 'page'>
        <NoteList
          notes={this.state.notes}
          deleteNote={this.deleteNote}
        />
        <Note
          postNote={this.postNote}
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
