import React from "react";
import kai from "../images/kairob.png";
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
          <h3>Technical Support Analyst - 1 Year 7 Months - Fully Remote</h3>
          <h3>
            2017 – 2020 BSc (Hons) Computer Science (2:1 – 68%), York St. John
            University
          </h3>
          <div className="content-message">
            <p>ITIL4 Certified</p>
            <br />
            <p>
              Can demonstrate a wide range of abilities across different areas
              such as trouble-shooting hardware and software, data uploads, data
              fixes, technical support, password resets and system usage support
              across multiple pieces of software.
            </p>
            <br />
            <p>
              Performing daily checks across multiple servers and web
              applications every morning and evening by checking log files,
              running SQL queries, checking scheduled tasks, creating reports
              and also emailing teams when things weren’t working properly.
            </p>
            <br />
            <p>
              Helping nurses over the phone to diagnose issues with their
              computers, such as, checking cables are correct, remoting into the
              computer to help uncover the issue, checking the IP address
              configurations, reading error logs, installing and/or updating
              Antivirus software, downloading MSI’s to update firewall rules and
              getting in touch with local IT when needing to have them whitelist
              IP addresses.
            </p>
            <br />
            <p>
              Document each ticket clearly and concisely as well as tracking
              them to allow faster resolution times.
            </p>
            <br />
            <p>
              Be the first point of contact for all incoming requests by email
              and phone and to accurately triage each ticket to the correct
              team.
            </p>
            <br />
            <p>
              Providing customers with confirmation emails to let them know
              their issue is being dealt with.
            </p>
            <br />
            <p>
              Creating easy to follow documents for other team members to use
              and learn from when nothing existed prior.
            </p>
            <br />
            <p>
              Training and developing new starters to where they can work
              independently without fault. Working within a timeframe to make
              sure SLAs were not breached.
            </p>
            <br />
            <p>
              Using SQL to extract data needed to update daily, weekly and
              monthly reports with the latest business figures for the
              management team.
            </p>
            <br />
            <p>Importing data provided by clients each month.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
