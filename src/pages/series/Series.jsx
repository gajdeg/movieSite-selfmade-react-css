import React from "react";
import MovieBox from "../../components/MovieBox/MovieBox";
import { PageAnimation } from "../../components/PageAnimation";
import styles from "./Series.module.css";

export default function Series() {
  return (
    <PageAnimation>
      <div className={styles.container}>
        <MovieBox title="name" type="tv"></MovieBox>
      </div>
    </PageAnimation>
  );
}
