import "./App.css";
import { React } from "react";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import { UserProvider } from "./context/notes/NoteState";

function App() {
  return (
    <>
      <UserProvider>
        <Navbar />
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
