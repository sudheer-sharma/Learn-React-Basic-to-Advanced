import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  let [counter, setCounter] = useState(0);

  // let counter = 15;

  let addvalue = () => {
    // counter++;
    // console.log("Calligraphy", counter);
    // if (counter <= 20) {
    //   setCounter(counter+1);
    // }

    setCounter((prevCounter) => prevCounter + 1);
    setCounter((prevCounter) => prevCounter + 1);
    setCounter((prevCounter) => prevCounter + 1);
    setCounter((prevCounter) => prevCounter + 1);
    setCounter((prevCounter) => prevCounter + 1);
  };

  let removevalue = () => {
    // if (counter > 0) {
    //   setCounter(counter - 1);
    // }

    setCounter(counter - 1);
  };

  return (
    <>
      <h1>Natural Calligraphy</h1>
      <h2>Counter : {counter}</h2>

      <button onClick={addvalue}>Add Value {counter} </button>
      <br />
      <br />
      <button onClick={removevalue}>Remoce Value {counter}</button>
      <p>Not Page {counter}</p>
    </>
  );
}

export default App;
