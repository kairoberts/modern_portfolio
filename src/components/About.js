import React from "react";
import kai from "../images/kairob.png";
import { AiFillHtml5 } from "react-icons/ai";
import { DiCss3 } from "react-icons/di";
import { FaSass } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { FaReact } from "react-icons/fa";
import { BsFillBootstrapFill } from "react-icons/bs";
import { SiPython } from "react-icons/si";
import { SiMysql } from "react-icons/si";
import { FaGit } from "react-icons/fa";

const About = () => {
  return (
    <section className="about" id="about">
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
            Tyne, England, I pride myself on hard work and always aiming to
            improve my skill set. I am currently in the process of self-teaching
            React where I am learning how to use things such as const, let,
            mapping, React Hooks, useState, useEffect, props, useRef, React
            Router and more within components and eventually, state management
            through useContext and Redux as well as Axios to work with APIs.
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
              <BsFillBootstrapFill size={50} />
              <p>Bootstrap</p>
            </div>
            <div className="skill">
              <SiPython size={55} />
              <p>Python</p>
            </div>
            <div className="skill">
              <SiMysql size={70} />
              <p>MySQL</p>
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
