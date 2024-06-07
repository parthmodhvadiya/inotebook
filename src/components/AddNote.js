import {React,useContext, useState} from "react";
import { UserContext } from "../context/notes/NoteState";

const AddNote = (props) => {
    const {AddNote} = useContext(UserContext);

    const [note, setnote] = useState({title:"", description: "",tag:""});
    const handleOnClick =(e)=>
        {
            e.preventDefault();
            AddNote(note);
            setnote({title:"", description: "",tag:""})
            props.showAlert("Successfully Your Note has been added" , "success");
        }
    const onChange = (e)=>
        {
            setnote({...note,[e.target.name]: e.target.value});
        }
  return (
    <div className="container my-3">
      <h2>Add a Note</h2>
      <form>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Title
          </label>
          <input
            type="text"
            className="form-control"
            id="title"
            name="title"
            value={note.title}
            aria-describedby="emailHelp"
            onChange={onChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Description
          </label>
          <input
            type="text"
            id="desc"
            name="description"
            value={note.description}
            className="form-control"
            onChange={onChange}
            required
          />
        </div>
        
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            tag
          </label>
          <input
            type="text"
            id="tag"
            name="tag"
            value={note.tag}
            className="form-control"
            onChange={onChange}
          />
        </div>
        <button type="submit" disabled={note.title.length<5||note.description.length<5} className="btn btn-primary" onClick={handleOnClick}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddNote;
