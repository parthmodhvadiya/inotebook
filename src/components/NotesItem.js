import React, { useContext,useEffect } from "react";
import { UserContext } from "../context/notes/NoteState";

const NotesItem = (props) => {
  const { note,updateNote } = props;
  const {DeleteNote} = useContext(UserContext);
  
  return (
    <div className="col-md-3 my-3">
      <div className="card d-flex text-center">
        <div className="card-body">
          <h5 className="card-title">{note.title}</h5>
          <p className="card-text">
            {note.description}
          </p>
          <div className="d-flex justify-content-around mt-5 mb-2">
          <i  className="fa-sharp fa-solid fa-trash fa-xl" onClick={()=>
            {
                DeleteNote(note._id)
            }
          } role="button"></i>
          <i className="fa-solid fa-pen-to-square fa-xl" 
            role="button" onClick={()=>
                {
                    updateNote(note);
                }
            }></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotesItem;
