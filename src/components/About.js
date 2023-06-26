import React from "react";
import { ScrollTop, Wave } from "../components/Stuff";
import { motion } from "framer-motion";
import { fadeIn, lineAnimation } from "../Animations";

const About = () => {
  return (
    <motion.section
      variants={fadeIn}
      initial="hidden"
      animate="show"
      className="container"
      id="about"
    >
      <div className="title-container">
        <Wave />
        <h2>About</h2>
        <motion.div
          variants={lineAnimation}
          className="question-line"
        ></motion.div>
      </div>
      <ScrollTop />
      <div className="info-container">
        <h2>Kai Roberts - Web Developer</h2>
        <div className="content-message">
          <p>
            I'm a budding Front-End Web Developer based out of Newcastle upon
            Tyne, England, with a passion for creating visually appealing
            minimalistic websites. Although I may not have a wealth of
            experience under my belt, I have a strong understanding of
            programming languages such as HTML, CSS, and JavaScript. I
            constantly keep up-to-date with the latest trends and technologies
            in the Web Development space and look forward to expanding my
            portfolio with creative web projects.
          </p>
        </div>
      </div>
    </motion.section>
  );
};

export default About;
