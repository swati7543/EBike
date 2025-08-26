"use client";
import React from 'react'
import Image from "next/image";
import Slider from "react-slick";
import styles from "./banner.module.css";

interface BannerProps {
    images: { src: string; alt?: string }[];
}
const Banner: React.FC<BannerProps> = ({ images }) => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1, // same as Elementor's slides_to_show
        slidesToScroll: 1,
        arrows: true,
        autoplay: true,
        autoplaySpeed: 5000,
        pauseOnHover: true,
        pauseOnFocus: true,
        responsive: [
            {
                breakpoint: 1024, // tablets
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 640, // mobile
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    };
    return (

        <div className={styles.sliderContainer}>
            <Slider {...settings}>
                {images.map((img, idx) => (
                    <div key={idx} className={styles.slideItem}>
                        <Image
                            src={img.src}
                            alt={img.alt || `slide-${idx}`}
                            width={900}
                            height={600}
                            className={styles.slideImage}
                        />
                    </div>
                ))}
            </Slider>
        </div>

    )
}

export default Banner




