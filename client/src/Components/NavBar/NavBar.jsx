import React, { useState } from "react";
import "./NavBar.css";
import logo from "../Assets/logo_2.png";
import { IoCartOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

const NavBar = () => {
  const [menu, setMenu] = useState("shop");

  return (
    <div className="navbar">
      <Link to="/">
        <div className="nav-logo">
          <img src={logo} style={{ height: "60px" }} alt="" />
          {/* <p>SnapShop</p> */}
        </div>
      </Link>
      <ul className="nav-menu">
        <li
          onClick={() => {
            setMenu("shop");
          }}
        >
          <Link to="/" style={{ textDecoration: "none", color: "white" }}>
            <p>Shop</p>
          </Link>{" "}
          {menu === "shop" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu("men");
          }}
        >
          <Link to="/mens" style={{ textDecoration: "none", color: "white" }}>
            <p>Men</p>
          </Link>{" "}
          {menu === "men" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu("women");
          }}
        >
          <Link to="/womens" style={{ textDecoration: "none", color: "white" }}>
            <p>women</p>
          </Link>{" "}
          {menu === "women" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu("kids");
          }}
        >
          <Link to="/Kids" style={{ textDecoration: "none", color: "white" }}>
            <p>Kids</p>
          </Link>{" "}
          {menu === "kids" ? <hr /> : <></>}
        </li>
      </ul>
      <div className="nav-login-cart">
        <Link to="/login">
          <button>Login</button>
        </Link>
        <Link to="/cart">
          <IoCartOutline
            className="nav-cart"
            size={45}
            style={{ textDecoration: "none", color: "white" }}
          />
        </Link>
        <div className="nav-cart-count">0</div>
      </div>
    </div>
  );
};

export default NavBar;
