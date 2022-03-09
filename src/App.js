import React from "react";
import "./css/App.css";
import Header from "../src/components/main/Header";
import "./css/App.css";
import { Routes, Route } from "react-router-dom";
import Login from "./components/login/Login";
import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux";
import authReducer from "./store/reducers/auth";
import checkLogin from "./components/login/LogicLogin";
import Profile from "./components/main/ProfileFeed";
import Register from "./components/register/Register";
import Main from "./components/main/Feed";

const rootReducer = combineReducers({
  auth : authReducer
});

const store = createStore(rootReducer);

function App() {
  const isLogin = checkLogin();
  return (
    <Provider store={store}>
      <div className="app">
        {!isLogin ? (  
          <Login />
        ) : (
          <>
            {/* <Header /> */}
            <div className="app__body">
              <Routes>
                <Route path="/login" element={<Login/>} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/register" element={<Register />} />
                <Route path="/" element={<Main />} />
              </Routes>
            </div>
          </>
        )}

      </div>
    </Provider>
  )
  }
export default App;
