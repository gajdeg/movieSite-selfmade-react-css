import React from "react";
import styles from "./index.module.css";
import MyCarousel from "./MyCarousel";

export function HomePage() {
  return (
    <div className={styles.container}>
      <MyCarousel></MyCarousel>
    </div>
  );
}
