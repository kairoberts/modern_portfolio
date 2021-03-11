import React from "react";
import { Link } from "react-router-dom";
import ScrollTop from "./ScrollTop";

const Work = ({ title, image, url, date }) => {
  return (
    <div className="project">
      <ScrollTop />
      <Link to={url}>
        <img src={image} alt={title} className="image-array" />
      </Link>
      <h2>{title}</h2>
      <p>{date}</p>
    </div>
  );
};

export default Work;
