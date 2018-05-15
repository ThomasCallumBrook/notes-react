import React from 'react'

class NoteForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      title: '',
      content: '',
      tags: '',
    };
  }
  // When form content changes, set newNoteContent to match with state changing.
  handleNoteInput= (event) => {
    this.setState({
      [event.target.name]: event.target.value, //Form input value
    })
  }
  postNote = () => {
    this.props.addNote(this.state)
    let token = document.querySelector('meta[name="csrf-token"]').getAttribute('content');
    fetch('/notes.json', {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
        'X-CSRF-Token': token,
      },
      body: JSON.stringify(this.state)
    })
    this.setState({
      title: '',
      content: '',
      tags: '',
    })
  }
  render(){
    return(
      <div className="form-wrapper">
        <input className="note-title"
          name="title"
          placeholder="Note Title..."
          value = {this.state.title}
          onChange = {this.handleNoteInput}/>
        <input className="note-input"
          name="content"
          placeholder="Write your note here..."
          value = {this.state.content}
          onChange = {this.handleNoteInput}/>
        <input className="note-tags"
          name="tags"
          placeholder="Add some tags..."
          value = {this.state.tags}
          onChange = {this.handleNoteInput}/>
        <button className="note-btn"
          onClick = {this.postNote}>Add Note</button>

      </div>
     )
  }
}
export default NoteForm;
