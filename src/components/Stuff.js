import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { BsChevronDown } from "react-icons/bs";
import { GrNext, GrPrevious } from "react-icons/gr";
import newcastle from "../images/newcastle.jpg";

//Unused image following mouse
export function FollowMouseImage() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    function handleMouseMove(event) {
      setPosition({ x: event.clientX, y: event.clientY });
    }
    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div style={{ position: "relative" }}>
      <img
        src={newcastle}
        alt="Follow Mouse"
        style={{
          position: "absolute",
          left: position.x,
          top: position.y,
        }}
      />
    </div>
  );
}

//Question Toggle button
export const Toggle = ({ children, title }) => {
  const [toggle, setToggle] = useState(false);
  return (
    <motion.div layout className="question" onClick={() => setToggle(!toggle)}>
      <motion.h2 layout className="question-h2">
        {title}
        {toggle === true ? (
          <BsChevronDown size={20} className="question-icon" />
        ) : (
          <BsChevronDown size={20} className="question-icon active" />
        )}
      </motion.h2>
      {toggle ? children : ""}
      <motion.div layout className="question-line"></motion.div>
    </motion.div>
  );
};

//Scroll Top Button
export const ScrollTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scroll({
      top: 0,
      left: 0,
    });
  }, [pathname]);
  return null;
};

//Carousel
export const Carousel = ({
  alt,
  image,
  image1,
  image2,
  image3,
  image4,
  image5,
}) => {
  const [x, setX] = useState(0);
  let carouselSlides = [
    <img src={image} alt={alt} className="img-container" />,
    <img src={image1} alt={alt} className="img-container" />,
    <img src={image2} alt={alt} className="img-container" />,
    <img src={image3} alt={alt} className="img-container" />,
    <img src={image4} alt={alt} className="img-container" />,
    <img src={image5} alt={alt} className="img-container" />,
  ];

  const goLeft = () => {
    x === 0 ? setX(-100 * (carouselSlides.length - 1)) : setX(x + 100);
  };

  const goRight = () => {
    x === -100 * (carouselSlides.length - 1) ? setX(0) : setX(x - 100);
  };

  return (
    <>
      <div className="carousel-container">
        {carouselSlides.map((item, index) => {
          return (
            <div
              key={index}
              className="carousel-slides"
              style={{ transform: `translateX(${x}%)` }}
            >
              {item}
            </div>
          );
        })}
        <button className="next" onClick={goRight} onDrag={goRight}>
          <GrNext size={40} />
        </button>
        <button className="prev" onClick={goLeft} onDrag={goLeft}>
          <GrPrevious size={40} />
        </button>
      </div>
    </>
  );
};

//Wave animation
export const Wave = () => {
  return (
    <svg
      className="svg-image"
      viewBox="0 0 1440 363"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <motion.path
        initial={{ pathLength: 0, pathOffset: 1 }}
        animate={{ pathLength: 1, pathOffset: 0 }}
        transition={{ duration: 2 }}
        d="M1440 27.4774C1352.73 19.8184 1122.41 49.0556 899.331 227.276C620.48 450.052 354.282 355.647 170.328 185.318C23.165 49.0556 -4.21721 8.32998 0.487081 5"
        stroke="#42e3ff"
        strokeOpacity="0.5"
        strokeWidth="10"
      />
    </svg>
  );
};
