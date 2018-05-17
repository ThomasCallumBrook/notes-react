import React from 'react'

class CurrentNote extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      title: '',
      content: '',
      tags: '',
    };
  }
  handleUpdateNote= (event) => {
    console.log(this.state)
    this.setState({
      [event.target.name]: event.target.value, //Form input value
    })
  }
  save = () =>{
    console.log(this.props.currentNote.id)
    console.log(this.state)
    let id = this.props.currentNote.id
    let data = this.state;
  }
  render(){
    return(
      <div id="note">
        <input id="note-title"
          name='title'
          className="current" value={this.props.currentNote.title}
          onChange={this.handleUpdateNote}/>
        <input id="note-tags" className="current"
          name='tags'
          value={`Tags: ${this.props.currentNote.tags}`}
          onChange={this.handleUpdateNote}/>
        <textarea id="note-content" className="current"
          name='content'
          value={this.props.currentNote.content}
          onChange={this.handleUpdateNote}/>
        <button className="save-btn"
          onClick = {this.save}>Save</button>
      </div>
    )
  }
}
export default CurrentNote;
