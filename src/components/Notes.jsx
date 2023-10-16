import React from "react";

export default function Notes({
  setNotes,
  notes,
  setEditMode,
  setNoteTitle,
  setEditableNote,
}) {
  const removeHandler = (noteId) => {
    const newNotes = notes.filter((note) => note.id !== noteId);

    setNotes(newNotes);
  };

  const editHandler = (note) => {
    setEditMode(true);
    setNoteTitle(note.title);
    setEditableNote(note);
  };
  return (
    <div className="App">
      <ol className="note-list">
        {notes.map((note) => (
          <li key={note.id}>
            <span>{note.title}</span>
            <button onClick={() => editHandler(note)}>Edit</button>
            <button onClick={() => removeHandler(note.id)}>Remove</button>
          </li>
        ))}
      </ol>
    </div>
  );
}
