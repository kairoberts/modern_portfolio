import React from "react";
import { useLocation, Link } from "react-router-dom";
import { motion } from "framer-motion";

export const MobileMenu = ({ menuStatus, setMenuStatus }) => {
  const { pathname } = useLocation();

  return (
    <div
      className={`menu-container ${menuStatus ? "menu-container-active" : " "}`}
    >
      <div className="menu">
        <p onClick={() => setMenuStatus(!menuStatus)}>
          <Link exact to="/">
            About
          </Link>
          <motion.div
            transition={{ duration: 0.75 }}
            initial={{ width: "0%" }}
            animate={{ width: pathname === "/" ? "40%" : "0%" }}
            className="line1"
          ></motion.div>
        </p>
        <p onClick={() => setMenuStatus(!menuStatus)}>
          <Link to="/projects">Projects</Link>
          <motion.div
            transition={{ duration: 0.75 }}
            initial={{ width: "0%" }}
            animate={{ width: pathname === "/projects" ? "40%" : "0%" }}
            className="line2"
          ></motion.div>
        </p>
        <p onClick={() => setMenuStatus(!menuStatus)}>
          <Link to="/contact">Contact</Link>
          <motion.div
            transition={{ duration: 0.75 }}
            initial={{ width: "0%" }}
            animate={{ width: pathname === "/contact" ? "40%" : "0%" }}
            className="line3"
          ></motion.div>
        </p>
      </div>
    </div>
  );
};

export default MobileMenu;
