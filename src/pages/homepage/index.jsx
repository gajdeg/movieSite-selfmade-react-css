import styles from "./index.module.css";
import UpcomingMovies from "./UpcomingMovies";
import MyCarousel from "./MyCarousel";
import PopularMovies from "./PopularMovies";
import TopRatedMovies from "./TopRatedMovies";
import PopularTV from "./PopularTV";
import { PageAnimation } from "../../components/PageAnimation";

export function HomePage() {
  return (
    <PageAnimation>
      <div className={styles.container}>
        <MyCarousel />
        <PopularMovies />
        <PopularTV />
        <UpcomingMovies />
        <TopRatedMovies />
      </div>
    </PageAnimation>
  );
}
