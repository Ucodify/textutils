import React from "react";
import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
// import About from "./components/About";

function App() {
  const [mode, setMode] = useState("dark");

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "grey";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
    }
  };
  return (
    <>
      <div className='container my-3'>
        <Navbar
          title='TextUtils'
          aboutText='About TextUtils'
          mode={mode}
          toggleMode={toggleMode}
        />
        <TextForm heading='Enter the text to analyse' />
        {/* <About /> */}
      </div>
    </>
  );
}
//blockscope var global scope, let and const can't be accessed outside the block.
//pure and impure functions
export default App;
