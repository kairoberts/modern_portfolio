import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { WorkState } from "../WorkState";
import { motion } from "framer-motion";
import { pageAnimations } from "../Animations";
import { Fade } from "react-awesome-reveal";

const WorkDetails = () => {
  const history = useHistory();
  const url = history.location.pathname;
  const [working] = useState(WorkState);
  const [work, setWork] = useState(null);

  useEffect(() => {
    const currentWork = working.filter((workState) => workState.url === url);
    setWork(currentWork[0]);
  }, [working, url]);
  return (
    <>
      {work && (
        <motion.section
          variants={pageAnimations}
          initial="hidden"
          animate="show"
        >
          <div className="details">
            <h2>{work.name}</h2>
            <div className="question-line"></div>
            <img src={work.mainImg} alt={work.title} className="work-image" />
          </div>
          <Fade direction="in" duration="2000" triggerOnce>
            <h2 className="learning">What I Learnt</h2>
            <div className="learnt">
              {work.learnt.map((work) => (
                <Learnt
                  title={work.title}
                  description={work.description}
                  key={work.title}
                />
              ))}
            </div>
          </Fade>
          <h2 className="gallery">Image Gallery</h2>
          <Fade direction="in" duration="2000" triggerOnce>
            <div className="image-container">
              <img
                src={work.mainImg}
                alt={work.title}
                className="image-array"
              />
              <img
                src={work.mainImg}
                alt={work.title}
                className="image-array"
              />
              <img
                src={work.mainImg}
                alt={work.title}
                className="image-array"
              />
              <img
                src={work.mainImg}
                alt={work.title}
                className="image-array"
              />
              <img
                src={work.mainImg}
                alt={work.title}
                className="image-array"
              />
              <img
                src={work.mainImg}
                alt={work.title}
                className="image-array"
              />
            </div>
          </Fade>
        </motion.section>
      )}
      ;
    </>
  );
};

const Learnt = ({ description, title }) => {
  return (
    <div className="learnt-style">
      <h3>{title}</h3>
      <p>{description}</p>
      <div className="question-line"></div>
    </div>
  );
};

export default WorkDetails;
