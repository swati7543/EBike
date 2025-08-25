import React from 'react'
import style from './mainpage.module.css';
import InfoHighlights from './HomeComponents/InfoHighlights/InfoHighlights';
import Section1 from './HomeComponents/Section1';
import ImageCarousel from '../Slider/ImageCarousel';
const images = [
  { src: "https://hiboy.com.au/wp-content/uploads/2025/07/1-3_1.png", alt: "Slide 1" },
  { src: "https://hiboy.com.au/wp-content/uploads/2025/07/5_5cff1aaa-8c5f-4cba-b07e-c04deb981698.jpg", alt: "Slide 2" },
  { src: "https://hiboy.com.au/wp-content/uploads/2025/07/1-4_1.png", alt: "Slide 3" },
  { src: "https://hiboy.com.au/wp-content/uploads/2025/07/12_e3fa35d8-523c-44a0-b3de-33a9cca43d3b.png", alt: "Slide 4" },
  { src: "https://hiboy.com.au/wp-content/uploads/2025/07/12_e3fa35d8-523c-44a0-b3de-33a9cca43d3b.png", alt: "Slide 4" },
  { src: "https://hiboy.com.au/wp-content/uploads/2025/07/12_e3fa35d8-523c-44a0-b3de-33a9cca43d3b.png", alt: "Slide 4" },
  { src: "https://hiboy.com.au/wp-content/uploads/2025/07/12_e3fa35d8-523c-44a0-b3de-33a9cca43d3b.png", alt: "Slide 4" },
  { src: "https://hiboy.com.au/wp-content/uploads/2025/07/12_e3fa35d8-523c-44a0-b3de-33a9cca43d3b.png", alt: "Slide 4" },
  { src: "https://hiboy.com.au/wp-content/uploads/2025/07/12_e3fa35d8-523c-44a0-b3de-33a9cca43d3b.png", alt: "Slide 4" },
  { src: "https://hiboy.com.au/wp-content/uploads/2025/07/12_e3fa35d8-523c-44a0-b3de-33a9cca43d3b.png", alt: "Slide 4" },

];

function MainHomePage() {
  return (
    <div className={style.mainHomepage}>
      <Section1 />
      <InfoHighlights />
      <div className="container mx-auto py-10">
        <ImageCarousel images={images} />
      </div>
    </div>
  )
}

export default MainHomePage;