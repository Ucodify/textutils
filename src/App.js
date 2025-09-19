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
// //build optimization
// class based components/ function based components
// this is used in class based components.
// on clicking a text an alert should appear(AN EVENT)
// substr
// indexof
// slice
// at
// charat
// concat
// padded
// callback for event that has already happened.
// setTimeout
// javascript is asynchronous if something is delayed due to settimeout ya anything else jo agle function ya events hain wo occur hojaaty ha
// promise either reject resolve
// function based components =>reactjs
// jsx is html actually veiled behind js.
// class=className
// for in label =>htmlFor
// camelCase
// tabIndex
// react pe server pe load kam hota hai
// kyunke single page application ki waja se js ne take over krliya aur apis ki through dynamically changes ki page pe
// node modules wala folder ham ne gitignore pe rkha hai kyunke node wala folder user khud se automatically download krle ga jb wo GitHub se download kre ga!
// Framework: Bootstrap
// for => htmlFor
// tab => tabIndex
// custom component
// //blockscope var global scope, let and const can't be accessed outside the block.
// //pure and impure functions
// In use State ,text var, initial value, setText is function to update the text
// extensions
// auto rename tag
// bracket pair color
// eslint
// es7
// live server
// thunder client
// material icon
// prettier
