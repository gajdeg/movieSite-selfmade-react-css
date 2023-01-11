import { useEffect, useState } from "react";
import useSWR from "swr";
import styles from "./MovieBox.module.css";

const API_IMG = "https://image.tmdb.org/t/p/w500/";

export default function MovieBox({ title, type }) {
  let [pageCount, setPageCount] = useState(1);
  let [query, setQuery] = useState("");
  let [showMovies, setShowMovies] = useState(true);
  let [searchMovies, setSearchMovies] = useState([]);
  const movies = [];

  const API_url = `https://api.themoviedb.org/3/${type}/popular?api_key=6f9286d54de4891ea7a5c91779e09786&`;
  const API_search = `https://api.themoviedb.org/3/search/${type}?api_key=6f9286d54de4891ea7a5c91779e09786&query=${query}&`;

  for (let i = 1; i <= pageCount; i++) {
    movies.push(<Page index={i} key={i} api={API_url} title={title} />);
  }

  const handleSearch = (e) => {
    // e.preventDefault();
    // setSearchMovies([]);
    // setPageCount(1);
    // setShowMovies(false);
    // for (let i = 1; i <= pageCount; i++) {
    //   searchMovies.push(
    //     <Page index={i} key={i} api={API_search} title={title} />
    //   );
    // }
    // setSearchMovies(searchMovies);
    // console.log(searchMovies);
  };

  return (
    <>
      <form>
        <input
          type="text"
          placeholder="Search movies"
          onChange={(e) => setQuery(e.target.value)}
          value={query}
          autoComplete="off"
        />
        <button type="submit" onClick={handleSearch}>
          <i className="fa fa-search"></i>
        </button>
      </form>
      <div className={styles.movieBox}>
        {showMovies ? movies : searchMovies}
      </div>
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
  if (isLoading) return <div className={styles.loading}></div>;

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
