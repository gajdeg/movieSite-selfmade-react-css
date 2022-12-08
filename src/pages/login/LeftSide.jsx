import React from "react";
import styles from "./leftside.module.css";
import { SideContainer } from "./SideContainer";

export default function LeftSide() {
  return (
    <div className={styles.container}>
      <SideContainer className="text-light">
        <h3>My Dashboard</h3>

        <div className={styles.down}>
          <h2>Welcome to My Dashboard</h2>
          <div className={styles.line}></div>
          <div>Login to access your account</div>
        </div>
      </SideContainer>
    </div>
  );
}
