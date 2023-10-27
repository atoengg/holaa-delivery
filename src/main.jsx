import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Route, BrowserRouter as Router } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "react-loading-skeleton/dist/skeleton.css";
import Register from "./pages/Register/index.jsx";
import Login from "./pages/Login/index.jsx";
import store from "./redux/store.js";
import { Provider } from "react-redux";
import { SkeletonTheme } from "react-loading-skeleton";
import firebase from "./config/firebase.js";
import { initializeApp } from "firebase/app";
import AuthContext from "./context/AuthContext.jsx";

const app = initializeApp(firebase);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthContext>
      <SkeletonTheme baseColor="#e2e8f0" highlightColor="#f1f5f9">
        <Router>
          <Provider store={store}>
            <App />
          </Provider>
        </Router>
      </SkeletonTheme>
    </AuthContext>
  </React.StrictMode>
);
