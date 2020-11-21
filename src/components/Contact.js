import React from "react";
import Wave from "./Wave";
import { motion } from "framer-motion";
import { fadeIn } from "../Animations";

const Contact = () => {
  return (
    <motion.section variants={fadeIn} initial="hidden" animate="show">
      <div className="work-container">
        <Wave />
        <h2>Get In Touch</h2>
        <div className="question-line"></div>
      </div>
    </motion.section>
  );
};

export default Contact;
