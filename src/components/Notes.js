import { React, useContext } from "react";
import { UserContext } from "../context/notes/NoteState";
import NotesItem from "./NotesItem";

const Notes = () => {
    const initailNotes = useContext(UserContext);
    const { notes, setnotes } = initailNotes;
  return (
    <div className="row  my-3">
        <h2>Your Note</h2>
        {notes.map((note) => {
          return <NotesItem note={note}/>
        })}
      </div>
  )
}

export default Notes