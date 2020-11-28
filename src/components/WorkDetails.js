import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { motion } from "framer-motion";
import { pageAnimations, lineAnimation } from "../Animations";
import ScrollTop from "./ScrollTop";
import Carousel from "./Carousel";
import Wave from "./Wave";

const WorkDetails = ({ working }) => {
  const history = useHistory();
  const url = history.location.pathname;
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
          <ScrollTop />
          <div className="work-container">
            <h2>{work.name}</h2>
            <motion.div
              variants={lineAnimation}
              className="question-line"
            ></motion.div>
            <Wave />
          </div>
          <div className="details">
            <img src={work.mainImg} alt={work.title} className="detail-image" />
            <div className="details-container">
              <p className="content-message">{work.description}</p>
              <button className="buttons">
                <a
                  href="https://kr-old-portfolio.netlify.app"
                  target="_blank"
                  rel="noreferrer noopener nofollow"
                >
                  Visit Page
                </a>
              </button>
            </div>
          </div>
          <h2 className="learning">What Did I Learn?</h2>
          <div className="learnt">
            {work.learnt.map((learnt) => (
              <Learnt
                key={learnt.id}
                title={learnt.title}
                description={learnt.description}
              />
            ))}
          </div>
          <h2 className="gallery">Image Gallery</h2>
          <div className="image-container">
            {work.pictures.map((picture) => (
              <Carousel
                key={picture.id}
                alt={picture.alt}
                image={picture.image}
                image1={picture.image1}
                image2={picture.image2}
                image3={picture.image3}
                image4={picture.image4}
                image5={picture.image5}
              />
            ))}
          </div>
        </motion.section>
      )}
    </>
  );
};

const Learnt = ({ description, title, id }) => {
  return (
    <div key={id} className="learnt-style">
      <h3>{title}</h3>
      <p>{description}</p>
      <div className="question-line"></div>
    </div>
  );
};

export default WorkDetails;
