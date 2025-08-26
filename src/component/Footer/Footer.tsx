import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      
      <div className={styles.footerBox}>
        <div className={styles.footerRow}>
          {/* Left Section */}
          <div className={styles.footerCol}>
            <Link href="https://hiboy.com.au/" className={styles.logo}>
              <Image
                src="https://hiboy.com.au/wp-content/uploads/2025/06/hiboy.svg"
                alt="hiboy"
                width={120}
                height={40}
              />
            </Link>
            <p className={styles.description}>
              Kimberley Innovation Pty Ltd acknowledges the Traditional Owners
              of the Lands and pays respect to Elders past and present.
              <span className={styles.flags}>
                <Image
                  src="https://hiboy.com.au/wp-content/uploads/2025/08/Australian_Aboriginal_Flag.svg"
                  alt="Australian Aboriginal Flag"
                  width={30}
                  height={20}
                />
                <Image
                  src="https://hiboy.com.au/wp-content/uploads/2025/08/Torres_Strait_Islanders_Flag.svg"
                  alt="Torres Strait Islander Flag"
                  width={30}
                  height={20}
                />
              </span>
            </p>
          </div>

          {/* Our Products */}
          <div className={styles.footerCol}>
            <h3 className={styles.title}>Our Products</h3>
            <ul className={styles.list}>
              <li>
                <Link href="https://hiboy.com.au/product/s2-electric-scooter-with-seat/">
                  S2 E-scooter
                </Link>
              </li>
              <li>
                <Link href="https://hiboy.com.au/product/hiboy-s2-pro-electric-scooter-for-commuting/">
                  S2 Pro E-scooter
                </Link>
              </li>
              <li>
                <Link href="https://hiboy.com.au/product/hiboy-s2-max-electric-scooter/">
                  S2 MAX E-scooter
                </Link>
              </li>
              <li>
                <Link href="https://hiboy.com.au/product/hiboy-max-pro-electric-scooter/">
                  MAX Pro E-scooter
                </Link>
              </li>
              <li>
                <Link href="https://hiboy.com.au/product/hiboy-c1-folding-electric-bike-for-adult-commuter/">
                  C1 Folding Ebike
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div className={styles.footerCol}>
            <h3 className={styles.title}>Support</h3>
            <ul className={styles.list}>
              <li>
                <Link href="https://hiboy.com.au/blog/">Blog</Link>
              </li>
              <li>
                <Link href="https://hiboy.com.au/about-us/">About Us</Link>
              </li>
              <li>
                <Link href="https://hiboy.com.au/contact-us/">Contact Us</Link>
              </li>
              <li>
                <Link href="https://hiboy.com.au/shipping-policy/">
                  Shipping Policy
                </Link>
              </li>
              <li>
                <Link href="https://hiboy.com.au/warranty-policies/">
                  Warranty Policy
                </Link>
              </li>
              <li>
                <Link href="https://hiboy.com.au/privacy-policy/">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="https://hiboy.com.au/terms-conditions/">
                  Terms & Conditions
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className={styles.bottom}>
        <p>
          © 2025,{" "}
          <Link href="https://hibootstrap.com/" className={styles.company}>
            Kimberley Innovation Pty Ltd
          </Link>{" "}
          All Rights Reserved.
        </p>
        <div className={styles.payment}>
          <Image
            src="https://hiboy.com.au/wp-content/uploads/2025/08/mastercard.svg"
            alt="Mastercard"
            width={40}
            height={24}
          />
          <Image
            src="https://hiboy.com.au/wp-content/uploads/2025/08/paypal.svg"
            alt="Paypal"
            width={40}
            height={24}
          />
          <Image
            src="https://hiboy.com.au/wp-content/uploads/2025/08/visa.svg"
            alt="Visa"
            width={40}
            height={24}
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
