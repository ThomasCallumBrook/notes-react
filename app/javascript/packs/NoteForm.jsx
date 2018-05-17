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

  handlePostNote= () => {
    let data = this.state;
    this.props.postNote(data);
    this.setState({
      title: '',
      content: '',
      tags: '',
    })
  }
  render(){
    return(
      <div className="form-wrapper">
        <input className="note-form-title"
          name="title"
          placeholder="Note Title..."
          value = {this.state.title}
          onChange = {this.handleNoteInput}/>
        <input className="note-form-tags"
          name="tags"
          placeholder="Add some tags..."
          value = {this.state.tags}
          onChange = {this.handleNoteInput}/>
        <button className="note-btn"
          onClick = {this.handlePostNote}>Add Note</button>
        <textarea className="note-form-input"
          name="content"
          placeholder="Write your note here..."
          value = {this.state.content}
          onChange = {this.handleNoteInput}/>
      </div>
     )
  }
}
export default NoteForm;
