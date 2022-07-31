import React, { useState, useEffect } from "react";
import "./App.scss";
import { Header } from "./components/header";
import { Notes } from "./components/notes";
import { CreateArea } from "./components/createArea";
function App() {
  const [notes, setNotes] = useState(() => {
    const saved = localStorage.getItem("notes");
    const initialValue = JSON.parse(saved);
    return (
      initialValue || [
        {
          text: "This will be the note title",
          content: "This will be the note content",
        },
      ]
    );
  });

  const addNotes = (newNote) => {
    setNotes((prevNotes) => {
      return [...prevNotes, newNote];
    });
  };

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  const addCard = (notesItem, index) => {
    return (
      <Notes
        key={index}
        id={index}
        text={notesItem.text}
        content={notesItem.content}
        removeNotes={removeNotes}
      />
    );
  };

  const removeNotes = (id) => {
    setNotes((prevNotes) => {
      return prevNotes.filter((item, index) => {
        return index !== id;
      });
    });
  };

  return (
    <div className="App">
      <Header />
      <div className="kepper__container">
        <div className="kepper-content">
          <CreateArea addNote={addNotes} />
          <div className="kepper-content__notes notes-kepper">
            <div className="notes-kepper__cards">{notes.map(addCard)}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
