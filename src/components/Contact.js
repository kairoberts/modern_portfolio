import React from "react";
import Wave from "./Wave";
import { motion } from "framer-motion";
import { fadeIn, lineAnimation } from "../Animations";
import ContactForm from "./ContactForm";

const Contact = () => {
  return (
    <motion.section variants={fadeIn} initial="hidden" animate="show">
      <div className="contact-container">
        <Wave />
        <h2>Get In Touch</h2>
        <motion.div
          variants={lineAnimation}
          className="question-line"
        ></motion.div>
        <ContactForm />
      </div>
    </motion.section>
  );
};

export default Contact;
