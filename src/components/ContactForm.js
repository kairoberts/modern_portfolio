import React from "react";
import emailjs from "emailjs-com";

const contactForm = () => {
  function sendEmail(e) {
    e.preventDefault();
    emailjs
      .sendForm(
        "outlook",
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
  }

  return (
    <form onSubmit={sendEmail}>
      <div className="form-container">
        <label htmlFor="name">Name:</label>
        <input id="name" type="text" autoComplete="off" required />

        <label htmlFor="email">Email:</label>
        <input id="email" type="text" autoComplete="off" required />

        <label htmlFor="subject">Subject:</label>
        <input id="subject" type="text" autoComplete="off" required />

        <label htmlFor="message">Message:</label>
        <textarea id="message" required />

        <div className="btn-container">
          <button className="buttons" id="contact-btn" type="submit">
            Send Message
          </button>
        </div>
      </div>
    </form>
  );
};

export default contactForm;
