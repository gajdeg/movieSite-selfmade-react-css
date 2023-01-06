import React from "react";
import styles from "./LoginForm.module.css";
export default function LoginForm() {
  return (
    <div className={styles.container}>
      <h3>Login</h3>

      <label className={styles.inputBox}>
        <span>Email</span>
        <input
          type="email"
          required="required"
          placeholder="example@email.com"
        />
      </label>

      <label className={styles.inputBox}>
        <span>Password</span>
        <input type="password" required="required" placeholder="********" />
      </label>

      <div className={styles.links}>
        <a href="#">Forgot password?</a>
        <a href="#">Create an account</a>
      </div>

      <button className={styles.button}>LOG IN</button>
      <label className={styles.keep}>
        <input type="checkbox" name="keep" />
        <div>Keep me logged in</div>
      </label>
    </div>
  );
}
