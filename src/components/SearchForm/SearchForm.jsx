import React from "react";
import { useState } from "react";
import styles from "./SearchForm.module.css";

export default function SearchForm({ handleSubmit, inputRef, data, title }) {
  const [search, setSearch] = useState([]);
  let debounced;
  
  const doMovieFilter = (value) => {
    const searchTerm = value.toLowerCase();
    clearTimeout(debounced);

    if (!searchTerm) return setSearch([]);

    debounced = setTimeout(() => {
      console.log("Called");
      setSearch(
        data?.flat().map((movies) => {
          const movieName = movies[title].toLowerCase();
          return movieName.includes(searchTerm);
        })
      );
    }, 1000);
  };
  console.log(search);
  return (
    <div className={styles.container}>
      <form role="search" onSubmit={handleSubmit}>
        <input
          placeholder="Search movies"
          ref={inputRef}
          autoFocus
          onChange={(e) => {
            doMovieFilter(e.target.value);
          }}
        />
        <button type="submit" className={styles.btnSearch}>
          <i className="fa fa-search"></i>
        </button>
      </form>
      <div>
        {search.map((c, index) => {
          return <p key={index}> {c}</p>;
        })}
      </div>
    </div>
  );
}

{
  /* {data
            ?.flat()
            .map((movie) => {
              const searchTerm = value.toLowerCase();
              const movieName = movie[title].toLowerCase();
              return (
                searchTerm &&
                movieName.startsWith(searchTerm) &&
                movieName !== searchTerm
              );
            })
            .slice(0, 10)
            .map((movie, key) => (
              <div
                onClick={() => onSearch(movie[title])}
                className={styles.dropdownRow}
                key={key}
              >
                {movie[title]}
              </div>
            ))} */
}
