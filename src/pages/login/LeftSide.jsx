import React from "react";
import styles from "./LeftSide.module.css";
import { SideContainer } from "./SideContainer";

export default function LeftSide() {
  return (
    <div className={styles.container}>
      <SideContainer className="text-light">
        <div className={styles.down}>
          <h2>
            Welcome to <em>Streamy</em>
          </h2>
          <div className={styles.line}></div>
          <div>Login to access your account</div>
        </div>
      </SideContainer>
    </div>
  );
}
