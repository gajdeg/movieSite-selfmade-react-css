import React from "react";
import MovieBox from "../../components/MovieBox/MovieBox";
import styles from "./Movies.module.css";

export default function Movies() {
  const API_url =
    "https://api.themoviedb.org/3/movie/popular?api_key=6f9286d54de4891ea7a5c91779e09786&page=3";
  return (
    <div className={styles.container}>
      <MovieBox API_url={API_url}></MovieBox>
    </div>
  );
}
