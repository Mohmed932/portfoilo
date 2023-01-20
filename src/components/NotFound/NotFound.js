import React from "react";
import "./NotFound.css";
import image from "../assest/404-error.svg";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const NotFound = () => {
  return (
    <motion.div
      className="NotFound"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <img src={image} alt="404" />
      <h3>This requested URL was not found on this server.</h3>
      <Link to="/">
        <button className="btn">Return Home</button>
      </Link>
    </motion.div>
  );
};

export default NotFound;
