import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import notes from "../notes"


const App = () => {
    return (<div>
        <Header />
        {notes.map(entry => (
            <Note 
                key= {entry.id}
                title = {entry.title}
                content = {entry.content}
            />
        ))}
        
        <Footer />
    </div>);
}

export default App;