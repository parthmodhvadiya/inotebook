import { React,createContext,useState} from "react";

const UserContext = createContext(undefined);
function UserProvider({ children }) {
  const initailNotes = [
    {
      "_id": "665973bc9b66c73c9d38e618",
      "user": "6657643d78adb37fb3128537",
      "title": "Hello guyz",
      "description": "This is my discription",
      "date": "2024-05-31T06:52:44.303Z",
      "__v": 0
    },
    {
      "_id": "665973bc9b66c73c9d38e61b",
      "user": "6657643d78adb37fb3128537",
      "title": "Hello guyz",
      "description": "This is my discription",
      "date": "2024-05-31T06:52:44.549Z",
      "__v": 0
    }
  ];
  const [notes, setnotes] = useState(initailNotes);

  return (
    <UserContext.Provider value={{notes,setnotes}}>
        {children}
    </UserContext.Provider>
  );
}

export { UserProvider, UserContext };  
