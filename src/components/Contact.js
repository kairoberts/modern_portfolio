import React from "react";
import { Wave } from "../components/Stuff";
import { motion } from "framer-motion";
import { fadeIn, lineAnimation } from "../Animations";
import ContactForm from "./ContactForm";

const Contact = () => {
  return (
    <motion.section
      variants={fadeIn}
      initial="hidden"
      animate="show"
      className="container"
    >
      <div className="title-container">
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
