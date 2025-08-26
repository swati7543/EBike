import React from 'react'
import style from './mainpage.module.css';
import InfoHighlights from './HomeComponents/InfoHighlights/InfoHighlights';
import Section1 from './HomeComponents/Section1';
import ImageCarousel from '../Slider/ImageCarousel';
import Section2 from './HomeComponents/Section2';
import Section4 from './HomeComponents/Section4';
import Banner from './HomeComponents/Banner/Banner';
import Section3 from './HomeComponents/Section3/Section3';
import Section5 from './HomeComponents/Section5/Section5';
const images = [
  { src: "https://hiboy.com.au/wp-content/uploads/2025/07/1-3_1.png", alt: "Slide 1" },
  { src: "https://hiboy.com.au/wp-content/uploads/2025/07/5_5cff1aaa-8c5f-4cba-b07e-c04deb981698.jpg", alt: "Slide 2" },
  { src: "https://hiboy.com.au/wp-content/uploads/2025/07/1-4_1.png", alt: "Slide 3" },
  { src: "https://hiboy.com.au/wp-content/uploads/2025/07/12_e3fa35d8-523c-44a0-b3de-33a9cca43d3b.png", alt: "Slide 4" },
  { src: "https://hiboy.com.au/wp-content/uploads/2025/07/1-3_1.png", alt: "Slide 1" },
  { src: "https://hiboy.com.au/wp-content/uploads/2025/07/5_5cff1aaa-8c5f-4cba-b07e-c04deb981698.jpg", alt: "Slide 2" },
  { src: "https://hiboy.com.au/wp-content/uploads/2025/07/1-4_1.png", alt: "Slide 3" },
  { src: "https://hiboy.com.au/wp-content/uploads/2025/07/12_e3fa35d8-523c-44a0-b3de-33a9cca43d3b.png", alt: "Slide 4" },
  { src: "https://hiboy.com.au/wp-content/uploads/2025/07/1-3_1.png", alt: "Slide 1" },
  { src: "https://hiboy.com.au/wp-content/uploads/2025/07/5_5cff1aaa-8c5f-4cba-b07e-c04deb981698.jpg", alt: "Slide 2" },
  { src: "https://hiboy.com.au/wp-content/uploads/2025/07/1-4_1.png", alt: "Slide 3" },
  { src: "https://hiboy.com.au/wp-content/uploads/2025/07/12_e3fa35d8-523c-44a0-b3de-33a9cca43d3b.png", alt: "Slide 4" },

];
const banner = [
  { src: "https://hiboy.com.au/wp-content/uploads/2025/07/hiboy-slider-1.png", alt: "banner1" },
  { src: "https://hiboy.com.au/wp-content/uploads/2025/07/hiboy-slider-2.png", alt: "banner2" },
  { src: "https://hiboy.com.au/wp-content/uploads/2025/07/hiboy-slider-3.png", alt: "banner3" },

]

const section3Images = [
  {
    id: 1,
    desc: 'Hiboy S2 Max Urban Commute Electric Scooter',
    price: '$1,299.00',
    src: "https://hiboy.com.au/wp-content/uploads/2025/08/C1-530x525.jpg", alt: "Slide 1"
  },
  {
    id: 2,
    desc: 'Hiboy S2 Max Urban Commute Electric Scooter',
    price: '$1,299.00',
    src: "https://hiboy.com.au/wp-content/uploads/2025/06/S2Max.png", alt: "Slide 2"
  },
  {
    id: 3,
    desc: 'Hiboy S2 Max Urban Commute Electric Scooter',
    price: '$1,299.00',
    src: "https://hiboy.com.au/wp-content/uploads/2025/08/C1-530x525.jpg", alt: "Slide 3"
  },
  {
    id: 4,
    desc: 'Hiboy S2 Max Urban Commute Electric Scooter',
    price: '$1,299.00',
    src: "https://hiboy.com.au/wp-content/uploads/2025/06/S2-530x544.png", alt: "Slide 4"
  },
  {
    id: 5,
    desc: 'Hiboy S2 Max Urban Commute Electric Scooter',
    price: '$1,299.00',
    src: "https://hiboy.com.au/wp-content/uploads/2025/06/Max-Pro-1.png", alt: "Slide 1"
  },
  {
    id: 6,
    desc: 'Hiboy S2 Max Urban Commute Electric Scooter',
    price: '$1,299.00',
    src: "https://hiboy.com.au/wp-content/uploads/2025/08/C1-530x525.jpg", alt: "Slide 3"
  },
  {
    id: 7,
    desc: 'Hiboy S2 Max Urban Commute Electric Scooter',
    price: '$1,299.00',
    src: "https://hiboy.com.au/wp-content/uploads/2025/06/S2-530x544.png", alt: "Slide 4"
  },
  {
    id: 8,
    desc: 'Hiboy S2 Max Urban Commute Electric Scooter',
    price: '$899.00',
    src: "https://hiboy.com.au/wp-content/uploads/2025/06/Max-Pro-1.png", alt: "Slide 1"
  },
  {
    id: 9,
    desc: 'Hiboy S2 Max Urban Commute Electric Scooter',
    price: '$1,299.00',
    src: "https://hiboy.com.au/wp-content/uploads/2025/08/C1-530x525.jpg", alt: "Slide 3"
  },
  {
    id: 10,
    desc: 'Hiboy S2 Max Urban Commute Electric Scooter',
    price: '$1,299.00',
    src: "https://hiboy.com.au/wp-content/uploads/2025/06/S2-530x544.png", alt: "Slide 4"
  },
  {
    id: 11,
    desc: 'Hiboy S2 Max Urban Commute Electric Scooter',
    price: '$1,299.00',
    src: "https://hiboy.com.au/wp-content/uploads/2025/06/Max-Pro-1.png", alt: "Slide 1"
  },

];

function MainHomePage() {
  return (
    <div className={style.mainHomepage}>
      <Banner images={banner} />
      <Section1 />
      <Section2 />
      <Section3 images={section3Images} />
      <Section4 />
      <Section5/>
      <div className="container mx-auto py-10 height-100vh">
        <ImageCarousel images={images} />
      </div>
      <InfoHighlights />
    </div>
  )
}

export default MainHomePage;