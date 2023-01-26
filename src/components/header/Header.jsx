import { useState } from "react";
import styles from "./Header.module.css";
import { useNavigate } from "react-router-dom";

export function Header() {
  const [toggleMenu, setToggleMenu] = useState(false);
  const navigate = useNavigate();

  const redirectToHome = () => {
    navigate("/");
  };

  const toggleNav = () => {
    setToggleMenu(!toggleMenu);
  };

  return (
    <nav className={toggleMenu ? styles.navActive : styles.nav}>
      <div>
        <img
          src="/images/logo.png"
          className={styles.logo}
          onClick={redirectToHome}
        />
      </div>
      <ul className={styles.list}>
        <li className={styles.items}>
          <a href="/">Home</a>
        </li>
        <li className={styles.items}>
          <a href="/movies">Movies</a>
        </li>
        <li className={styles.items}>
          <a href="/series">Series</a>
        </li>
        <li className={styles.items}>
          <a href="/about">About</a>
        </li>
        <li className={styles.items}>
          <a href="/login">
            <button className={styles.btnLogin}>Login</button>
          </a>
        </li>
      </ul>
      <button className={styles.btn}>
        <i
          className={toggleMenu ? "fa fa-times" : "fa fa-bars"}
          onClick={toggleNav}
        />
      </button>
    </nav>
  );
}
