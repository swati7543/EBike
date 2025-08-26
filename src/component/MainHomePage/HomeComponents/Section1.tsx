import React from 'react'
import style from "../mainpage.module.css";
import Image from 'next/image';
function Section1() {
  return (
    <div className={style.parentdiv}>
      <div className={style.imgdiv}>
        <Image src="https://hiboy.com.au/wp-content/uploads/2025/06/maxpro_11.jpg" alt="" width={100} height={100}/>
      </div>
      <div className={style.textdiv}>
        <h2>Our Story</h2>
        <p>Hiboy is dedicated to blending the best of the past with the innovations of today. Our goal is not just to provide efficient urban transportation but to reignite the simple pleasures of navigating your town.</p>
        <button>Read More</button>
      </div>
    </div>
  )
}

export default Section1