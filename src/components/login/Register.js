import React from "react";
import "../../css/Register.css";

function Register() {
  return (
    <div className="register">
      <h1 className="register__title">Register</h1>
      <form
        action="http://localhost:8080/FakeStory/api/admin/user"
        method="post"
      >
        <div className="form__control">
          <input
            type="text"
            id="fullname"
            name="fullname"
            placeholder="Enter your full name"
          />
          <span></span>
          <small></small>
        </div>
        <div className="form__control">
          <input
            type="email"
            id="username"
            name="username"
            placeholder="Enter your username (Email)"
          />
          <span></span>
          <small></small>
        </div>

        <input
          type="hidden"
          name="avatar"
          value="https://firebasestorage.googleapis.com/v0/b/fakestory-9fb8d.appspot.com/o/file%2FdefaultAvatar.png?alt=media&token=8042470b-2bd9-4f51-825f-d62bb94f6e7b"
        />
        <input type="hidden" name="background" value="https://firebasestorage.googleapis.com/v0/b/fakestory-9fb8d.appspot.com/o/file%2FdefaultBackground.png?alt=media&token=1593e00a-c090-4ac3-9cf7-2863b71d1652" />
        <input type="hidden" name="role_id" value="0" />
        <input type="hidden" name="description" value="none" />
        <input type="hidden" name="numberFriends" value="0" />
        <input type="hidden" name="country" value="none" />
        <input type="hidden" name="phone" value="none" />

        <div className="form__control">
          <input
            type="password"
            id="password"
            placeholder="Password"
            name="password"
          />
          <span></span>
          <small></small>
        </div>
        <div className="form__control">
          <input
            type="password"
            id="confirm-password"
            placeholder="Confirm password"
          />
          <span></span>
          <small></small>
        </div>
        <div className="form__control">
          <input type="date" id="birthday" name="birthday" />
        </div>

        <button className="submit">Login</button>
        <div className="form__signup">
          Not a member?
          <a href="#">Signup</a>
        </div>
      </form>
    </div>
  );
}

export default Register;
