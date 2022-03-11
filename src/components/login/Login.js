import React, { useEffect, useCallback } from "react";
import { useState } from "react";
import "../../css/Login.css";
import isEmpty from "validator/lib/isEmpty";
import isEmail from "validator/lib/isEmail";
import { useDispatch } from "react-redux";
// import { useDispatch } from "react-redux";
import { login } from "../../store/actions/auth";
function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [validate, setValidate] = useState("");
  const [mess, setMess] = useState("");

  const handleEmailChange = (e) => {
    const value = e.target.value;
    setEmail(value);
  };

  const handlePasswordChange = (e) => {
    const value = e.target.value;
    setPassword(value);
  };

  const validateAll = () => {
    const messages = {};
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (isEmpty(email)) {
      messages.email = "Please input your email";
    } else if (!email.match(mailformat)) {
      messages.email = "Your email is incorrect";
    }

    if (isEmpty(password)) {
      messages.password = "Please input your password";
    }

    setValidate(messages);
    if (Object.keys(messages).length > 0) return false;
    return true;
  };

  const dispatch = useDispatch();
  const saveUser = useCallback((data) => {
    dispatch({ type: "AUTHENTICATION", id: data.id });
  }, []);

  const handleSubmit = async () => {
    const isValid = validateAll();
    if (!isValid) {
      return;
    } else {
      // await login(email, password);
      await login(email, password).then((data) => {
        console.log(data);
        if (data.content === undefined) {
          document.cookie = `id=${data.id};max-age=60*60*24`;
          document.cookie = `username=${data.username};max-age=60*60*24`;
          if (data.id) {
            console.log(data);
            saveUser(data);
          }
          window.location.href = "http://localhost:3000/";
        } else {
          const message = data.content;
          console.log(message);
          setMess(message);
        }
      });
    }
  };

  return (
    <div className="loginPage">
      <div className="login">
        <div className="login__intro">
          <img
            className="login__logo"
            src="https://static.xx.fbcdn.net/rsrc.php/y8/r/dF5SId3UHWd.svg"
            alt="fakebook"
          />
          <p>
            Facebook giúp bạn connect và share với everyone in life của bạn.
          </p>
        </div>
        <div className="login__form">
          <form
            action="http://localhost:8080/FakeStory/api/login"
            method="POST"
          >
            <div className="login__input">
              <input
                className="login__email"
                placeholder="Email hoặc số điện thoại"
                onChange={handleEmailChange}
                name="username"
              />
            </div>
            <p className="login_err">{validate.email}</p>
            <div className="login__input">
              <input
                className="login__password"
                placeholder="Mật khẩu"
                onChange={handlePasswordChange}
                name="password"
                type="password"
              />
            </div>
            <p className="login_err">{validate.password}</p>
            <div className="login__btn">
              <button type="button" onClick={handleSubmit}>
                Đăng nhập
              </button>
            </div>
            <p>{mess}</p>
            <div className="login__forget">
              <a className="login__forget" href="/">
                Quên mật khẩu?
              </a>
            </div>
            <div className="login__seperate">
              <hr />
            </div>
            <div className="login__regis">
              <button type="button">
                <a href="http://localhost:3000/register">Tạo tài khoản</a>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
