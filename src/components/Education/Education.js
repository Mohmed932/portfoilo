import React from "react";
import "./Education .css";
import { motion } from "framer-motion";

const Education = () => {
  return (
    <motion.div
      className="Education"
      id="three"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
    >
      <h1>
        EDUCATION <span>AND</span> EXPERIENCE
      </h1>
      <div className="Education-container">
        <motion.div
          className="main-Education"
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="main">
            <span>Jun 2021</span>
            <h2>Front-End challenger Program in Front-End Web Development</h2>
            <p>
              I learned the basics of HTML5, CSS,,js and React js advanced CSS
              and some of Freelance concepts.
            </p>
          </div>
          <div className="main">
            <span>Nov 2021</span>
            <h2>
              Front-End Web Development Professional Nanodegree program program
            </h2>
            <p>
              I learned the basics of javascript and javascript DOM and more
              concepts about Freelance and did some Projects.
            </p>
          </div>
        </motion.div>
        <motion.div
          className="main-Education"
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="main">
            <span>september - november 2022</span>
            <h2>Intern with Udacity</h2>
            <p>
              I gained more experience from this internship through the projects
              I did while studying
            </p>
            <strong>
              <a
                href="https://graduation.udacity.com/confirm/SKF6TLDU"
                target="blank"
              >
                See The Certificate
              </a>

              <i class="fa-solid fa-arrow-up-right-from-square"></i>
            </strong>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Education;
