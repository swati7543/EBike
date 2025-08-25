import React from 'react'
import style from "./Navbar.module.css";
import { RiSearch2Line } from "react-icons/ri";
import { FaUser } from "react-icons/fa6";
import { RiShoppingCart2Line } from "react-icons/ri";
import { MdOutlineArrowDropDown } from "react-icons/md";

function Navbar() {
  return (
    <div className={style.header}>
      <div className={style.nav}>
        <div className={style.navImg}>
          <img src="https://hiboy.com.au/wp-content/uploads/2025/06/hiboy.svg" alt="navimg" />
        </div>
        <div className={style.navitem}>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/">Electric Scooters</a></li>
            <li><a href="/">Electric Bikes</a></li>
            <li><a href="/">Support</a></li>
          </ul>
        </div>
        <h4>swati</h4>
        <div className={style.navInput}>
          <input type="text" placeholder="Search Bikes, Gear & Accessories" />
          <RiSearch2Line className={style.searchIcon} />
        </div>
        <div >
          <FaUser className='navIcons'/>
          <RiShoppingCart2Line className='navIcons'/>
        </div>
      </div>
    </div>
  )
}

export default Navbar