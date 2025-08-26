"use client";

import React from 'react'
import style from "./section3.module.css";
import Image from "next/image";
import Slider from 'react-slick';


interface Section3SliderProps {
    images: { src: string; alt?: string; desc: string; price: string; id?: number }[];
}
const Section3: React.FC<Section3SliderProps> = ({ images }) => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 5, // same as Elementor's slides_to_show
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
        <div className={style.section3main}>
            <div className={style.sliderContainer}>
            <h2 className={style.section3Heading}>Explore Our Top Picks</h2>
                <Slider {...settings}>
                    {images.map((img, idx) => (
                        <div key={idx} className={style.slideItem}>
                            <div className={style.card}>
                                <Image
                                    src={img.src}
                                    alt={img.alt || `slide-${idx}`}
                                    width={400}
                                    height={400}
                                    className={style.section3slideImage}
                                />
                                <div className={style.cardContent}>
                                    <p className={style.cardTitle}>{img.desc}</p>
                                    <p className={style.cardPrice}>{img.price.toLocaleString()}</p>
                                </div>
                            </div>

                        </div>
                    ))}
                </Slider>
            </div>
        </div>

    )
}

export default Section3