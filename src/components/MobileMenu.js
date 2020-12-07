import React from "react";
import { useLocation, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { AiOutlineLinkedin, AiFillGithub, AiOutlineHome } from "react-icons/ai";
import { RiMessage2Line } from "react-icons/ri";
import { BsClipboardData } from "react-icons/bs";
import { Twirl as Hamburger } from "hamburger-react";

export const MobileMenu = ({ menuStatus, setMenuStatus }) => {
  const { pathname } = useLocation();

  // const preventScroll = () => {
  //   document.body.style.overflow = "hidden";
  // };

  return (
    <>
      <div className="mobile-icon" onClick={() => setMenuStatus(!menuStatus)}>
        <Hamburger
          color="white"
          toggled={menuStatus}
          toggle={() => setMenuStatus(!menuStatus)}
        />
      </div>

      <div
        className={`menu-container ${
          menuStatus ? "menu-container-active" : " "
        }`}
      >
        <div className="menu">
          <div onClick={() => setMenuStatus(!menuStatus)}>
            <Link to="/">
              <AiOutlineHome className="menu-icons" /> Home
            </Link>
            <motion.div
              transition={{ duration: 0.75 }}
              initial={{ width: "0%" }}
              animate={{ width: pathname === "/" ? "40%" : "0%" }}
              className="line1"
            ></motion.div>
          </div>
          <div onClick={() => setMenuStatus(!menuStatus)}>
            <Link to="/projects">
              <BsClipboardData className="menu-icons" /> Projects
            </Link>
            <motion.div
              transition={{ duration: 0.75 }}
              initial={{ width: "0%" }}
              animate={{ width: pathname === "/projects" ? "40%" : "0%" }}
              className="line2"
            ></motion.div>
          </div>
          <div onClick={() => setMenuStatus(!menuStatus)}>
            <Link to="/contact">
              <RiMessage2Line className="menu-icons" /> Contact
            </Link>
            <motion.div
              transition={{ duration: 0.75 }}
              initial={{ width: "0%" }}
              animate={{ width: pathname === "/contact" ? "40%" : "0%" }}
              className="line3"
            ></motion.div>
          </div>
        </div>
        <div className="mobile-socials">
          <a href="https://www.linkedin.com/in/kairobertss" className="icons">
            <AiOutlineLinkedin size={45} />
          </a>
          <a href="https://github.com/kairoberts" className="icons">
            <AiFillGithub size={45} />
          </a>
        </div>
      </div>
    </>
  );
};

export default MobileMenu;
