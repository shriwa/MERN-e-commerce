import React from "react";
import "./Navbar.css";
import navLogo from "../../assets/nav-logo.svg";
import navProfile from "../../assets/nav-profile.svg";

const Navbar = () => {
  return (
    <div className="navbar">
      <div>
        <img src={navLogo} alt="" className="nav-logo" />
      </div>
      <div>
        <img src={navProfile} alt="" className="nav-profile" />
      </div>
    </div>
  );
};

export default Navbar;
