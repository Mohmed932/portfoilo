import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar/Navbar";

const Route = ({ Storage, setStorage }) => {
  return (
    <div className="Route">
      <Navbar Storage={Storage} setStorage={setStorage} />
      <Outlet />
    </div>
  );
};

export default Route;
