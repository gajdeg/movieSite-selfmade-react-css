import React from "react";
import styles from "./About.module.css";

export default function About() {
  return (
    <div className={styles.container}>
      <img
        className={styles.mobileImg}
        src="https://www.transparentpng.com/thumb/spiderman/mbkshR-spider-man-png.png"
        alt="attacking with his web spiderman background download @transparentpng.com"
      />
      <img
        className={styles.desktopImg}
        src="https://www.transparentpng.com/thumb/spiderman/ld3cDH-countdown-launch-marvelu-spider-man-playstation.png"
        alt="Pulling his web Spiderman images png download @transparentpng.com"
      />

      <div className={styles.box}>
        <h1>About</h1>
        <div>
          Streamy is one of the best site to watch movies online for free. We
          give full access to a database of over 20000 movies and 5000 Tv series
          in high quality for free streaming, with no registration required.
          Streamy updates new content on a daily basis and with our huge
          database, you can find all your favorite movies and shows easily.
          Please support us by sharing streamy site with your friends and
          family. Thanks!
        </div>
        <div>
          It is time to cut the cord or cancel your subscription! You now do not
          need to proceed at your own risk to watch your favorite movies on free
          movie sites. Thousands of movies and TV shows at streamy are available
          for free users. And thanks to the site's ad-free feature, you can
          enjoy them without any worries. Watching movies with zero ads is no
          longer an exclusive benefit for paid users. Normally, sites are either
          free but ad-supported or premium without ads. But streamy brings you
          the best of both worlds: it does not require any payment and it does
          not have ads. Why spend your hard-earned money on paid streaming
          services when you can watch your favorite movies safely and freely on
          streamy?
        </div>
      </div>
    </div>
  );
}
