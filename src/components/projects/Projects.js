import React from "react";
import "./Projects.css";
import { motion } from "framer-motion/dist/framer-motion";
import { image } from "../../data";

const Projects = ({ Storage }) => {
  const styles = {
    boxShadow: `0px 0px 9px ${Storage}`,
    border: `1px solid ${Storage}`,
  };
  const Show = {
    offscreen: {
      opacity: 0,
      y: 100,
    },
    onscreen: {
      opacity: 1,
      y: 0,
    },
  };
  return (
    <div className="Projects">
      <h1 className="Projects-title">My Projects</h1>
      {image.map(({ title, id, desc, code, visit }) => (
        <div className="Projects-main" key={id}>
          <motion.div
            style={styles}
            className="Projects-detals"
            variants={Show}
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true }}
          >
            <h3 className="Projects-detals-title">{title}</h3>
            <p className="Projects-desc">{desc}</p>
            <div className="Projects-word">
              <a href={code} target="blank" className="Projects-code">
                <div className="Projects-code">
                  <h4>Code</h4>
                  <i class="fa-solid fa-code" style={{ color: Storage }}></i>
                </div>
              </a>
              <a href={visit} target="blank" className="Projects-code">
                <div className="Projects-code">
                  <h4>Visit</h4>
                  <i
                    class="fa-solid fa-up-right-from-square"
                    style={{ color: Storage }}
                  ></i>
                </div>
              </a>
            </div>
          </motion.div>
        </div>
      ))}
    </div>
  );
};

export default Projects;
