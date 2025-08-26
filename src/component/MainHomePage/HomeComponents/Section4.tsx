import React from 'react'
import style from "../mainpage.module.css";

const Section4 = () => {
    return (
        <div className={style.section4main}>
            <video width="100%" height="100%" controls autoPlay muted loop>
                <source src="https://hiboy.com.au/wp-content/uploads/2025/07/WhatsApp-Video-2025-07-19-at-15.11.30.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
        </div>
    )
}

export default Section4
