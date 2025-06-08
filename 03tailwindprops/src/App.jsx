import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Card from "./components/Card";

function App() {
  const [count, setCount] = useState(0);

  let myObj = {
    name: "Calligraphy",
    age: 20,
  };

  let myArr = [1, 2, 3, 4];

  return (
    <>
      <h1 className="bg-green-400 text-black p-4 rounded-xl">
        Natural Calligraphy
      </h1>
      <Card username="Natural" btntext="Click Now" />
      <br />
      <Card username="Calligraphy" />
      <br />
      <Card username="Handwritng" btntext="New Img" />
    </>
  );
}

export default App;
