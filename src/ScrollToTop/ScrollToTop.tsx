"use client";

import { useState, useEffect } from "react";
import { IoMdArrowUp } from "react-icons/io";
import style from "./scrolltotop.module.css";
export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.scrollY > 300) { // 300px scroll hone ke baad dikhega
      setVisible(true);
    } else {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    visible && (
      <button
        onClick={scrollToTop}
        // style={{
        //   position: "fixed",
        //   bottom: "20px",
        //   right: "20px",
        //   backgroundColor: "#00497c",
        //   color: "#fff",
        //   border: "none",
        //   borderRadius: "50%",
        //   width: "50px",
        //   height: "50px",
        //   display: "flex",
        //   alignItems: "center",
        //   justifyContent: "center",
        //   boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
        //   cursor: "pointer",
        //   zIndex: 1000,
        // }}
        className={style.scrollToTopButton}
        aria-label="Scroll to top"
      >
        <IoMdArrowUp size={24} />
      </button>
    )
  );
}
