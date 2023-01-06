import styles from "./RightSide.module.css";
import React from "react";
import { Circle } from "./Circle";
import { SideContainer } from "./SideContainer";
export default function RightSide() {
  return (
    <div className={styles.container}>
      <SideContainer>
        <div className={styles.circle}>
          <Circle size={"100%"} className="bg-white border-primary" />
          <Circle size={"80%"} className="bg-white border-primary" />
          <Circle size={"60%"} className="bg-primary" />
          <Circle size={"40%"} className="bg-white" />
        </div>

      </SideContainer>
    </div>
  );
}
