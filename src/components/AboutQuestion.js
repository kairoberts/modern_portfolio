import React from "react";
import { Toggle } from "../components/Stuff";
import { Link } from "react-router-dom";
import { AnimateSharedLayout } from "framer-motion";

const AboutQuestions = () => {
  return (
    <section className="aboutmecontainer">
      <div className="about-me">
        <AnimateSharedLayout>
          <Toggle title="Why do you need a website?">
            <div className="answer">
              <p>
                Having a website in 2023 is essential for any business to
                thrive, allowing you to establish an online presence and reach a
                wider audience beyond your immediate geographic location. It
                provides a 24/7 storefront for any products or services you are
                offering, allowing you to showcase whatever it may be you are
                wanting customers to see. You can be more personal by showing
                customers your brands story, communicating your value to them as
                well as improving your credibility and legitimacy, as businesses
                without websites may be seen as outdated or unprofessional,
                especially if other businesses within your space have their own.
              </p>
            </div>
          </Toggle>

          <Toggle title="What do I offer?">
            <div className="answer">
              <p>
                What I offer will vary from business to business depending on
                what is required for your website. However, this can include
                things such as, but not limited to, the designing and
                development of the website, creating custom logos for your
                website, the purchasing and adding of domain names, free to use
                or paid for hosting platforms, whether it need to be optimised
                for search engines and also if it is required to be compatible
                on mobile devices.
              </p>
            </div>
          </Toggle>

          <Toggle title="How To Get In Touch?">
            <div className="answer">
              <p>
                If you would like a free quote for your website, or just have
                any general questions you would like to ask me, you can either
                visit the{" "}
                <Link to="/contact" style={{ color: "cyan" }}>
                  Contact
                </Link>{" "}
                page and fill out the form or click my email here at{" "}
                <a
                  href="mailto:kairoberts97@hotmail.co.uk"
                  rel="noreferrer noopener nofollow"
                  style={{ color: "cyan" }}
                >
                  kai_roberts@icloud.com
                </a>{" "}
                to set up an email with me. I aim to respond within the day.
              </p>
            </div>
          </Toggle>
        </AnimateSharedLayout>
      </div>
    </section>
  );
};

export default AboutQuestions;
