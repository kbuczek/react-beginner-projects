import React from "react";
import Navbar from "../Navbar2";
import { Link } from "react-router-dom";
import "./Contact.css";

const Contact = () => {
  return (
    <main className="contact">
      <Navbar />
      <section className="contact-container">
        <h1>Contact Me</h1>
        <div className="contact-underline"></div>
        <article className="contact-article">
          <div>Please feel free to contact me via this email address: </div>
          <img src="./images/email.png" className="contact-email" alt="photo" />
        </article>
      </section>
    </main>
  );
};

export default Contact;
