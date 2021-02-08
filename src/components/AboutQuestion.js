import React from "react";
import Toggle from "../components/Toggle";
import { Link } from "react-router-dom";
import { AnimateSharedLayout } from "framer-motion";

const AboutQuestions = () => {
  return (
    <section>
      <div className="about-me">
        <AnimateSharedLayout>
          <Toggle title="Why Employ Me?">
            <div className="answer">
              <p>
                I will make a great fit into any team as I have good
                communication skills and like to think I can get along with
                anyone. I am a firm believer in working hard in order to achieve
                what you want from life and won't slack off. I would consider
                myself a go-getter who takes pride in the work I do, so I can be
                relied on to complete high quality projects. I can work
                effectively within teams or alone, so won't have any issues
                regarding how I may need to work.
              </p>
            </div>
          </Toggle>

          <Toggle title="What Technologies?">
            <div className="answer">
              <p>
                Since graduating University I have made it my goal to learn new
                tech so I can stay relevant in the industry, so far I have
                improved on my JavaScript programming, learned the ReactJS
                library, touched on NodeJS, improved my Python programming and
                some of MongoDB NoSQL. I am now spending my time improving on my
                networking knowledge and eventually plan to become certified
                within AWS and other cloud services.
              </p>
            </div>
          </Toggle>

          <Toggle title="Goals In Life?">
            <div className="answer">
              <p>
                My main goals in life right now are to continue
                learning/improving on new technologies in the hopes of one day
                becoming a specialist within them, as well as becoming employed
                within a field that I desire to work in, justifying all my hard
                work throughout University. My long term vision would either be
                being in charge of my own team, managing staff and being the
                project manager for the tasks I undertake or becoming an IT
                consultant helping businesses build and secure their networks.
              </p>
            </div>
          </Toggle>
          <Toggle title="How To Get In Touch?">
            <div className="answer">
              <p>
                You can either visit the{" "}
                <Link to="/contact" style={{ color: "cyan" }}>
                  Contact
                </Link>{" "}
                page and fill out the form or click my email here at{" "}
                <a
                  href="mailto:kairoberts97@hotmail.co.uk"
                  rel="noreferrer noopener nofollow"
                  style={{ color: "cyan" }}
                >
                  kairoberts97@hotmail.co.uk
                </a>{" "}
                to set up an email with me. I will usually respond within the
                day.
              </p>
            </div>
          </Toggle>
        </AnimateSharedLayout>
      </div>
    </section>
  );
};

export default AboutQuestions;
