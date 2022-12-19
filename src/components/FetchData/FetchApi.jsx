import React, { useEffect, useState } from "react";

const API_URL =
  "https://api.themoviedb.org/3/movie/popular?api_key=6f9286d54de4891ea7a5c91779e09786&";

export default function FetchApi() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => {
        setMovies(data.results);
      });
  }, []);
  return (
    <div>
      {movies.map((movieReq) => {
        console.log(movieReq);
      })}
    </div>
  );
}
