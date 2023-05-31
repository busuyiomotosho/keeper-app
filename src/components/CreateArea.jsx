import React, { useState } from "react";
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';
import Zoom from '@mui/material/Zoom';

function CreateArea(props) {
  const [isExpanded, setIsExpanded] = useState(false);

  const [note, setNote] = useState({
    title: "",
    content: ""
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setNote(prev => {
      return {
        ...prev,
        [name]: value
      }
    })
  }

  const handleAddNote = (event) => {
    event.preventDefault(); // Prevent form submission

    props.addNote(note);

    // Clear the note input fields
    setNote({
      title: "",
      content: ""
    });
  };

  const expand = () => {
    setIsExpanded(true);
  }
  
  return (
    <div>
      <form className="create-note">
        {isExpanded && (<input onChange={handleChange} name="title" placeholder="Title" value={note.title} />)}
        <textarea onChange={handleChange} onClick={expand} name="content" placeholder="Take a note..." rows={isExpanded ? "3" : "1"} value={note.content} />
        <Zoom in={isExpanded}>
          <Fab onClick={handleAddNote}>
            <AddIcon />
          </Fab>
        </Zoom>
        
      </form>
    </div>
  );
}

export default CreateArea;
