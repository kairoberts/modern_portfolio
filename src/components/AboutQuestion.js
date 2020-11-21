import React from "react";
import Toggle from "../components/Toggle";
import { AnimateSharedLayout } from "framer-motion";
import { Fade } from "react-awesome-reveal";

const AboutQuestions = () => {
  return (
    <section>
      <Fade direction="in" duration="2000" triggerOnce>
        <div className="about-me">
          <AnimateSharedLayout>
            <Toggle title="Why Employ Me?">
              <div className="answer">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Neque, deserunt nemo, vel ab quaerat quod sequi dolore dicta
                  obcaecati, eveniet Lorem ipsum dolor sit amet consectetur
                  adipisicing elit. Neque, deserunt nemo, vel ab quaerat quod
                  sequi dolore dicta obcaecati, eveniet Lorem ipsum dolor sit
                  amet consectetur adipisicing elit. Neque, deserunt nemo, vel
                  ab quaerat quod sequi dolore dicta obcaecati, eveniet Lorem
                  ipsum dolor sit amet consectetur adipisicing elit. Neque,
                  deserunt nemo, vel ab quaerat quod sequi dolore dicta
                  obcaecati, eveniet
                </p>
              </div>
            </Toggle>

            <Toggle title="Plans For The Future?">
              <div className="answer">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Neque, deserunt nemo, vel ab quaerat quod sequi dolore dicta
                  obcaecati, eveniet Lorem ipsum dolor sit amet consectetur
                  adipisicing elit. Neque, deserunt nemo, vel ab quaerat quod
                  sequi dolore dicta obcaecati, eveniet Lorem ipsum dolor sit
                  amet consectetur adipisicing elit. Neque, deserunt nemo, vel
                  ab quaerat quod sequi dolore dicta obcaecati, eveniet Lorem
                  ipsum dolor sit amet consectetur adipisicing elit. Neque,
                  deserunt nemo, vel ab quaerat quod sequi dolore dicta
                  obcaecati, eveniet
                </p>
              </div>
            </Toggle>

            <Toggle title="Goals In Life?">
              <div className="answer">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Neque, deserunt nemo, vel ab quaerat quod sequi dolore dicta
                  obcaecati, eveniet Lorem ipsum dolor sit amet consectetur
                  adipisicing elit. Neque, deserunt nemo, vel ab quaerat quod
                  sequi dolore dicta obcaecati, eveniet Lorem ipsum dolor sit
                  amet consectetur adipisicing elit. Neque, deserunt nemo, vel
                  ab quaerat quod sequi dolore dicta obcaecati, eveniet Lorem
                  ipsum dolor sit amet consectetur adipisicing elit. Neque,
                  deserunt nemo, vel ab quaerat quod sequi dolore dicta
                  obcaecati, eveniet
                </p>
              </div>
            </Toggle>

            <Toggle title="How To Get In Touch?">
              <div className="answer">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Neque, deserunt nemo, vel ab quaerat quod sequi dolore dicta
                  obcaecati, eveniet Lorem ipsum dolor sit amet consectetur
                  adipisicing elit. Neque, deserunt nemo, vel ab quaerat quod
                  sequi dolore dicta obcaecati, eveniet Lorem ipsum dolor sit
                  amet consectetur adipisicing elit. Neque, deserunt nemo, vel
                  ab quaerat quod sequi dolore dicta obcaecati, eveniet Lorem
                  ipsum dolor sit amet consectetur adipisicing elit. Neque,
                  deserunt nemo, vel ab quaerat quod sequi dolore dicta
                  obcaecati, eveniet
                </p>
              </div>
            </Toggle>
          </AnimateSharedLayout>
        </div>
      </Fade>
    </section>
  );
};

export default AboutQuestions;
