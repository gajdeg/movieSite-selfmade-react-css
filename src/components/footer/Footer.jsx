import React from "react";
import styles from "./footer.module.css";
import { useNavigate } from "react-router-dom";

export default function Footer() {
  const navigate = useNavigate();
  const redirectToHome = () => {
    navigate("/");
  };
  return (
    <footer className={styles.footer}>
      <div className={styles.block}>
        <ul className={styles.list}>
          <li>
            <div>Streamy</div>
          </li>
          <li>
            <a href="">Home</a>
          </li>
          <li>
            <a href="">Contact us</a>
          </li>
          <li>
            <a href="">Term of services</a>
          </li>
          <li>
            <a href="">About us</a>
          </li>
        </ul>
        <ul className={styles.list}>
          <li>
            <div>Suggestions</div>
          </li>
          <li>
            <a href="">You must watch</a>
          </li>
          <li>
            <a href="">Recent release</a>
          </li>
          <li>
            <a href="">Top IMDB</a>
          </li>
        </ul>
        <ul className={styles.list}>
          <li>
            <div>Social</div>
          </li>
          <li>
            <a href="">YouTube</a>
          </li>
          <li>
            <a href="">Twitter</a>
          </li>
          <li>
            <a href="">Facebook</a>
          </li>
          <li>
            <a href="">Instagram</a>
          </li>
        </ul>
      </div>
      <div className={styles.rightside}>
        <img
          src="/images/logo.png"
          className={styles.logo}
          onClick={redirectToHome}
        />
        <div>©2023 Gajdeg</div>
      </div>
    </footer>
  );
}
