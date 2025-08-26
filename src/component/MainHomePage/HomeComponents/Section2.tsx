"use client"
import Image from 'next/image'
import React from 'react'
import style from "../mainpage.module.css";
import CountUp from 'react-countup';

const stats = [
  {
    img: "https://hiboy.com.au/wp-content/uploads/2025/07/cycle1.png",
    count: "579724",
    suffix: "+",
    desc: "Active Riders",
  },
  {
    img: "https://hiboy.com.au/wp-content/uploads/2025/07/CO2-Reduction1.png",
    count: "201401400",
    suffix: " lb",
    desc: "CO2 Reduction",
  },
  {
    img: "https://hiboy.com.au/wp-content/uploads/2025/07/reviews1-1.png",
    count: "10501",
    suffix: "+",
    desc: "5-Star Reviews",
  },
  {
    img: "https://hiboy.com.au/wp-content/uploads/2025/07/Reviews1.png",
    count: "251751750",
    suffix: " Miles",
    desc: "Distance",
  },
];

const Section2 = () => {
  return (
    <div className={style.section2main}>
      {stats.map((item, index) => (
        <div key={index} className={style.iconDesc}>
          <div className={style.section2ImgDiv}>
            <Image src={item.img} alt={item.desc} width={70} height={70} />
          </div>
          <div className={style.section2textDiv}>
            <span className={style.countSpan}>
              <CountUp 
                start={0} 
                end={parseInt(item.count)} 
                duration={3} 
                separator="," 
                suffix={item.suffix} 
              />
            </span>
            <p className={style.desc}>{item.desc}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Section2
