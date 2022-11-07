import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = ({ Storage, setStorage }) => {
  const styles = {
    border: `1px solid ${Storage}`,
    color: `${Storage}`,
  };

  return (
    <div className="Navbar">
      <div className="Navbar-icons">
        <NavLink to="/">
          <i class="fa-solid fa-house" style={styles}></i>
        </NavLink>
        <NavLink to="/projects">
          <i class="fa-regular fa-folder-open" style={styles}></i>
        </NavLink>
        <NavLink to="/Certificates">
          <i class="fa-sharp fa-solid fa-graduation-cap" style={styles}></i>
        </NavLink>
        <NavLink to="/Contact">
          <i class="fa-solid fa-phone" style={styles}></i>
        </NavLink>
        <label htmlFor="color">
          <i
            class="fa-sharp fa-solid fa-palette"
            htmlFor="color"
            style={styles}
          ></i>
        </label>
        <input
          type="color"
          id="color"
          onChange={(e) => setStorage(e.target.value)}
        />
      </div>
    </div>
  );
};

export default Navbar;
