import "./App.css";
import { React } from "react";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import { UserProvider } from "./context/notes/NoteState";
import Alert from "./components/Alert";

function App() {
  return (
    <>
      <UserProvider>
        <Navbar />
        <Alert message={"THis app is made by parth Modhvadiya"}/>
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </div>
      </UserProvider>
    </>
  );
}

export default App;
