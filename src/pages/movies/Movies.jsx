import React from "react";
import MovieBox from "../../components/MovieBox/MovieBox";
import styles from "./Movies.module.css";

import { motion } from "framer-motion";

export default function Movies() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ ease: "easeIn", duration: 1 }}
    >
      <div className={styles.container}>
        <MovieBox title="title" type="movie"></MovieBox>
      </div>
    </motion.div>
  );
}
