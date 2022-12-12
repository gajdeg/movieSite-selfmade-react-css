import { useState } from "react";
import styles from "./header.module.css";
import { useNavigate } from "react-router-dom";

export function Header() {
  const [Mobile, setMobile] = useState(false);
  const navigate = useNavigate();

  const redirectToHome = () => {
    navigate("/");
  };

  return (
    <>
      <header>
        <div className={`${styles.container} ${styles.flexSB}`}>
          <nav className={styles.flexSB}>
            <img
              src="/images/logo.png"
              className={styles.logo}
              onClick={redirectToHome}
            />
            <ul className={Mobile ? `${styles.list}` : `${styles.flexSB}`}>
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/">Series</a>
              </li>
              <li>
                <a href="/">Movies</a>
              </li>
              <li>
                <a href="/">Contact</a>
              </li>
            </ul>
            <button
              className={styles.toggle}
              onClick={() => setMobile(!Mobile)}
            >
              {Mobile ? (
                <i className="fa fa-times" aria-hidden="true"></i>
              ) : (
                <i className="fa fa-bars" aria-hidden="true"></i>
              )}
            </button>
          </nav>
          <div className={`${styles.flexSB}`}>
            <a href="/login">
              <button className={styles.button}>Login</button>
            </a>
          </div>
        </div>
      </header>
    </>
  );
}
