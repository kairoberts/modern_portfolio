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
                communication skills and can get along with almost anyone. I am
                a firm believer in working hard in order to achieve what you
                want from life. I would consider myself a go-getter who takes
                pride in the work I do, so I can be relied on to complete high
                quality projects. I can work effectively within teams or alone,
                so won't have any issues regarding how I may need to work.
              </p>
            </div>
          </Toggle>

          <Toggle title="Why Web Development?">
            <div className="answer">
              <p>
                I had always enjoyed my Web Development modules during Uni,
                however, since I had other modules to complete, I could never
                fully immerse myself in it as I was always preoccupied with
                other tasks. It wasn't until I left Uni that my interest peaked,
                what was first a hobby soon turned into a passion and now I
                spend everyday behind a screen trying to improve my skillset
                with the aim to make it my career.
              </p>
            </div>
          </Toggle>

          <Toggle title="Goals In Life?">
            <div className="answer">
              <p>
                My main goal in life at the moment is to become a Full Stack
                Developer in charge of a team, working on all areas of the
                projects I undertake. I am currently in the process of improving
                my back-end knowledge, starting with Node.js and then eventually
                Python and/or PHP, as I aim to be confident in all areas of Web
                Development, in return allowing me to become an overall higher
                quality dev.
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
                page and fill out the form or simply click my email here at{" "}
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
