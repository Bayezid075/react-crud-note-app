import { useState } from "react";
import "./App.css";
import NoteForm from "./components/NoteForm";
import Notes from "./components/Notes";

function App() {
  const [notes, setNotes] = useState([]);
  const [editMode, setEditMode] = useState(false);
  const [noteTitle, setNoteTitle] = useState("");
  const [editableNote, setEditableNote] = useState(null);

  return (
    <>
      <NoteForm
        notes={notes}
        setNotes={setNotes}
        setEditMode={setEditMode}
        editMode={editMode}
        noteTitle={noteTitle}
        setNoteTitle={setNoteTitle}
        editableNote={editableNote}
        setEditableNote={setEditableNote}
      />
      <Notes
        notes={notes}
        setNotes={setNotes}
        setEditMode={setEditMode}
        editMode={editMode}
        noteTitle={noteTitle}
        setNoteTitle={setNoteTitle}
        editableNote={editableNote}
        setEditableNote={setEditableNote}
      />
    </>
  );
}

export default App;
