import React from "react";
import MovieBox from "../../components/MovieBox/MovieBox";
import { PageAnimation } from "../../components/PageAnimation";
import styles from "./Movies.module.css";

export default function Movies() {
  return (
    <PageAnimation>
      <div className={styles.container}>
        <MovieBox title="title" type="movie"></MovieBox>
      </div>
    </PageAnimation>
  );
}
