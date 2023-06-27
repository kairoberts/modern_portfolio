import React from "react";
import { ScrollTop, Wave } from "../components/Stuff";
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
          <div className="title-container">
            <Wave />
            <h2>Projects</h2>
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
                date={work.date}
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
