import React from "react";
import useSWR from "swr";
import SliderMovieBox from "../SliderMovieBox/SliderMovieBox";
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
      580: {
        items: 2,
      },
      820: {
        items: 3,
      },
      1060: {
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
          <SliderMovieBox key={movie.id} {...movie} />
        ))}
      </AliceCarousel>
    </div>
  );
}
