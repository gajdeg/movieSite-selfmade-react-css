import React from "react";
import useSWR from "swr";
import SliderMovieBox from "../SliderMovieBox/SliderMovieBox";
import styles from "./CategorySlider.module.css";

export default function Category({ API_url, type }) {
  const fetcher = (...args) => fetch(...args).then((res) => res.json());
  const { data, error, isLoading } = useSWR(API_url, fetcher);
  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;
  const handlePrev = (e) => {
    e.target.parentNode.scrollBy({ left: -460, behavior: "smooth" });
  };
  const handleNext = (e) => {
    e.target.parentNode.scrollBy({ left: 460, behavior: "smooth" });
  };
  return (
    <div className={styles.container}>
      <div className={styles.movieType}>{type}</div>
      <div className={styles.slider} id="#slider">
        {data.results.map((movie, key) => (
          <div key={key} className={styles.slide}>
            <SliderMovieBox key={movie.id} {...movie} />
          </div>
        ))}
        <button className={styles.prev} onClick={(e) => handlePrev(e)}>
          ❮
        </button>
        <button className={styles.next} onClick={(e) => handleNext(e)}>
          ❯
        </button>
      </div>
    </div>
  );
}
