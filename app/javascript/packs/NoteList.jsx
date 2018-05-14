import React from 'react'

class NoteList extends React.Component{
  render(){
    return(
      <div id="note-list">
        This is the Note list
        <div>
          <a class="add-note" href="/notes/new"> New Note</a>
        </div>
      </div>
    )
  }
}
export default NoteList;
