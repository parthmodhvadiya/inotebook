import { React,createContext ,useState} from "react";

const UserContext = createContext(undefined);
const UserDispatchContext = createContext(undefined);
function UserProvider({ children }) {
  const [userDetails, setUserDetails] = useState({
    username: "John Doe",
    class: "9D"
  });
  const update = ()=>
    {
      setTimeout(() => {
        setUserDetails({
          username: "Parth Modhvadiya",
          class: "10D"
        })
      }, 2000);
    }
  return (
    <UserContext.Provider value={{userDetails , update}}>
        {children}
    </UserContext.Provider>
  );
}

export { UserProvider, UserContext, UserDispatchContext };  
