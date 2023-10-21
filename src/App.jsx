import { useState } from "react";
import "./App.css";
import NoteForm from "./components/NoteForm";
import Notes from "./components/Notes";

function App() {
  const red = () => {
    console.log("hello");
  };
  return (
    <>
      <NoteForm />
      <Notes />
    </>
  );
}

export default App;
