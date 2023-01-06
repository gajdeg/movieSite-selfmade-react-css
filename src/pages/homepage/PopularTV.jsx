import React from "react";
import Category from "../../components/CategorySlider/CategorySlider";

export default function PopularTV() {
  const type = "Popular TV Shows";
  const API_url =
    "https://api.themoviedb.org/3/tv/popular?api_key=6f9286d54de4891ea7a5c91779e09786&page=2";
  return <Category API_url={API_url} type={type}></Category>;
}
