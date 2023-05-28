import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [newNote, setNewNote] = useState([]);

  const addNewNote = (note) => {
    setNewNote(prev => {
      return [...prev, note];
    });
  }

  const deleteNote = (id) => {
    setNewNote(prev => {
      return prev.filter((newNote, index) => {
        return index !== id;
      });
    });
  };

  return (
    <div>
      <Header />
      <CreateArea addNote={addNewNote} />
      <div>
        {newNote.map((singleNote, index) => {
          return <Note
            key={index}
            id={index}
            title={singleNote.title}
            content={singleNote.content}
            deleteNote={deleteNote}
          />
        })}
      </div>
      
      <Footer />
    </div>
  );
}

export default App;
