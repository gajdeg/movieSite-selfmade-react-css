import React, { useState } from "react";
import { useMoviesQuery } from "../../hooks/useMoviesQuery";
import styles from "./SearchForm.module.css";

export default function SearchForm({
  initialKeyword = "",
  onSubmit,
  type,
  placeholder,
}) {
  const [keyword, setKeyword] = useState(initialKeyword);

  const { data: options = [] } = useMoviesQuery({
    keyword,
    type,
    delayMs: 350,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(keyword);
  };
  return (
    <div className={styles.container}>
      <form role="search" onSubmit={handleSubmit}>
        <input
          placeholder={placeholder}
          autoFocus
          onChange={(e) => setKeyword(e.target.value)}
          value={keyword || ""}
        />
        <button type="submit" className={styles.btnSearch}>
          <i className="fa fa-search" />
        </button>
      </form>
      <ul>
        {keyword !== ""
          ? options.slice(0, 5).map((movie, index) => {
              return <li key={index}> {movie.title}</li>;
            })
          : null}
      </ul>
    </div>
  );
}
