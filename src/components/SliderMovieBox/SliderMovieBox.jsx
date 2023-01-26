import { imageNull } from "../../ImageNull";
import styles from "./SliderMovieBox.module.css";
const API_IMG = "https://image.tmdb.org/t/p/w500/";

const SliderMovieBox = ({
  title,
  poster_path,
  vote_average,
  release_date,
  overview,
}) => {
  return (
    <div className={styles.item}>
      <div className={styles.posterContainer}>
        <a href="#">
          <img
            alt=""
            src={poster_path === null ? imageNull : API_IMG + poster_path}
            className={styles.poster}
          />
        </a>
        <div className={styles.overview}>
          <h2>{title}:</h2>
          <div className={styles.about}>{overview}</div>
          <button>Watch</button>
        </div>
      </div>
    </div>
  );
};

export default SliderMovieBox;
