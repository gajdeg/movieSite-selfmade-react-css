import React from "react";
import "./loginform.css";
export default function LoginForm() {
  return (
    <div className="loginForm">
      <h3>Login</h3>
      <div className="inputBox">
        <span>Email</span>
        <input
          type="email"
          required="required"
          placeholder="example@email.com"
        />
      </div>
      <div className="inputBox">
        <span>Password</span>
        <input type="password" required="required" placeholder="********" />
      </div>
      <div className="links">
        <a className="fgt-p" href="#">
          Forgot password?
        </a>
        <a className="sign-up" href="#">
          Create an account
        </a>
      </div>

      <button className="btn-login">LOG IN</button>
      <label className="keep">
        <input type="checkbox" name="keep" />
        Keep me logged in
      </label>
    </div>
  );
}
