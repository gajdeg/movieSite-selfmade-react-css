import React, { useState } from "react";
import styles from "./MyCarousel.module.css";

const sources = [
  "public/images/home1.jpg",
  "public/images/home2.jpg",
  "public/images/home3.jpg",
  "public/images/home4.jpg",
];

export default function MyCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);

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

      <button
        onClick={() =>
          setActiveIndex((i) => (i + 1 < sources.length ? ++i : 0))
        }
        style={{ position: "absolute", bottom: 0, right: 0, zIndex: 4 }}
      >
        View next slide
      </button>
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
