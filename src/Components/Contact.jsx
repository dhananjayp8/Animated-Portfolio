import React from "react";
import { FaWhatsapp } from "react-icons/fa";

import { CiFacebook } from "react-icons/ci";
import { CiLinkedin } from "react-icons/ci";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaGithubSquare } from "react-icons/fa";
import { CgMail } from "react-icons/cg";

const Contact = () => {
  return (
    <>
      <div className="container contact" id="contact">
        <div
          className="contact-icon"
          data-aos="zoom-in-up"
          data-aos-duration="1000"
        >
          {/* <h1 className=" heading">CONTACT ME</h1> */}
          <a
            href="https://wa.me/+919860687657"
            target="_blank"
            className="items"
          >
            <FaWhatsapp className="icons" />
          </a>
          <a
            href="https://www.linkedin.com/in/dhananjaypuranik05/"
            target="_blank"
            className="items"
          >
            <CiLinkedin className="icons" />
          </a>
          <a
            href="https://github.com/dhananjayp8"
            target="_blank"
            className="items"
          >
            <FaGithubSquare className="icons" />
          </a>
          <a
            href="mailto:dhananjaypuranik8@gmail.com"
            target="_blank"
            className="items"
          >
            <CgMail className="icons" />
          </a>
        </div>
        <p className="heading footer">Made with &#9829; by Dhananjay!</p>
      </div>
    </>
  );
};

export default Contact;
