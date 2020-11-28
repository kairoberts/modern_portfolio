import React from "react";
import { Link } from "react-router-dom";
import ScrollTop from "./ScrollTop";

const Work = ({ title, image, url }) => {
  return (
    <div className="project">
      <ScrollTop />
      <Link to={url}>
        <h2>{title}</h2>
        <img src={image} alt={title} className="image-array" />
      </Link>
    </div>
  );
};

export default Work;
