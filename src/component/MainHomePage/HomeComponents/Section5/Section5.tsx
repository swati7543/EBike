"use client";
import React, { useRef, useState } from "react";
import Slider from "react-slick";
import styles from "./section5.module.css";

const data = [
  {
    src: "https://hiboy.ae/cdn/shop/files/66_8a8861b7-28b2-4a71-928f-04bb6cdacd5b.png",
    desc: "“The Hiboy S2 delivers a lot of value for those looking for an affordable ride to get them from their home to the office, or to scoot about town.”",
  },
  {
    src: "https://hiboy.ae/cdn/shop/files/2_44a4ee85-16a6-4a1c-9332-d4d510702d66.png",
    desc: "“If you want to zoom around town, you have a few options. The S2 Pro electric scooter gives a decent range and a good price.”",
  },
  {
    src: "https://hiboy.ae/cdn/shop/files/1_039ce1f1-d28c-4faf-ac69-520cef575150.png",
    desc: "“Hiboy has quickly become one of the leading brands in the electric scooter and electric bike markets.”",
  },
  {
    src: "https://hiboy.ae/cdn/shop/files/888_8c3c64fd-1ca3-49b6-a0bc-c40822eab7a6.png",
    desc: "“Ready to take you around town without gas or oil, this electric scooter is a great way to travel to and from work or your friends houses this year.”",
  },
];

const Section5 = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const sliderRef = useRef<Slider | null>(null); // slider ka ref

  const settings = {
    dots: false,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: false,
    autoplaySpeed: 4000,
    beforeChange: (_: number, next: number) => setActiveIndex(next), // logo sync with slider
  };

  return (
    <div className={styles.section}>
      {/* Quotes Slider */}
      <div className={styles.sliderContainer}>

        <Slider ref={sliderRef} {...settings}>
          {data.map((item, index) => (
            <div key={index} className={styles.activeQuote}>
              <p className={styles.desc}>{item.desc}</p>
            </div>
          ))}
        </Slider>
      </div>

      {/* Logos */}
      <div className={styles.logos}>
        {data.map((item, index) => (
          <div
            key={index}
            className={`${styles.logoBox} ${activeIndex === index ? styles.active : ""
              }`}
            onClick={() => {
              setActiveIndex(index);
              sliderRef.current?.slickGoTo(index); // logo click -> slide move
            }}
          >
            <img src={item.src} alt={`logo-${index}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Section5;
