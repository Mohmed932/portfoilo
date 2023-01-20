import React from "react";
import "./About.css";
import { motion } from "framer-motion";

const About = () => {
  return (
    <motion.div
      className="mainAbout"
      id="two"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
    >
      <h1 className="ABOUT">
        ABOUT <span>AND</span> SKILLS
      </h1>
      <div className="About">
        <motion.div
          className="About-more"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="About-line">
            ABOUT<span></span>
          </div>
          <div className="About-word">
            <h1>Front End Web Developer</h1>
            <p>
              I am quite well in HTML, CSS, JS and REACTJS. I am very extremely
              passionate about my work. I also enjoy learning new things and
              technologies. I keep a good coding practice, keep things
              organized, and stick to all coding guidelines. Also, I offer
              support after delivery, so if you require minor changes after
              delivery, I can accommodate you. I am seeking long-term projects.
            </p>
            <div className="About-personal">
              <i class="fa-solid fa-arrow-right"></i>
              <span>Birthday:25 may 2003</span>
            </div>
            <div className="About-personal">
              <i class="fa-solid fa-arrow-right"></i>
              <span>Phone: +201157068530</span>
            </div>
            <div className="About-personal">
              <i class="fa-solid fa-arrow-right"></i>
              <span>City: Egypt Sharqiah Abu Kabir</span>
            </div>
            <div className="About-personal">
              <i class="fa-solid fa-arrow-right"></i>
              <span>Email: mohmedmahmoudfouad@gmail.com</span>
            </div>
            <div className="About-personal">
              <i class="fa-solid fa-arrow-right"></i>
              <span>Freelance: Available</span>
            </div>
            <p>
              For the past four months, I've been designing and developing
              look-alike websites. Throughout this journey, I learned a lot of
              things about creating an awesome websites that meets the needs of
              the real businesses.
            </p>
          </div>
        </motion.div>
        <motion.div
          className="About-skilis"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
        >
          <div className="About-line">
            SKILLS<span></span>
          </div>
          <div className="skilis">
            <div className="skilis-number">
              <span>html</span>
              <span>100%</span>
            </div>
            <div className="skilis-speed">
              <motion.span
                className="only-skilis"
                whileInView={{ width: "100%" }}
                transition={{ duration: 1.1 }}
              ></motion.span>
            </div>
          </div>
          <div className="skilis">
            <div className="skilis-number">
              <span>css</span>
              <span>90%</span>
            </div>
            <div className="skilis-speed">
              <motion.span
                className="only-skilis"
                whileInView={{ width: "90%" }}
                transition={{ duration: 1.1 }}
              ></motion.span>
            </div>
          </div>
          <div className="skilis">
            <div className="skilis-number">
              <span>javascript</span>
              <span>85%</span>
            </div>
            <div className="skilis-speed">
              <motion.span
                className="only-skilis"
                whileInView={{ width: "85%" }}
                transition={{ duration: 1.1 }}
              ></motion.span>
            </div>
          </div>
          <div className="skilis">
            <div className="skilis-number">
              <span>react js</span>
              <span>95%</span>
            </div>
            <div className="skilis-speed">
              <motion.span
                className="only-skilis"
                whileInView={{ width: "95%" }}
                transition={{ duration: 1.1 }}
              ></motion.span>
            </div>
          </div>
          <div className="skilis">
            <div className="skilis-number">
              <span>rest api</span>
              <span>75%</span>
            </div>
            <div className="skilis-speed">
              <motion.span
                className="only-skilis"
                whileInView={{ width: "75%" }}
                transition={{ duration: 1.1 }}
              ></motion.span>
            </div>
          </div>
          <div className="skilis">
            <div className="skilis-number">
              <span>git</span>
              <span>83%</span>
            </div>
            <div className="skilis-speed">
              <motion.span
                className="only-skilis"
                whileInView={{ width: "83%" }}
                transition={{ duration: 1.1 }}
              ></motion.span>
            </div>
          </div>
          <div className="skilis">
            <div className="skilis-number">
              <span>fremer motion</span>
              <span>79%</span>
            </div>
            <div className="skilis-speed">
              <motion.span
                className="only-skilis"
                whileInView={{ width: "79%" }}
                transition={{ duration: 1.1 }}
              ></motion.span>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default About;
