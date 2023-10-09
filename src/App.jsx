import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="flex align-center justify-center">
        <h1 className="text-teal-600 font-bold text-2xl">
          Bismillah Mini Project
        </h1>
      </div>
    </>
  );
}

export default App;
