import React, { useState } from "react";
import { Link } from "react-scroll";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import "../css/navbar.css";
import "../css/responsive/navbar.css";
import logo from "../assets/images/logo.png";

const Navbar = () => {
  const [hamburger, setHamburger] = useState(false);

  return (
    <div className="navbar_container">
      {/* Hamburger button for Responsive Mode */}
      <div className="ham_button_cont">
        <button
          onClick={() => {
            setHamburger(!hamburger);
            console.log(hamburger);
          }}
          className={
            hamburger === true
              ? "hamburger_menu open_hamburger"
              : "hamburger_menu"
          }>
          <span className="ham_line_1"></span>
          <span className="ham_line_2"></span>
          <span className="ham_line_3"></span>
        </button>
      </div>

      {/* Page Clickable Logo */}
      <Link to="banner" className="logo">
        <img src={logo} alt="logo" />
      </Link>

      {/* Navbar */}

      <div
        className={
          hamburger === true ? "right_container right_resp" : "right_container"
        }>
        <nav className="nav_container">
          <Link
            to="https://www.youtube.com/watch?v=7wzuievFjrk&ab_channel=CodeWithAjesh"
            className="nav_item">
            Home
          </Link>
          <Link to="portfolio" className="nav_item">
            Portfolio
          </Link>
          <Link to="about" className="nav_item">
            About Us
          </Link>
          <Link to="contact" className="nav_item">
            Contact Us
          </Link>
        </nav>

        {/* Social Media Icons */}
        <div className="social_media_container">
          <Link to="">
            <FaFacebookF className="social_item" />
          </Link>
          <Link to="">
            <FaLinkedinIn className="social_item" />
          </Link>
          <Link to="">
            <FaTwitter className="social_item" />
          </Link>
          <Link to="">
            <FaYoutube className="social_item" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
