import React from "react";
import { useLocation, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { AiOutlineLinkedin, AiFillGithub } from "react-icons/ai";

export const MobileMenu = ({ menuStatus, setMenuStatus }) => {
  const { pathname } = useLocation();

  return (
    <div
      className={`menu-container ${menuStatus ? "menu-container-active" : " "}`}
    >
      <div className="menu">
        <div onClick={() => setMenuStatus(!menuStatus)}>
          <Link to="/">About</Link>
          <motion.div
            transition={{ duration: 0.75 }}
            initial={{ width: "0%" }}
            animate={{ width: pathname === "/" ? "40%" : "0%" }}
            className="line1"
          ></motion.div>
        </div>
        <div onClick={() => setMenuStatus(!menuStatus)}>
          <Link to="/projects">Projects</Link>
          <motion.div
            transition={{ duration: 0.75 }}
            initial={{ width: "0%" }}
            animate={{ width: pathname === "/projects" ? "40%" : "0%" }}
            className="line2"
          ></motion.div>
        </div>
        <div onClick={() => setMenuStatus(!menuStatus)}>
          <Link to="/contact">Contact</Link>
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
  );
};

export default MobileMenu;
