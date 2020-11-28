import React, { useState } from "react";
import { GrNext, GrPrevious } from "react-icons/gr";

const Carousel = ({ alt, image, image1, image2, image3, image4, image5 }) => {
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

export default Carousel;
