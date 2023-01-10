import { useEffect, useState } from "react";
import useSWR from "swr";
import styles from "./MovieBox.module.css";

const API_IMG = "https://image.tmdb.org/t/p/w500/";

export default function MovieBox({ API_url, title }) {
  let [pageCount, setPageCount] = useState(1);
  const movies = [];

  for (let i = 1; i <= pageCount; i++) {
    movies.push(<Page index={i} api={API_url} title={title} />);
  }

  return (
    <>
      <div className={styles.movieBox}>{movies}</div>
      <div className={styles.pagination}>
        <button onClick={() => setPageCount(pageCount + 1)}>Load more</button>
      </div>
    </>
  );
}

function Page({ index, api, title }) {
  api = api + `page=${index}`;

  const fetcher = (...args) => fetch(...args).then((res) => res.json());
  const { data, error, isLoading } = useSWR(api, fetcher);
  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;

  return data.results.map((movie) => (
    <div key={movie.id} className={styles.movieThumb}>
      <div className={styles.posterContainer}>
        <a href="#">
          <img src={API_IMG + movie.poster_path} className={styles.poster} />
        </a>
      </div>
      <div className={styles.underThumb}>
        <div className={styles.title}>{movie[title]}</div>
      </div>
    </div>
  ));
}
