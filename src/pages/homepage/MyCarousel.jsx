import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function MyCarousel() {
  const settings = {
    speed: 500,
    fade: true,
    cssEase: "linear",
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
  };
  return (
    <>
      <Slider {...settings}>
        <div>
          <img src="public\images\home1.jpg" alt="Image 1" />
        </div>
        <div>
          <img src="public\images\home2.jpg" alt="Image 2" />
        </div>
        <div>
          <img src="public\images\home3.jpg" alt="Image 3" />
        </div>
        <div>
          <img src="public\images\home4.jpg" alt="Image 4" />
        </div>
      </Slider>
    </>
  );
}
