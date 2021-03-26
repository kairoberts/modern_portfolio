import React from "react";
import kai from "../images/kairob.png";
// import { AiFillHtml5, AiFillDatabase } from "react-icons/ai";
// import { IoLogoPython, IoLogoJavascript } from "react-icons/io";
// import { FaNode, FaNetworkWired, FaSass, FaGit, FaReact } from "react-icons/fa";
// import { SiArduino } from "react-icons/si";
import ScrollTop from "../components/ScrollTop";
import Wave from "./Wave";

const About = () => {
  return (
    <section className="about" id="about">
      <Wave />
      <ScrollTop />
      <div className="content-info">
        <img src={kai} alt="Kai Roberts" className="image" />
        <div className="info-container">
          <p className="content-message">
            Currently employed and not in the market
          </p>
          {/* <h2>Kai Roberts</h2>
          <h3>
            2017 – 2020 BSc (Hons) Computer Science (2:1 – 68%), York St. John
            University
          </h3> */}

          {/* <div className="skills-container">
            <h3>Areas of Knowledge:</h3>
            <div className="skill">
              <FaNetworkWired size={50} />
              <p>Networks</p>
            </div>
            <div className="skill">
              <IoLogoPython size={50} />
              <p>Python</p>
            </div>
            <div className="skill">
              <AiFillHtml5 size={50} />
              <p>HTML</p>
            </div>
            <div className="skill">
              <FaSass size={50} />
              <p>Css/Sass</p>
            </div>
            <div className="skill">
              <IoLogoJavascript size={50} />
              <p>JavaScript</p>
            </div>
            <div className="skill">
              <FaReact size={50} />
              <p>ReactJS</p>
            </div>
            <div className="skill">
              <FaNode size={50} />
              <p>NodeJS</p>
            </div>
            <div className="skill">
              <SiArduino size={50} />
              <p>Arduino</p>
            </div>
            <div className="skill">
              <AiFillDatabase size={50} />
              <p>Databases</p>
            </div>
            <div className="skill">
              <FaGit size={50} />
              <p>Version Control</p>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default About;
