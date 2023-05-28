import React, { useState } from "react";

function CreateArea(props) {
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
  
  return (
    <div>
      <form>
        <input onChange={handleChange} name="title" placeholder="Title" value={note.title} />
        <textarea onChange={handleChange} name="content" placeholder="Take a note..." rows="3" value={note.content} />
        <button
          onClick={handleAddNote}
        >Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
