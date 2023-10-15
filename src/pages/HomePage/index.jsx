import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div>
      <h1>Ini Halaman Home</h1>
      <p>
        <Link to={"/Register"}>Register</Link>
      </p>
    </div>
  );
};

export default HomePage;
