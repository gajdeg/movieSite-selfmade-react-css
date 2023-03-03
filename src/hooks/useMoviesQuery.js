import { useEffect, useState } from "react";
import useSWRInfinite from "swr/infinite";

const fetcher = (...url) =>
  fetch(...url)
    .then((res) => res.json())
    .then((data) => {
      return data.results;
    });

export const useMoviesQuery = ({ type, keyword, delayMs = 0 }) => {
  const debouncedKeyword = useDebouncedValue(keyword, delayMs);

  const { data, error, mutate, size, setSize, isValidating } = useSWRInfinite(
    (index) =>
      debouncedKeyword && debouncedKeyword.replace(/\s/g, "").length
        ? `https://api.themoviedb.org/3/search/${type}?api_key=6f9286d54de4891ea7a5c91779e09786&query=${debouncedKeyword}&page=${
            index + 1
          }`
        : `https://api.themoviedb.org/3/${type}/popular?api_key=6f9286d54de4891ea7a5c91779e09786&page=${
            index + 1
          }`,
    fetcher,
    { revalidateFirstPage: false }
  );

  return { data: data?.flat(), error, mutate, size, setSize, isValidating };
};

const useDebouncedValue = (value, delayMs) => {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    let token = setTimeout(() => {
      setDebouncedValue(value);
    }, delayMs);

    return () => {
      clearTimeout(token);
    };
  }, [value, delayMs]);

  return debouncedValue;
};
