import React, { useEffect, useState } from "react";
import "./Home.css";
import image from "../assest/logo.svg";
import pdf from "../assest/Mohmed Mahmoud Fouad.pdf";
import { motion } from "framer-motion";

const Home = () => {
  const name = "Mohmed Mahmoud";
  const [number, setNumber] = useState(1);
  useEffect(() => {}, [number]);
  setTimeout(() => setNumber(number + 1), 200);
  if (number > name.length) {
    setNumber(name.length);
  }
  const [PageY, setPageY] = useState();
  const [PageX, setPageX] = useState();
  window.onmouseover = (e) => {
    setPageY(e.pageY / 15);
    setPageX(e.pageX / 15);
  };
  return (
    <motion.div className="Home" id="one">
      <motion.div
        className="cricle cricle-one"
        whileInView={{ opacity: 1, scale: 1.3, y: PageY, x: PageX }}
        initial={{ opacity: 0, y: 20 }}
        transition={{ duration: 1.2 }}
      ></motion.div>
      <motion.div
        className="cricle cricle-two"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, scale: 1.3, y: PageY, x: PageX }}
        transition={{ duration: 1.8 }}
      ></motion.div>
      <motion.div
        className="cricle cricle-three"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, scale: 1.3, y: PageY, x: PageX }}
        transition={{ duration: 1 }}
      ></motion.div>
      <div className="Home-word">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          Hi, I’m {""}
          <span>{name.slice(0, number)}</span>
        </motion.h1>
        <motion.h3
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          Front End developer working for make sense in home
        </motion.h3>
        <motion.div
          className="Home-icon"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          <a
            href={pdf}
            alt="pdf Mohmed Mahmoud Fouad"
            download="Mohmed Mahmoud Fouad"
            onClick={() => this.click()}
          >
            <button className="btn">Download Cv</button>
          </a>
        </motion.div>
      </div>
      <div className="Home-img">
        <motion.img
          src={image}
          alt="Programing"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
        />
      </div>
    </motion.div>
  );
};

export default Home;
