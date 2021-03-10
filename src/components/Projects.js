import React from "react";
import ScrollTop from "./ScrollTop";
import Work from "./Work";
import { motion } from "framer-motion";
import { fadeIn, lineAnimation } from "../Animations";

const Projects = ({ working }) => {
  return (
    <>
      {working && (
        <motion.section
          variants={fadeIn}
          initial="hidden"
          animate="show"
          id="projects"
        >
          <ScrollTop />
          <div className="work-container">
            <h2>My Work</h2>
            <motion.div
              variants={lineAnimation}
              className="question-line"
            ></motion.div>
          </div>
          <div className="image-container">
            {working.map((work) => (
              <Work
                title={work.title}
                image={work.mainImg}
                key={work.id}
                url={work.url}
              />
            ))}
          </div>
        </motion.section>
      )}
    </>
  );
};

export default Projects;
