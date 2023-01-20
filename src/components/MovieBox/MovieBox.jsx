import { useState } from "react";
import styles from "./MovieBox.module.css";
import useSWRInfinite from "swr/infinite";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";
import { imageNull } from "../../ImageNull";

const API_IMG = "https://image.tmdb.org/t/p/w500/";
const fetcher = (...url) =>
  fetch(...url)
    .then((res) => res.json())
    .then((data) => {
      return data.results;
    });

export default function MovieBox({ title, type }) {
  const [query, setQuery] = useState("");
  const [search, setSearch] = useState(false);
  const [input, setInput] = useState("");

  const { data, error, mutate, size, setSize, isValidating } = useSWRInfinite(
    (index) =>
      search
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

  const handleSearch = (e) => {
    e.preventDefault();

    if (input.length < 3) {
      notify();
      return;
    }

    setQuery(input);
    setSize(1);
    setSearch(true);
  };
  const notify = () =>
    toast(
      `It's a movie site, not a mind reader! You need to insert more than 3 characters`,
      { icon: "🧠" }
    );

  return (
    <div className={styles.container}>
      <form role="search">
        <input
          placeholder="Search movies"
          onChange={(e) => setInput(e.target.value)}
          value={input}
          required
          autoFocus
        />
        <button
          type="submit"
          className={styles.btnSearch}
          onClick={handleSearch}
        >
          <i className="fa fa-search"></i>
        </button>
      </form>
      <ToastContainer
        style={{ width: "300px" }}
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
