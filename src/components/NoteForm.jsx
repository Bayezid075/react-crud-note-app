import { useContext } from "react";

import { StudentData } from "../context/StudentContext";

export default function NoteForm() {
  const studCtx = useContext(StudentData);

  return (
    <div>
      {" "}
      <form
        onSubmit={
          studCtx.editMode ? studCtx.updateHandler : studCtx.createHandler
        }
      >
        <input
          type="text"
          value={studCtx.noteTitle}
          onChange={(event) => studCtx.setNoteTitle(event.target.value)}
        />
        <button type="submit">
          {studCtx.editMode ? "Update Note" : "Add Note"}
        </button>
      </form>
    </div>
  );
}
