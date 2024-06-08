import "./App.css";
import { React ,  useState} from "react";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import { UserProvider } from "./context/notes/NoteState";
import Alert from "./components/Alert";
import Signup from "./components/Signup";
import Login from "./components/Login";

function App() {
  const [alert, setalert] = useState(null);
  const showAlert = (message, type)=>
      {
          setalert({
              msg: message,
              type: type
          })
          setTimeout(()=>
          {
              setalert(null);
          },1500);
      }
  return (
    <>
      <UserProvider>
        <Navbar showAlert={showAlert}/>
        <Alert alert={alert}/>
        <div className="container">
          <Routes>
            <Route path="/" element={<Home  showAlert={showAlert}/>} />
            <Route path="/about" element={<About />} />
            <Route path="/login"  element={<Login  showAlert={showAlert}/>} />
            <Route path="/signup" element={<Signup  showAlert={showAlert}/>} />
          </Routes>
        </div>
      </UserProvider>
    </>
  );
}

export default App;
