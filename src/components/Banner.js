import React from "react";
import { Link } from "react-router-dom";
import newcastle from "../images/newcastle.jpg";
import cv from "../file/KaiRobertsCV.pdf";
import {
  AiOutlineInstagram,
  AiOutlineLinkedin,
  AiFillGithub,
} from "react-icons/ai";
import { Link as ScrollLink } from "react-scroll";

const Banner = () => {
  return (
    <section className="banner-image">
      <img src={newcastle} alt="Newcastle upon Tyne" className="banner-image" />
      <div className="title">
        <div className="hide">
          <h2>Aspiring Full Stack Developer</h2>
        </div>
        <div className="flex-item">
          <a href="https://www.instagram.com/_kairoberts" className="icons">
            <AiOutlineInstagram size={45} />
          </a>
          <a href="https://www.linkedin.com/in/kairobertss" className="icons">
            <AiOutlineLinkedin size={45} />
          </a>
          <a href="https://github.com/kairoberts" className="icons">
            {" "}
            <AiFillGithub size={45} />
          </a>
        </div>
        <Link to="/contact">
          <button variant="outline-light" className="btn-container">
            Get In Touch
          </button>
        </Link>

        <button className="btn-container" href={cv} download="KaiRobertsCV">
          Download CV
        </button>
      </div>
      <ScrollLink to="about" spy={true} smooth={true} duration={600}>
        <div className="scroll-arrow">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </ScrollLink>
    </section>
  );
};

export default Banner;
