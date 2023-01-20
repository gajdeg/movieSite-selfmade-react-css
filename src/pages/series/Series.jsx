import React from "react";
import MovieBox from "../../components/MovieBox/MovieBox";
import { motion } from "framer-motion";
import styles from "./Series.module.css";

export default function Series() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ ease: "easeIn", duration: 1 }}
    >
      <div className={styles.container}>
        <MovieBox title="name" type="tv"></MovieBox>
      </div>
    </motion.div>
  );
}
