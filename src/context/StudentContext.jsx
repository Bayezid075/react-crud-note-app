import { createContext, useState } from "react";
import { useReducer } from "react";
import { studentReducer } from "../reducer/student";
export const StudentData = createContext();
const initState = {
  studentName: "",
  students: [],
  editMode: false,
  editableStudent: null,
};
const StudentContext = ({ children }) => {
  const [studentStates, dispatch] = useReducer(studentReducer, initState);
  const [notes, setNotes] = useState([]);
  const [editMode, setEditMode] = useState(false);
  const [noteTitle, setNoteTitle] = useState("");
  const [editableNote, setEditableNote] = useState(null);
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
  const removeHandler = (noteId) => {
    const newNotes = notes.filter((note) => note.id !== noteId);

    setNotes(newNotes);
  };

  const editHandler = (note) => {
    setEditMode(true);
    setNoteTitle(note.title);
    setEditableNote(note);
  };
  const contexData = {
    studentStates,
    dispatch,
  };

  return (
    <StudentData.Provider value={contexData}>{children}</StudentData.Provider>
  );
};

export default StudentContext;
