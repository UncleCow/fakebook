import React from "react";
import Header from "../src/components/main/Header";
import "./css/App.css";
import { Routes, Route } from "react-router-dom";
import Profile from "./nav/Profile";
import Main from "./nav/Main";
import Login from "./components/login/Login";

function App() {
  /* const [{ user }, dispatch] = useStateValue(); */

  const user = undefined;
  return (
    <div className="app">

      { !user ? (
        <Login />
      ) : (
      <>
        <Header />
        <div className="app__body">
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </div>
      </>
      )}
    </div>
  );
}

export default App;
