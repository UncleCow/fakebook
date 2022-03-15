import Main from "../../nav/Main";
import React from "react";
import { Routes, Route } from "react-router-dom";
import "../../css/page403.css";
import checkLogin from "../login/LogicLogin";

const NotFound = () => {
  let isLogin = checkLogin;
  return (
    <div style={{width: "100%"}}>
      {isLogin ? (
        <div className="forbident">
          <div className="maincontainer">
            <div className="bat">
              <img
                className="wing leftwing"
                src="https://www.blissfullemon.com/wp-content/uploads/2018/09/bat-wing.png"
              />
              <img
                className="body"
                src="https://www.blissfullemon.com/wp-content/uploads/2018/09/bat-body.png"
                alt="bat"
              />
              <img
                className="wing rightwing"
                src="https://www.blissfullemon.com/wp-content/uploads/2018/09/bat-wing.png"
              />
            </div>
            <div className="bat">
              <img
                className="wing leftwing"
                src="https://www.blissfullemon.com/wp-content/uploads/2018/09/bat-wing.png"
              />
              <img
                className="body"
                src="https://www.blissfullemon.com/wp-content/uploads/2018/09/bat-body.png"
                alt="bat"
              />
              <img
                className="wing rightwing"
                src="https://www.blissfullemon.com/wp-content/uploads/2018/09/bat-wing.png"
              />
            </div>
            <div className="bat">
              <img
                className="wing leftwing"
                src="https://www.blissfullemon.com/wp-content/uploads/2018/09/bat-wing.png"
              />
              <img
                className="body"
                src="https://www.blissfullemon.com/wp-content/uploads/2018/09/bat-body.png"
                alt="bat"
              />
              <img
                className="wing rightwing"
                src="https://www.blissfullemon.com/wp-content/uploads/2018/09/bat-wing.png"
              />
            </div>
            <img
              className="foregroundimg"
              src="https://www.blissfullemon.com/wp-content/uploads/2018/09/HauntedHouseForeground.png"
              alt="haunted house"
            />
          </div>
          <h1 className="errorcode">ERROR 403</h1>
          <div className="errortext">
            This area is forbidden. Turn back <a href="./home">now!</a> 
          </div>
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default NotFound;
