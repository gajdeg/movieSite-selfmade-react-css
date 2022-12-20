import React from "react";
import Category from "../../components/CategorySlider/CategorySlider";

export default function PopularMovies() {
  const type = "Popular Movies";
  const API_url =
    "https://api.themoviedb.org/3/movie/popular?api_key=6f9286d54de4891ea7a5c91779e09786&";
  return <Category API_url={API_url} type={type}></Category>;
}
