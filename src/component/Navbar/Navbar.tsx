import React from 'react'
import style from "./Navbar.module.css";
import { RiSearch2Line } from "react-icons/ri";
import { FaUser } from "react-icons/fa6";
import { RiShoppingCart2Line } from "react-icons/ri";
import { MdOutlineArrowDropDown } from "react-icons/md";
import Image from 'next/image';
import Link from 'next/link';

function Navbar() {
  return (
    <div className={style.header}>
      <div className={style.nav}>
        <div className={style.navImg}>
          <Image src="https://hiboy.com.au/wp-content/uploads/2025/06/hiboy.svg" alt="navimg" />
        </div>
        <div className={style.navitem}>
          <ul>
            <li><Link href="/">Electric Scooters</Link></li>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/">Electric Bikes</Link></li>
            <li><Link href="/">Support</Link></li>
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