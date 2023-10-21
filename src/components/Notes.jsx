import React, { useContext } from "react";
import { StudentData } from "../context/StudentContext";

export default function Notes() {
  const studCtx = useContext(StudentData);
  return (
    <div className="App">
      <ol className="note-list">
        {studCtx.notes.map((note) => (
          <li key={note.id}>
            <span>{note.title}</span>
            <button onClick={() => studCtx.editHandler(note)}>Edit</button>
            <button onClick={() => studCtx.removeHandler(note.id)}>
              Remove
            </button>
          </li>
        ))}
      </ol>
    </div>
  );
}
