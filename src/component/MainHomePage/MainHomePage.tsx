import React from 'react'
import style from './mainpage.module.css';
import InfoHighlights from './HomeComponents/InfoHighlights/InfoHighlights';
import Section1 from './HomeComponents/Section1';


function MainHomePage() {
  return (
    <div className='style.mainHomepage'>
      <Section1/>
      <InfoHighlights />
    </div>
  )
}

export default MainHomePage;