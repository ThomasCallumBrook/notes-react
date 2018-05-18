import React from 'react'

class Note extends React.Component{
  constructor(props){
    super(props)
  }

  static getDerivedStateFromProps(nextProps){
    console.log(nextProps)
    return {...nextProps};
  }

  handleUpdateNote = (event) => {
    this.setState({
      [event.target.name]: event.target.value, //Form input value
    })
  }
  save = () =>{
    console.log('save')
    let id = this.state.id
    let data = this.state;
    if(this.props.currentNote.id){
      this.props.updateNote(data,id);
    }else{
      this.props.postNote(data);
    }
  }
  new = () =>{
    this.setState({
      id: undefined,
      title: "Enter Title",
      tags: "Add tags",
      content: "Add content here",
    })
  }
  render(){
    return(
      <div id="note">
        <input id="note-title"
          name='title'
          className="current" value={this.state.title}
          onChange={this.handleUpdateNote}/>
        <input id="note-tags" className="current"
          name='tags'
          value={this.state.tags}
          onChange={this.handleUpdateNote}/>
        <textarea id="note-content" className="current"
          name='content'
          value={this.state.content}
          onChange={this.handleUpdateNote}/>
        <button className="btn"
          onClick = {this.save}>Save</button>
        <button className="new btn"
          onClick = {this.new}>New</button>
      </div>
    )
  }
}
export default Note;
