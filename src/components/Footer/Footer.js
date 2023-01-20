import React from "react";
import { motion } from "framer-motion";

const Footer = () => {
  const style = {
    width: "100%",
    textAlign: "center",
    minHeight: "10vh",
    backgroundColor: "#0061f21c",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };
  return (
    <motion.div
      style={style}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h4>
        Created by <span style={{ color: "#0061f2" }}>Mohmed Mahmoud</span> |
        all rights reserved!
      </h4>
    </motion.div>
  );
};

export default Footer;
