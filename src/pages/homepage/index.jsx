import React, { useState } from "react";
import styles from "./index.module.css";
import MyCarousel from "./MyCarousel";
import useSWR from "swr";
import MovieBox from "../../components/MovieBox/MovieBox";

export function HomePage() {

  const fetcher = (...args) => fetch(...args).then((res) => res.json());
  const API_URL =
    "https://api.themoviedb.org/3/movie/popular?api_key=6f9286d54de4891ea7a5c91779e09786&";
  const { data, error, isLoading } = useSWR(API_URL, fetcher);

  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;
  console.log(data.results.length);
  return (
    <div className={styles.container}>
      <MyCarousel></MyCarousel>

      <div className={styles.list}>
        {data.results.length > 0 ? (
          <ul>
            {data.results.map((movieReq) => (
              <MovieBox key={movieReq.id} {...movieReq} />
            ))}
          </ul>
        ) : (
          <h2>Sorry !! No Movies Found</h2>
        )}
      </div>
    </div>
  );
}
