import React from "react";
import styles from "./Footer.module.css";
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
            <a href="h">Home</a>
          </li>
          <li>
            <a href="c">Contact us</a>
          </li>
          <li>
            <a href="t">Term of services</a>
          </li>
          <li>
            <a href="a">About us</a>
          </li>
        </ul>
        <ul className={styles.list}>
          <li>
            <div>Suggestions</div>
          </li>
          <li>
            <a href="y">You must watch</a>
          </li>
          <li>
            <a href="r">Recent release</a>
          </li>
          <li>
            <a href="t">Top IMDB</a>
          </li>
        </ul>
        <ul className={styles.list}>
          <li>
            <div>Social</div>
          </li>
          <li>
            <a href="y">YouTube</a>
          </li>
          <li>
            <a href="t">Twitter</a>
          </li>
          <li>
            <a href="f">Facebook</a>
          </li>
          <li>
            <a href="i">Instagram</a>
          </li>
        </ul>
      </div>
      <div className={styles.rightside}>
        <img
          src="/images/logo.png"
          className={styles.logo}
          onClick={redirectToHome}
          alt=""
        />
        <div>©2023 Gajdeg</div>
      </div>
    </footer>
  );
}
