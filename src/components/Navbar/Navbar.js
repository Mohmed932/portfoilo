import React, { Fragment, useState } from "react";
import "./Navbar.css";

import logo from "../assest/Mohmed.jpg";
const Navbar = () => {
  const word = ["Home", "About", "Education", "Project", "Contact"];
  const Number = ["one", "two", "three", "four", "five"];
  const [active, setActive] = useState(null);
  const [mobile, setMobile] = useState(false);
  const handelActive = ({ idx }) => {
    active === idx ? setActive(null) : setActive(idx);
    setMobile(false);
  };
  const div = word.map((i, idx) => (
    <Fragment key={idx}>
      <a
        href={`#${Number[idx]}`}
        onClick={() => handelActive({ idx })}
        className={active === idx ? "Navbar-active" : ""}
      >
        {i}
      </a>
    </Fragment>
  ));
  return (
    <div className="Navbar">
      <img src={logo} alt="MohMed" />
      <div className={mobile ? "Navbar-main mobile-show" : "Navbar-main"}>
        <img src={logo} alt="MohMed" />
        {div}
      </div>
      <div
        className={mobile ? "Navbar-mobile mobile-active" : "Navbar-mobile"}
        onClick={() => setMobile(!mobile)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  );
};

export default Navbar;
