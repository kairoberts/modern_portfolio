import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { pageAnimations, lineAnimation, fadeIn } from "../Animations";
import { ScrollTop, Carousel, Wave } from "../components/Stuff";
import { IoIosArrowBack } from "react-icons/io";

const WorkDetails = ({ working }) => {
  const location = useLocation();
  const url = location.pathname;
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
          <div className="title-container">
            <motion.div variants={fadeIn} className="back-btn">
              <Link to="/projects">
                <IoIosArrowBack size={35} />
              </Link>
            </motion.div>
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
              <p>{work.description}</p>
              <div className="btncontainer">
                <a
                  href={work.buttonUrl}
                  target="_blank"
                  rel="noreferrer noopener nofollow"
                  className="button1"
                >
                  Visit Website
                </a>
                <br className="mobile-break" />
              </div>
            </div>
          </div>
          {/* <div className="learnt">
            {work.learnt.map((learnt) => (
              <Learnt
                key={learnt.id}
                title={learnt.title}
                description={learnt.description}
              />
            ))}
          </div> */}
          <h2 className="gallery">Gallery</h2>
          <div className="img-container">
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

// const Learnt = ({ description, title, id }) => {
//   return (
//     <div key={id} className="learnt-style">
//       <h3>{title}</h3>
//       <p>{description}</p>
//       <div className="question-line"></div>
//     </div>
//   );
// };

export default WorkDetails;
