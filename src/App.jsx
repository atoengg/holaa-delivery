import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
// import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Register from "./pages/Register";
import Login from "./pages/Login";

import Layout from "./components/Layout/Layout";
import Routers from "./routes/Routers";

function App() {
  return (
    <>
      {/* <Routers /> */}
      <Layout />
      {/* <BrowserRouter>
        <Routes>
          <Route path="/Register" element={<Register />} />
          <Route path="/Login" element={<Login />} />
        </Routes>
      </BrowserRouter> */}
    </>
  );
}

export default App;
