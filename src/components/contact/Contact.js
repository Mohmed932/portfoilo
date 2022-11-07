import React from "react";
import "./Contact.css";
import { motion } from "framer-motion/dist/framer-motion";
import Mohmed from "../../img/Mohmed.jpg";
import PDF from "../../img/_ Mahmed mahmoud Fouad (1).pdf";

const Contact = ({ Storage }) => {
  const styles = { color: Storage };
  const Animation = {
    hidden: {
      opacity: 0,
      y: 900,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
      },
    },
  };
  const Animationdelay5 = {
    hidden: {
      opacity: 0,
      y: 900,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        delay: 0.5,
      },
    },
  };
  const Animationdelay10 = {
    hidden: {
      opacity: 0,
      y: 900,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        delay: 0.7,
      },
    },
  };
  return (
    <div className="Contact">
      <motion.h1
        variants={Animation}
        initial="hidden"
        animate="visible"
        className="Contect-title"
      >
        The Stage is Yours
      </motion.h1>
      <motion.p
        variants={Animationdelay5}
        initial="hidden"
        animate="visible"
        className="Contect-desc"
      >
        I’m always looking to collaborate on interesting projects with great
        people. Need a supportive hand?
      </motion.p>
      <motion.div
        variants={Animationdelay10}
        initial="hidden"
        animate="visible"
        className="Contact-detales"
        style={{ boxShadow: `0px 0px 9px ${Storage}` }}
      >
        <img className="Contact-image" src={Mohmed} />
        <h1>Mohmed Mahmoud</h1>
        <p>Front-End Developer</p>
        <div className="Contact-me">
          <button className="btn" style={{ border: `1px solid ${Storage}` }}>
            <a
              href="https:wa.me/+201157068530"
              target="blank"
              style={{ color: "#fff", textDecoration: "none" }}
            >
              Whatsapp
            </a>
          </button>
          <button className="btn" style={{ border: `1px solid ${Storage}` }}>
            <a
              href={PDF}
              download
              target="blank"
              onClick={() => this.click()}
              style={{ color: "#fff", textDecoration: "none" }}
            >
              Download CV
            </a>
          </button>
        </div>
        <div className="scoial">
          <a
            href="https://www.facebook.com/Anamohmed135"
            target="blank"
            style={styles}
          >
            <i class="fa-brands fa-facebook-f"></i>
          </a>
          <a
            href="https://twitter.com/Anamohmed00"
            target="blank"
            style={styles}
          >
            <i class="fa-brands fa-twitter"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/mohmedmahmoudfouad"
            target="blank"
            style={styles}
          >
            <i class="fa-brands fa-linkedin-in"></i>
          </a>
          <a href="https://github.com/Mohmed932" target="blank" style={styles}>
            <i class="fa-brands fa-github"></i>
          </a>
        </div>
      </motion.div>
    </div>
  );
};

export default Contact;
