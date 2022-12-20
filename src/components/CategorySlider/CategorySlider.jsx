import React from "react";
import useSWR from "swr";
import MovieBox from "../MovieBox/MovieBox";
import styles from "./CategorySlider.module.css";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

export default function Category({ API_url, type }) {
  const fetcher = (...args) => fetch(...args).then((res) => res.json());
  const { data, error, isLoading } = useSWR(API_url, fetcher);
  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;

  const options = {
    disableDotsControls: true,
    mouseTracking: true,
    animationType: "fadeout",
    paddingLeft: 50,
    paddingRight: 50,
    responsive: {
      0: {
        items: 1,
      },
      500: {
        items: 2,
      },
      768: {
        items: 3,
      },
      970: {
        items: 4,
      },
      1200: {
        items: 5,
      },
      1536: {
        items: 6,
        itemsFit: "contain",
      },
    },
  };

  return (
    <div className={styles.carousel}>
      <div className={styles.movieType}>{type}</div>

      <AliceCarousel {...options}>
        {data.results.map((movie) => (
          <MovieBox key={movie.id} {...movie} />
        ))}
      </AliceCarousel>
    </div>
  );
}
