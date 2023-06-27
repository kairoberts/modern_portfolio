import React, { useState } from "react";
import { animateScroll as scroll } from "react-scroll";
import { IoIosArrowDropup } from "react-icons/io";
import { motion } from "framer-motion";
import { useLocation, Link } from "react-router-dom";

const Nav = () => {
  const [nav, setNav] = useState(false);
  const [button, setButton] = useState(true);
  const { pathname } = useLocation();

  const changeBackground = () => {
    if (window.scrollY >= 50) {
      setNav(true);
    } else {
      setNav(false);
    }
  };
  window.addEventListener("scroll", changeBackground);

  const hiddenButton = () => {
    if (window.scrollY >= 650) {
      setButton(false);
    } else {
      setButton(true);
    }
  };
  window.addEventListener("scroll", hiddenButton);

  return (
    <>
      <IoIosArrowDropup
        className={button ? "scroll-btn" : "scroll-btn active"}
        onClick={() => scroll.scrollToTop()}
      />
      <header className={nav ? "nav active" : "nav"}>
        <Link to="/">
          <p>K.R</p>
        </Link>

        <ul>
          <li>
            <Link to="/">Home</Link>
            <motion.div
              transition={{ duration: 0.75 }}
              initial={{ width: "0%" }}
              animate={{ width: pathname === "/" ? "58%" : "0%" }}
              className="line"
            ></motion.div>
          </li>
          <li>
            <Link to="/about">About</Link>
            <motion.div
              transition={{ duration: 0.75 }}
              initial={{ width: "0%" }}
              animate={{ width: pathname === "/about" ? "58%" : "0%" }}
              className="line"
            ></motion.div>
          </li>
          <li>
            <Link to="/projects">Projects</Link>
            <motion.div
              transition={{ duration: 0.75 }}
              initial={{ width: "0%" }}
              animate={{ width: pathname === "/projects" ? "52%" : "0%" }}
              className="line"
            ></motion.div>
          </li>
          <li>
            <Link to="/contact" id="contact">
              Contact
            </Link>
            <motion.div
              transition={{ duration: 0.75 }}
              initial={{ width: "0%" }}
              animate={{ width: pathname === "/contact" ? "53%" : "0%" }}
              className="line"
            ></motion.div>
          </li>
        </ul>
      </header>
    </>
  );
};

export default Nav;
