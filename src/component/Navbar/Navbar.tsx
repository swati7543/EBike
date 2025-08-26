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
            <li><Link href="/">Home</Link></li>
            <li><Link href="/">Electric Scooters</Link></li>
            <li><Link href="/">Electric Bikes</Link></li>
            <li className={style.dropdownParent}>
              <Link href="/" className={style.linkWrapper}>
                Support
                <span className={style.dropdownIcon}>
                  <MdOutlineArrowDropDown />
                </span>
              </Link>
              <div className={style.dropdown}>
                <div className={style.dropdownItem}>
                  <Link href="/">Blog</Link>
                </div>
                <div className={style.dropdownItem}>
                  <Link href="/">About Us</Link>
                </div>
                <div className={style.dropdownItem}>
                  <Link href="/">Contact Us</Link>
                </div>
                <div className={style.dropdownItem}>
                  <Link href="/">Shipping Policy</Link>
                </div>
                <div className={style.dropdownItem}>
                  <Link href="/">Warranty Policy</Link>
                </div>
                <div className={style.dropdownItem}>
                  <Link href="/">Privacy Policy</Link>
                </div>
                <div className={style.dropdownItem}>
                  <Link href="/">Terms & Conditions</Link>
                </div>
              </div>

            </li>
          </ul>
        </div>
        <div className={style.navSearchIcons}>
          <div className={style.navInput}>
            <input type="text" placeholder="Search Bikes, Gear & Accessories" />
            <RiSearch2Line className={style.searchIcon} />
          </div>
          <div className={style.navIcons}>
            <FaUser className='navIcons' style={{ marginRight: '1.5rem' }} />
            <RiShoppingCart2Line className='navIcons' />
          </div>

        </div>
      </div>
    </div>
  )
}

export default Navbar