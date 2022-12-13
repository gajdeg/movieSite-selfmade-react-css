import React, { useEffect, useState } from "react";
// import { useInterval } from "react-use";
import styles from "./MyCarousel.module.css";

const sources = [
  "public/images/home1.jpg",
  "public/images/home2.jpg",
  "public/images/home3.jpg",
  "public/images/home4.jpg",
];

export default function MyCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (activeIndex < sources.length) {
      const id = setInterval(() => {
        setActiveIndex((i) => (i + 1 < sources.length ? ++i : 0));
      }, 2000);
      return () => clearInterval(id);
    }
    activeIndex = 1;
  }, []);

  return (
    <div className={styles.carousel}>
      {sources.map((src, i) => (
        <Image
          key={src}
          src={src}
          isPast={
            activeIndex === 0 ? i === sources.length - 1 : i === activeIndex - 1
          }
          isActive={i === activeIndex}
          isNext={
            activeIndex === sources.length - 1 ? 0 : i === activeIndex + 1
          }
        />
      ))}
    </div>
  );
}

const Image = ({ src, isPast, isNext, isActive }) => {
  return (
    <img
      src={src}
      key={src}
      className={`${styles.img} ${
        isActive ? styles.active : isPast ? styles.past : styles.next
      }`}
    />
  );
};
