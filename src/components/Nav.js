import React, { useState } from "react";
import logo from "../images/logo.png";
import { animateScroll as scroll } from "react-scroll";
import { Link } from "react-router-dom";
import { IoIosArrowDropup } from "react-icons/io";

const Nav = () => {
  const [nav, setNav] = useState(false);
  const [button, setButton] = useState(true);

  const changeBackground = () => {
    if (window.scrollY >= 200) {
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
          <img src={logo} alt="KR Web Development" className="logo" />
        </Link>
        <ul>
          <li>
            <Link to="/">About</Link>
          </li>
          <li>
            <Link to="/work">Work</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </header>
    </>
  );
};

export default Nav;
