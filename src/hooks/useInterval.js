import { useEffect } from "react";

export const useInterval = (callback, delayMs) => {
  useEffect(() => {
    const id = setInterval(callback, delayMs);
    return () => clearInterval(id);
  }, [delayMs]);
};
