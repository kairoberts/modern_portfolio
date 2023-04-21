import React from "react";
import { Link } from "react-router-dom";
import newcastle from "../images/newcastle.jpg";
import { AiOutlineLinkedin } from "react-icons/ai";
import { motion } from "framer-motion";
import { BsChevronDoubleDown } from "react-icons/bs";
import { Link as ScrollLink } from "react-scroll";
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
      <img src={newcastle} alt="Newcastle upon Tyne" className="banner-image" />
      <div className="title">
        <div className="hide">
          <motion.h2 variants={titleAnimation}>Kai Roberts</motion.h2>
          <motion.h1 variants={titleAnimation}>Web Developer</motion.h1>
        </div>
        <div className="hide">
          <motion.div variants={titleAnimation} className="socials">
            <a href="https://www.linkedin.com/in/kai-roberts">
              <AiOutlineLinkedin size={45} />
            </a>
          </motion.div>
        </div>
        <div className="hide">
          <motion.div className="btn-container" variants={titleAnimation}>
            <Link to="/contact">
              <button className="buttons">Get In Touch</button>
            </Link>
          </motion.div>
        </div>
      </div>
      <ScrollLink to="about-me" spy={true} smooth={true} duration={700}>
        <div className="scroll-arrow">
          <BsChevronDoubleDown size={50} />
        </div>
      </ScrollLink>
    </motion.section>
  );
};

export default Banner;
