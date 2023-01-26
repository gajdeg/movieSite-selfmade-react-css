import styles from "./MovieBox.module.css";

import { Link, useSearchParams } from "react-router-dom";
import { imageNull } from "../../ImageNull";
import SearchForm from "../SearchForm/SearchForm";
import { useMoviesQuery } from "../../hooks/useMoviesQuery";

const API_IMG = "https://image.tmdb.org/t/p/w500/";

const useURLSearchParam = (key) => {
  const [searchParam, setSearchParam] = useSearchParams();

  function set(newValue) {
    setSearchParam(new URLSearchParams({ [key]: newValue }));
  }

  return [searchParam.get(key), set];
};

export default function MovieBox({ title, type }) {
  const [keyword, setKeyword] = useURLSearchParam("keyword");

  const { data, size, setSize, isValidating } = useMoviesQuery({
    keyword,
    type,
  });

  const handleSubmit = (keyword) => {
    setSize(1);
    setKeyword(keyword);
  };

  return (
    <div className={styles.container}>
      <SearchForm
        type={type}
        onSubmit={handleSubmit}
        title={title}
        initialKeyword={keyword}
        placeholder="Search movies"
      />
      <div className={styles.movieBox}>
        {data?.map((movie) => (
          <div key={movie.id} className={styles.movieThumb}>
            <div className={styles.posterContainer}>
              <Link to={`/details/${type}/${movie.id}/${title}`}>
                <img
                  src={
                    movie.poster_path === null
                      ? imageNull
                      : API_IMG + movie.poster_path
                  }
                  className={styles.poster}
                  alt=""
                />
              </Link>
            </div>
            <div className={styles.underThumb}>
              <div className={styles.title}>{movie[title]}</div>
            </div>
          </div>
        ))}
      </div>
      <div className={styles.pagination}>
        {isValidating ? (
          <div className={styles.ring} />
        ) : (
          <button
            className={styles.loadBtn}
            onClick={() => setSize(size + 1)}
            disabled={isValidating}
          >
            Load more
          </button>
        )}
      </div>
    </div>
  );
}
