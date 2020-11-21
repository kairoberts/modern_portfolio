import React from "react";
import { Link } from "react-router-dom";
import comingSoon from "../images/comingsoon.jpg";
import ScrollTop from "../components/ScrollTop";
import { motion } from "framer-motion";
import { fadeIn } from "../Animations";
import { Fade } from "react-awesome-reveal";

const Work = () => {
  return (
    <section>
      <motion.div
        className="work"
        variants={fadeIn}
        initial="hidden"
        animate="show"
      >
        <ScrollTop />
        <div className="work-container">
          <h2>Weather App</h2>
          <div className="question-line"></div>
          <Link to="/work/weather-app">
            <img src={comingSoon} alt="Weather App" className="work-image" />
          </Link>
        </div>
        <Fade direction="in" duration="2000" triggerOnce>
          <div className="work-container">
            <h2>Movie API</h2>
            <div className="question-line"></div>
            <Link to="/work/movie-api">
              <img src={comingSoon} alt="Weather App" className="work-image" />
            </Link>
          </div>
        </Fade>
        <Fade direction="in" duration="2000" triggerOnce>
          <div className="work-container">
            <h2>MERN Project</h2>
            <div className="question-line"></div>
            <Link to="/work/mern-project">
              <img src={comingSoon} alt="Weather App" className="work-image" />
            </Link>
          </div>
        </Fade>
      </motion.div>
    </section>
  );
};

export default Work;
