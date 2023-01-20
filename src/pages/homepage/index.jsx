import React, { useState } from "react";
import styles from "./index.module.css";
import UpcomingMovies from "./UpcomingMovies";
import MyCarousel from "./MyCarousel";
import PopularMovies from "./PopularMovies";
import TopRatedMovies from "./TopRatedMovies";
import PopularTV from "./PopularTV";
import { motion } from "framer-motion";

export function HomePage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ ease: "easeIn", duration: 1 }}
    >
      <div className={styles.container}>
        <MyCarousel></MyCarousel>
        <PopularMovies></PopularMovies>
        <PopularTV></PopularTV>
        <UpcomingMovies></UpcomingMovies>
        <TopRatedMovies></TopRatedMovies>
      </div>
    </motion.div>
  );
}
