import React from "react";
import kai from "../images/kairob.png";
import { AiFillHtml5 } from "react-icons/ai";
import { DiCss3, DiMongodb } from "react-icons/di";
import { FaSass } from "react-icons/fa";
import { IoLogoJavascript, IoLogoPython } from "react-icons/io";
import { FaReact } from "react-icons/fa";
import { BsFillBootstrapFill } from "react-icons/bs";
import { SiFlask } from "react-icons/si";
import { SiMysql } from "react-icons/si";
import { FaGit } from "react-icons/fa";
import { FaNode } from "react-icons/fa";
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
          <h2>Kai Roberts</h2>
          <h3>
            2017 – 2020 BSc (Hons) Computer Science (2:1 – 68%), York St. John
            University.
          </h3>
          <p className="content-message">
            I am a 23 year old Computer Science Graduate from Newcastle upon
            Tyne, England. I pride myself on hard work and always aiming to
            improve my skill set. Since graduating University I have made it my
            goal to keep up to date with current technologies in order to stay
            relevant within the industry. I am looking for employment in the
            following areas: Web Development, Python Programming, IT Analyst,
            Software Sales and IT Help Desk. If you would like to read more
            about my skills, download my CV above.
          </p>
          <div className="skills-container">
            <h3>My Skills:</h3>
            <div className="skill">
              <AiFillHtml5 size={55} />
              <p>HTML</p>
            </div>
            <div className="skill">
              <DiCss3 size={55} />
              <p>CSS</p>
            </div>
            <div className="skill">
              <FaSass size={55} />
              <p>Sass</p>
            </div>
            <div className="skill">
              <IoLogoJavascript size={55} />
              <p>JavaScript</p>
            </div>
            <div className="skill">
              <FaReact size={50} />
              <p>React</p>
            </div>
            <div className="skill">
              <FaNode size={50} />
              <p>Node</p>
            </div>
            <div className="skill">
              <BsFillBootstrapFill size={50} />
              <p>Bootstrap</p>
            </div>
            <div className="skill">
              <SiFlask size={55} />
              <p>Python Flask</p>
            </div>
            <div className="skill">
              <IoLogoPython size={55} />
              <p>Python</p>
            </div>
            <div className="skill">
              <SiMysql size={70} />
              <p>MySQL</p>
            </div>
            <div className="skill">
              <DiMongodb size={55} />
              <p>MongoDB</p>
            </div>
            <div className="skill">
              <FaGit size={50} />
              <p>Git</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
