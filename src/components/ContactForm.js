import React, { useContext, useState } from "react";
import emailjs from "emailjs-com";
import AlertContext from "../context/alertContext";
import Alert from "./Alert";

const ContactForm = () => {
  const alertContext = useContext(AlertContext);
  const [text] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    if (text === "") {
      alertContext.setAlert("Message Sent");
    }
    emailjs
      .sendForm(
        "service_uylzqu7",
        "outlook_template",
        e.target,
        "user_eGGN8mAzPC10UVSag7A5o"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <form onSubmit={onSubmit}>
      <div className="form-container">
        <label htmlFor="name">Name:</label>
        <input id="name" type="text" autoComplete="off" name="name" required />

        <label htmlFor="email">Email:</label>
        <input
          id="email"
          type="text"
          autoComplete="off"
          name="email"
          required
        />

        <label htmlFor="subject">Subject:</label>
        <input
          id="subject"
          type="text"
          autoComplete="off"
          name="subject"
          required
        />

        <label htmlFor="message">Message:</label>
        <textarea id="message" name="message" required />
        <Alert />
        <div className="btn-container">
          <button className="button3" id="contact-btn" type="submit">
            Send Message
          </button>
        </div>
      </div>
    </form>
  );
};

export default ContactForm;
