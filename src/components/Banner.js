import React from "react";
import { Link } from "react-router-dom";
import newcastle from "../images/newcastle.jpg";
import cv from "../file/KaiRobertsCV.pdf";
import { AiOutlineLinkedin, AiFillGithub } from "react-icons/ai";
import { Link as ScrollLink } from "react-scroll";
import { motion } from "framer-motion";
import { fadeIn, titleAnimation } from "../Animations";

const Banner = () => {
  return (
    <section>
      <motion.section
        variants={fadeIn}
        className="banner-image"
        initial="hidden"
        animate="show"
      >
        <img
          src={newcastle}
          alt="Newcastle upon Tyne"
          className="banner-image"
        />
        <div className="title">
          <div className="hide">
            <motion.h2 variants={titleAnimation}>
              Aspiring Full Stack Developer
            </motion.h2>
          </div>
          <div className="hide">
            <motion.div variants={titleAnimation} className="flex-item">
              <a
                href="https://www.linkedin.com/in/kairobertss"
                className="icons"
              >
                <AiOutlineLinkedin size={45} />
              </a>
              <a href="https://github.com/kairoberts" className="icons">
                <AiFillGithub size={45} />
              </a>
            </motion.div>
          </div>
          <div className="hide">
            <Link to="/contact">
              <motion.button
                variants={titleAnimation}
                className="btn-container"
              >
                Get In Touch
              </motion.button>
            </Link>
            <Link>
              <motion.button
                variants={titleAnimation}
                className="btn-container"
              >
                Download CV
              </motion.button>
            </Link>
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
    </section>
  );
};

export default Banner;
