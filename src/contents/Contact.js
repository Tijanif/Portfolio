import React, { Component } from "react";
import Social from "../components/Social";
import cv from "./Tijani-Fulani-cv.pdf";

class Contact extends Component {
  render() {
    return (
      <div className="condiv">
        <h1 className="subtopic">Contact Me</h1>
        <h3>
          <a href="mailto:fulani07@gmail.com">Send me an Email</a>
        </h3>
        <h3>
          <a href={cv} target="_blank" rel="noopener noreferrer">
            Check out my CV.
          </a>
        </h3>
        <Social />
      </div>
    );
  }
}

export default Contact;
