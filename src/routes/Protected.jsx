import { Navigate } from "react-router-dom";
import { Context } from "../context/AuthContext";
import React, { useContext } from "react";

const Protected = ({ children }) => {
  const { user } = useContext(Context);

  if (!user) {
    return <Navigate to={"/Login"} replace />;
  } else {
    return children;
  }
};

export default Protected;
