import React from "react";
import { GiShakingHands } from "react-icons/gi";
import { AiOutlineClockCircle } from "react-icons/ai";
import { GiFist } from "react-icons/gi";
import { BsPen } from "react-icons/bs";

const Design = () => {
  return (
    <section>
      <div className="design-container">
        <div className="design-icons">
          <BsPen size={80} className="design-icon" />
          <h2>Resilient</h2>
        </div>

        <div className="design-icons">
          <GiShakingHands size={80} className="design-icon" />
          <h2>Trustworthy</h2>
        </div>

        <div className="design-icons">
          <AiOutlineClockCircle size={80} className="design-icon" />
          <h2>Go-Getter</h2>
        </div>

        <div className="design-icons">
          <GiFist size={80} className="design-icon" />
          <h2>Motivational</h2>
        </div>
      </div>
    </section>
  );
};

export default Design;
