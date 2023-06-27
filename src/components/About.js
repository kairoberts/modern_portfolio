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
        <h2>Kai Roberts - Computer Science Graduate</h2>
        <div className="content-message">
          <p>
            This is my portfolio website which I created using ReactJS, it's
            purpose is to showcase some of the projects I will undertake in my
            spare time, mainly to keep up with recent technology trends as well
            as sharpening the skills I gained during University and allow any
            potential employers to view what I get up to. I plan to include a
            mixture of things from Front-End Development, Back-End Development,
            App Development, Networking, Automation and more. As well as any
            potential freelance websites which I build for clients on the side.
          </p>
        </div>
      </div>
    </motion.section>
  );
};

export default About;
