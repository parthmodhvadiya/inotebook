import { React, useContext, useEffect,useState,useRef } from "react";
import NotesItem from "./NotesItem";
import { UserContext } from "../context/notes/NoteState";
import AddNote from "./AddNote";

const Notes = () => {
  const initailNotes = useContext(UserContext);
  const { notes, getNote, EditNote } = initailNotes;
  useEffect(() => {
    getNote();
  }, []);
  
  const [note, setnote] = useState({id:"",etitle:"", edescription: "",etag:"personal"});
  const ref = useRef(null);
  const refClose = useRef(null);
  const updateNote= (currentNote)=>
    {
        setnote({id:currentNote._id,etitle:currentNote.title,edescription:currentNote.description,tag:currentNote.tag});
        ref.current.click();
    }
    const handleOnClick =()=>
        {
            EditNote(note.id,note.etitle,note.edescription,note.etag);
            refClose.current.click();
        }
  const onChange = (e)=>
    {
        setnote({...note,[e.target.name]: e.target.value});
    }
  return (
    <>
      <AddNote />
      <button
      ref={ref}
        type="button"
        className="d-none btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        Edit Your Note
      </button>

      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                
        Edit Your Note
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
            <form>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Title
          </label>
          <input
            type="text"
            className="form-control"
            id="etitle"
            name="etitle"
            value={note.etitle||""}
            aria-describedby="emailHelp"
            onChange={onChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Description
          </label>
          <input
            type="text"
            id="edesc"
            value={note.edescription||""}
            name="edescription"
            className="form-control"
            onChange={onChange}
          />
        </div>
        
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            tag
          </label>
          <input
            type="text"
            id="etag"
            value={note.etag||""}
            name="etag"
            className="form-control"
            onChange={onChange}
          />
        </div>
      </form>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                ref={refClose}
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button type="button"  onClick={handleOnClick} className="btn btn-primary">
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="row  my-3">
        <h2>Your Notes</h2>
        <div className="container mx-2">
        {notes.length===0 && "No note are Found"}
        </div>
        {notes.map((note) => {
          return <NotesItem key={note._id} updateNote={updateNote} note={note} />;
        })}
      </div>
    </>
  );
};

export default Notes;
