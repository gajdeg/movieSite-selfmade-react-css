import React, { useState } from "react";
import styles from "./MovieBox.module.css";
const API_IMG = "https://image.tmdb.org/t/p/w500/";

const MovieBox = ({
  title,
  poster_path,
  vote_average,
  release_date,
  overview,
}) => {
  return (
    <li className={styles.li}>
      <div className={styles.heroContainer}>
        <div className={styles.mainContainer}>
          <div className={styles.posterContainer}>
            <a href="#">
              <img src={API_IMG + poster_path} className={styles.poster} />
            </a>
          </div>
          <div className={styles.ticketContainer}>
            <div className={styles.ticketContent}>
              <h4 className={styles.ticketMovieTitle}>{title}</h4>
              <p className={styles.ticketMovieSlogan}></p>
              <p className={styles.releaseDate}>Release: {release_date}</p>
              <p className={styles.voteAverage}>IMDb: {vote_average}</p>
              <button className={styles.btn}>Watch now</button>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
};

export default MovieBox;
