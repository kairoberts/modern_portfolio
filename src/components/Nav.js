import React, { useState } from "react";
import logo from "../images/logo.png";
import { animateScroll as scroll } from "react-scroll";
import { IoIosArrowDropup } from "react-icons/io";
import { motion } from "framer-motion";
import { useLocation, Link } from "react-router-dom";
import { Twirl as Hamburger } from "hamburger-react";

const Nav = ({ menuStatus, setMenuStatus }) => {
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

  const preventScroll = () => {
    document.body.style.overflow = "hidden";
  };

  return (
    <>
      <IoIosArrowDropup
        className={button ? "scroll-btn" : "scroll-btn active"}
        onClick={() => scroll.scrollToTop()}
      />
      <header className={nav ? "nav active" : "nav"}>
        <div className="mobile-menu" onClick={() => setMenuStatus(!menuStatus)}>
          <Hamburger
            color="white"
            toggled={menuStatus}
            toggle={() => setMenuStatus(!menuStatus)}
          />
        </div>
        <Link exact to="/">
          <img src={logo} alt="KR Web Development" className="logo" />
        </Link>

        <ul>
          <li>
            <Link exact to="/">
              About
            </Link>
            <motion.div
              transition={{ duration: 0.75 }}
              initial={{ width: "0%" }}
              animate={{ width: pathname === "/" ? "40%" : "0%" }}
              className="line"
            ></motion.div>
          </li>
          <li>
            <Link to="/projects">Projects</Link>
            <motion.div
              transition={{ duration: 0.75 }}
              initial={{ width: "0%" }}
              animate={{
                width: pathname === "/projects" ? "40%" : "0%",
              }}
              className="line"
            ></motion.div>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
            <motion.div
              transition={{ duration: 0.75 }}
              initial={{ width: "0%" }}
              animate={{ width: pathname === "/contact" ? "40%" : "0%" }}
              className="line"
            ></motion.div>
          </li>
        </ul>
      </header>
    </>
  );
};

export default Nav;
