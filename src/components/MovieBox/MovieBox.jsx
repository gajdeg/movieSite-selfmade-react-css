import { useState } from "react";
import styles from "./MovieBox.module.css";
import useSWRInfinite from "swr/infinite";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link, useSearchParams } from "react-router-dom";
import { imageNull } from "../../ImageNull";

const API_IMG = "https://image.tmdb.org/t/p/w500/";
const fetcher = (...url) =>
  fetch(...url)
    .then((res) => res.json())
    .then((data) => {
      return data.results;
    });

const useQuery = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialQuery = searchParams.get("query");
  const [query, _setQuery] = useState(initialQuery);

  function setQuery(newQuery) {
    _setQuery(newQuery);
    setSearchParams(new URLSearchParams({ query: newQuery }));
  }

  return [query, setQuery];
};

export default function MovieBox({ title, type }) {
  const [query, setQuery] = useQuery(initialQuery);

  const { data, error, mutate, size, setSize, isValidating } = useSWRInfinite(
    (index) =>
      query
        ? `https://api.themoviedb.org/3/search/${type}/?api_key=6f9286d54de4891ea7a5c91779e09786&query=${query}&page=${
            index + 1
          }`
        : `https://api.themoviedb.org/3/${type}/popular?api_key=6f9286d54de4891ea7a5c91779e09786&page=${
            index + 1
          }`,
    fetcher,
    { revalidateFirstPage: false }
  );
  const isLoadingInitialData = !data && !error;
  const isLoadingMore =
    isLoadingInitialData ||
    (size > 0 && data && typeof data[size - 1] === "undefined");

  const handleSubmit = (e) => {
    e.preventDefault();
    setSize(1);
    setQuery(input);
  };

  return (
    <div className={styles.container}>
      {/* <form role="search" onSubmit={handleSubmit}>
        <input
          placeholder="Search movies"
          onChange={(e) => setInput(e.target.value)}
          value={input}
          autoFocus
        />
        <button type="submit" className={styles.btnSearch}>
          <i className="fa fa-search"></i>
        </button>
      </form> */}
      <ToastContainer
        position="bottom-center"
        autoClose={4000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      <div className={styles.movieBox}>
        {data?.flat().map((movie) => (
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
        {isLoadingMore ? (
          <div className={styles.ring}></div>
        ) : (
          <button className={styles.loadBtn} onClick={() => setSize(size + 1)}>
            Load more
          </button>
        )}
      </div>
    </div>
  );
}
