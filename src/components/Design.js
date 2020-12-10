import React from "react";
import { GiPencilBrush } from "react-icons/gi";
import { BsCodeSlash } from "react-icons/bs";
import { VscRocket } from "react-icons/vsc";
import { BsPen } from "react-icons/bs";

const Design = () => {
  return (
    <section>
      <div className="design-container">
        <div className="design-icons">
          <BsPen size={80} className="design-icon" />
          <h2>Plan</h2>
        </div>

        <div className="design-icons">
          <GiPencilBrush size={80} className="design-icon" />
          <h2>Design</h2>
        </div>

        <div className="design-icons">
          <BsCodeSlash size={80} className="design-icon" />
          <h2>Develop</h2>
        </div>

        <div className="design-icons">
          <VscRocket size={80} className="design-icon" />
          <h2>Deploy</h2>
        </div>
      </div>
    </section>
  );
};

export default Design;
