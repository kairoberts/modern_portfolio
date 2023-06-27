import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlineHome } from "react-icons/ai";
import { RiMessage2Line } from "react-icons/ri";
import { BsClipboardData, BsPerson } from "react-icons/bs";
import { Twirl as Hamburger } from "hamburger-react";

export const MobileMenu = () => {
  const [menuStatus, setMenuStatus] = useState(false);

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
              <AiOutlineHome className="menu-icons" />
              <p className="menu-links">Home</p>
            </Link>
          </div>
          <div onClick={() => setMenuStatus(!menuStatus)}>
            <Link to="/about">
              <BsPerson className="menu-icons" />
              <p className="menu-links">About</p>
            </Link>
          </div>
          <div onClick={() => setMenuStatus(!menuStatus)}>
            <Link to="/projects">
              <BsClipboardData className="menu-icons" />
              <p className="menu-links">Projects</p>
            </Link>
          </div>
          <div onClick={() => setMenuStatus(!menuStatus)}>
            <Link to="/contact">
              <RiMessage2Line className="menu-icons" />
              <p className="menu-links">Contact</p>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default MobileMenu;
