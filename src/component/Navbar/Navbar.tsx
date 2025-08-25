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
          <Image src="https://hiboy.com.au/wp-content/uploads/2025/06/hiboy.svg" alt="navimg" width={100} height={100} />
        </div>
        <div className={style.navitem}>
          <ul>
             <li><a href="/">Home</a></li>
            <li><a href="/">Electric Scooters</a></li>
            <li><a href="/">Electric Bikes</a></li>
            <li>
              <a href="/" className="navLink">
                Support <MdOutlineArrowDropDown className='dropIcon' />
              </a>
            </li>
          </ul>
        </div>
        <div className={style.navInput}>
          <input type="text" placeholder="Search Bikes, Gear & Accessories" />
          <RiSearch2Line className={style.searchIcon} />
        </div>
        <div className={style.navIcons}>
          <FaUser className='navIcons' style={{marginRight:'1rem'}}/>
          <RiShoppingCart2Line className='navIcons' />
        </div>
      </div>
    </div>
  )
}

export default Navbar