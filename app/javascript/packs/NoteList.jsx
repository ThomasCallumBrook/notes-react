import React from 'react'
import NoteSummary from './NoteSummary'


class NoteList extends React.Component{
  constructor(props){
    super(props)
  }
  render(){
    return(
        <div id="note-list"   >
          {this.props.notes.map((note) => {
              return (
                <NoteSummary {...note} key={note.id}
                  deleteNote={this.props.deleteNote}
                  currentNote={this.props.currentNote}
                />
              )
            })
          }
        </div>
    )
  }
}
export default NoteList;
