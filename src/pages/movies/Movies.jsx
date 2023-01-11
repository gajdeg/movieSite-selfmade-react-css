import React from "react";
import MovieBox from "../../components/MovieBox/MovieBox";
import styles from "./Movies.module.css";

export default function Movies() {
  return (
    <div className={styles.container}>
      <div className={styles.movies}>
        <MovieBox title="title" type="movie"></MovieBox>
      </div>
    </div>
  );
}
