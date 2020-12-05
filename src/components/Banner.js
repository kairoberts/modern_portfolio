import React from "react";
import { Link } from "react-router-dom";
import newcastle from "../images/newcastle.jpg";
import mobilenewcastle from "../images/mobile-newcastle.jpg";
import cv from "../file/KaiRobertsCV.pdf";
import { AiOutlineLinkedin, AiFillGithub } from "react-icons/ai";
import { Link as ScrollLink } from "react-scroll";
import { motion } from "framer-motion";
import { fadeIn, titleAnimation } from "../Animations";

const Banner = () => {
  return (
    <motion.section
      variants={fadeIn}
      className="banner-image"
      id="mobile-image"
      initial="hidden"
      animate="show"
    >
      <img
        src={newcastle}
        alt="Newcastle upon Tyne"
        className="banner-image"
        id="main-image"
      />
      <img
        src={mobilenewcastle}
        alt="Newcastle upon Tyne"
        className="mobile-image"
      />
      <div className="title">
        <div className="hide">
          <motion.h2 variants={titleAnimation}>
            Aspiring Full Stack Developer
          </motion.h2>
        </div>
        <div className="hide">
          <motion.div variants={titleAnimation} className="flex-item">
            <a href="https://www.linkedin.com/in/kairobertss" className="icons">
              <AiOutlineLinkedin size={45} />
            </a>
            <a href="https://github.com/kairoberts" className="icons">
              <AiFillGithub size={45} />
            </a>
          </motion.div>
        </div>
        <div className="hide">
          <motion.div className="btn-container" variants={titleAnimation}>
            <Link to="/contact">
              <button className="buttons">Get In Touch</button>
            </Link>
            <br className="mobile-break" />
            <a className="buttons" href={cv} download="KaiRobertsCV">
              Download CV
            </a>
          </motion.div>
        </div>
      </div>
      <ScrollLink to="about" spy={true} smooth={true} duration={600}>
        <div className="scroll-arrow">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </ScrollLink>
    </motion.section>
  );
};

export default Banner;
