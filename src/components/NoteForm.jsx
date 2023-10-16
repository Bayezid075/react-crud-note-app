import React from "react";
import { useState } from "react";
export default function NoteForm({
  notes,
  setNotes,
  editMode,
  setEditMode,
  noteTitle,
  setNoteTitle,
  editableNote,
  setEditableNote,
}) {
  const updateHandler = (event) => {
    event.preventDefault();

    if (!noteTitle.trim()) {
      return alert("Please Enter Note Title");
    }
    const updatedNotesArray = notes.map((note) => {
      if (note.id === editableNote.id) {
        return {
          ...note,
          title: noteTitle,
        };
      }

      return note;
    });

    setNotes(updatedNotesArray);
    setEditMode(false);
    setEditableNote(null);
    setNoteTitle("");
  };

  const createHandler = (event) => {
    event.preventDefault();
    if (!noteTitle) {
      return alert("Please Add A Note");
    }
    const newNote = {
      id: Date.now() + "",
      title: noteTitle,
    };
    setNotes([...notes, newNote]);

    setNoteTitle("");
  };

  return (
    <div>
      {" "}
      <form onSubmit={editMode ? updateHandler : createHandler}>
        <input
          type="text"
          value={noteTitle}
          onChange={(event) => setNoteTitle(event.target.value)}
        />
        <button type="submit">{editMode ? "Update Note" : "Add Note"}</button>
      </form>
    </div>
  );
}
