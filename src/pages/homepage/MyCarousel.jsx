import React, { useState } from "react";
import { useInterval } from "../../hooks/useInterval";
import styles from "./MyCarousel.module.css";
import Image1 from "/images/home1.jpg";
import Image2 from "/images/home2.jpg";
import Image3 from "/images/home3.jpg";
import Image4 from "/images/home4.jpg";

const sources = [Image1, Image2, Image3, Image4];

export default function MyCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);

  useInterval(() => {
    setActiveIndex((i) => (i + 1 < sources.length ? ++i : 0));
  }, 7000);

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
        />
      ))}
    </div>
  );
}

const Image = ({ src, isPast, isActive }) => {
  return (
    <img
      src={src}
      key={src}
      className={`${styles.img} ${
        isActive ? styles.active : isPast ? styles.past : styles.next
      }`}
      alt=""
    />
  );
};
