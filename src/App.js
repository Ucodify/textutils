import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";

function App() {
  return (
    <>
      <div className="container my-3">
        <Navbar title="TextUtils" aboutText="About TextUtils" />
        <TextForm heading="Enter the text to analyse" />
      </div>

      {/* <Navbar /> */}
    </>
  );
}

export default App;
