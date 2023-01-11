import React from "react";
import MovieBox from "../../components/MovieBox/MovieBox";

import styles from "./Series.module.css";

export default function Series() {
  return (
    <div className={styles.container}>
      <MovieBox title="name" type="tv"></MovieBox>
    </div>
  );
}
