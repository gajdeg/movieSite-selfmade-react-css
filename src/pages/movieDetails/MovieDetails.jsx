import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import useSWR from "swr";
import { PageAnimation } from "../../Components/PageAnimation";
import { fetcher } from "../../fetcher";
import { imageNull } from "../../ImageNull";
import styles from "./MovieDetails.module.css";

const API_IMG = "https://image.tmdb.org/t/p/w500/";

export default function MovieDetails() {
  const { type, movieId, title } = useParams();
  const API_url = `https://api.themoviedb.org/3/${type}/${movieId}?api_key=6f9286d54de4891ea7a5c91779e09786&`;
  const navigate = useNavigate();

  const { data, error, isLoading } = useSWR(API_url, fetcher);
  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>Loading...</div>;

  return (
    <PageAnimation>
      <button className={styles.backBtn} onClick={() => navigate(-1)}>
        <i className="fa fa-arrow-circle-o-left" />
      </button>
      <div className={styles.container}>
        <img
          src={
            data?.poster_path === null ? imageNull : API_IMG + data?.poster_path
          }
          className={styles.poster}
          alt=""
        />
        <div className={styles.details}>
          <div className={styles.title}>{data[title]}</div>

          <div className={styles.overview}>{data?.overview}</div>
          <div className={styles.rating}>
            <i className="fa fa-imdb" />
            {parseFloat(data?.vote_average).toFixed(1)}
          </div>
          <a href={data?.homepage} className={styles.watchBtn}>
            Watch now
          </a>
        </div>
      </div>
    </PageAnimation>
  );
}
