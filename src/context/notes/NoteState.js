import { React,createContext,useState} from "react";

const UserContext = createContext(undefined);
function UserProvider({ children }) {
  const url = "http://localhost:8000";
  const initailNotes= [];
  const [notes,setnotes] = useState(initailNotes);
  const [user,setuser] = useState({name: "",email:""});
  const getNote = async ()=>
    {
      //Api fatch
      const response = await fetch(`${url}/api/notes/fetchallnotes`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "auth-token" : localStorage.getItem('token')
        }
      });
      const json = await response.json();
      setnotes(json);
    }
  //Add a new note
  const AddNote =async (sendNote)=>
    {
      const {title,description,tag} = sendNote;
       //Api fatch
       const response = await fetch(`${url}/api/notes/createnote`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "auth-token" : localStorage.getItem('token')
        },
         body: JSON.stringify({title,description,tag}) 
      });
        const note = await response.json();
        setnotes(notes.concat(note));
    }
  //Delete a existing note
  const DeleteNote = async (id)=>
    {
      const response = await fetch(`${url}/api/notes/deletenote/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          "auth-token" : localStorage.getItem('token')
        } 
      });
      const newNote = notes.filter((note)=>
      {
        return note._id!==id;
      })
      setnotes(newNote);
    }
  //Edit an existing note
  const EditNote = async (id,title,description,tag)=>
    {
      //Api fatch
      const response = await fetch(`${url}/api/notes/updatenote/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          "auth-token" : localStorage.getItem('token')
        },
         body: JSON.stringify({title,description,tag}), 
      });

      const json = await response.json();
      
      const newNotes = JSON.parse(JSON.stringify(notes));
      //Update logic
      for (let index = 0; index < newNotes.length; index++) {
        if(newNotes[index]._id===id)
          {
            newNotes[index].title  =title;
            newNotes[index].description = description;
            newNotes[index].tag = tag;
            break;
          }
      }
      setnotes(newNotes);
    }
    const getUser = async ()=>
      {
        const response = await fetch(`${url}/api/auth/getuser`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "auth-token" : localStorage.getItem('token')
          }
        });
        const json = await response.json();
        setuser({name:json.name,email:json.email});
      }
  return (
    <UserContext.Provider value={{user,notes,AddNote,DeleteNote,EditNote,getNote,getUser}}>
        {children}
    </UserContext.Provider>
  );
}

export { UserProvider, UserContext };  
