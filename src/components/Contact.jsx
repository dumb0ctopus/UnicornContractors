import React from "react";
import "./contact.scss";
import { useRef } from "react";
import emailjs from "emailjs-com";

function Contact() {
  const refForm = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_wswz8yg",
        "template_65wbgmj",
        refForm.current,
        "hA4IoeSyrVgozKlYH"
      )
      .then(
        () => {
          alert("Message sent successfully");
          window.location.reload(false);
        },
        () => {
          alert("Failed to send message, please try again");
        }
      );
  };

  return (
    <div
      className="container px-4 lg:px-14 max-w-screen-2xl mx-auto py-16"
      id="contact"
    >
      <div className="text-zone">
        <p className="text-center text-4xl text-white mt-3">Chat With Us</p>
        <div className="contact-form">
          <form ref={refForm} onSubmit={sendEmail}>
            <ul>
              <li className="half">
                <input type="text" name="name" placeholder="Name" required />
              </li>
              <li className="half">
                <input type="email" name="email" placeholder="Email" required />
              </li>
              <li>
                <input
                  placeholder="Subject"
                  type="text"
                  name="subject"
                  required
                />
              </li>
              <li>
                <textarea
                  placeholder="Message"
                  name="message"
                  required
                ></textarea>
              </li>
              <li>
                <input type="submit" className="flat-button" value="SEND" />
              </li>
            </ul>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
