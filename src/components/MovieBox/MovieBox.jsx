import React from "react";
import useSWR from "swr";
import styles from "./MovieBox.module.css";

const API_IMG = "https://image.tmdb.org/t/p/w500/";

export default function MovieBox({ API_url }) {
  const fetcher = (...args) => fetch(...args).then((res) => res.json());
  const { data, error, isLoading } = useSWR(API_url, fetcher);
  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;
  return (
    <div className={styles.movieBox}>
      {data.results.map((movie) => (
        <div className={styles.posterContainer}>
          <a href="#">
            <img src={API_IMG + movie.poster_path} className={styles.poster} />
          </a>
          {/* <div className={styles.overview}>
            <h2>{movie.title}:</h2>
            <div className={styles.about}>{movie.overview}</div>

            <button>Watch</button>
          </div> */}
        </div>
      ))}
    </div>
  );
}
