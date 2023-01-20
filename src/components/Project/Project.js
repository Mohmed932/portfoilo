import React from "react";
import "./Project.css";
import { data } from "../Data";
import { motion } from "framer-motion";

const Project = () => {
  return (
    <motion.div
      className="Project"
      id="four"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
    >
      <h1>
        MY PROJECTS WHILE <span>STUDYING</span>
      </h1>
      <div className="main-Project">
        {data.map(({ id, title, code, visit, desc }) => (
          <motion.div
            className="only-Project"
            key={id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.1 }}
          >
            <div className="Project-frist">
              <h5>{title}</h5>
              <p className="Project-desc">{desc}</p>
            </div>
            <div className="Project-secound">
              <a href={code} target="blank">
                Code
              </a>
              <a href={visit} target="blank">
                Demo
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Project;
