import React from "react";
import DeleteSharpIcon from '@mui/icons-material/DeleteSharp';

function Note(props) {
  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button onClick={() => { props.deleteNote(props.id); }}><DeleteSharpIcon /></button>
    </div>
  );
}

export default Note;
