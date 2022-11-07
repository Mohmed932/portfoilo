import React, { Fragment, useState } from "react";
import "./Certificates.css";
import { motion } from "framer-motion/dist/framer-motion";
import Mohmed from "../../img/Mohmed.jpg";

const Certificates = ({ Storage }) => {
  const [toggle, settoggle] = useState(null);
  const hendelToggle = (i) => {
    toggle === i ? settoggle(null) : settoggle(i);
  };
  const data = [
    {
      Quest: "Competitor certificate from Udacity",
      Answer:
        " Create and style web components, Position and display website elements, Debug HTML and CSS code,Build a responsive website layout Build a website using WordPress ",
    },
    {
      Quest: "React Nanodegree from Udacity",
      Answer: `Learn the essential parts of the React ecosystem that are
                essential to building production-ready applications, Managed to create modular and custom components that can be
                reused throughout your web application., Learn about React Routers and how to create multiple routes on
                your web application, making it more dynamic,  Learn about React lifecycle methods and how important they are
                to web application performance and speed.`,
    },
  ];
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
  const Animationdelay15 = {
    hidden: {
      opacity: 0,
      y: 900,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        delay: 0.9,
      },
    },
  };
  return (
    <Fragment>
      <div className="Certificates">
        <div className="Certificates-detales">
          <motion.h1
            className="Certificates-title"
            variants={Animation}
            initial="hidden"
            animate="visible"
          >
            Certificates
          </motion.h1>
          <motion.p
            className="Certificates-desc"
            variants={Animationdelay5}
            initial="hidden"
            animate="visible"
          >
            I attend many events such as the Egyptian Career Fair under the
            auspices of the Egyptian Ministry of Communications and I am working
            hard to increase my excellence
          </motion.p>
          <motion.img
            className="Certificates-image"
            variants={Animationdelay10}
            initial="hidden"
            animate="visible"
            src={Mohmed}
          />
        </div>
        <motion.div
          variants={Animationdelay15}
          initial="hidden"
          animate="visible"
          className="Certificates-cord"
        >
          {data.map(({ Quest, Answer }, i) => (
            <div className="items" key={i}>
              <div className="items-title" onClick={() => hendelToggle(i)}>
                <h1>{Quest}</h1>
                <span style={{ color: Storage }}>
                  {toggle === i ? "-" : "+"}
                </span>
              </div>
              <div
                className={
                  toggle === i ? "items-content show" : "items-content"
                }
              >
                <p>{Answer}</p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </Fragment>
  );
};

export default Certificates;
