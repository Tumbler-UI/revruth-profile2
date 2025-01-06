import React from "react";
import "./Navbar.css";

const Navbar = () => (
  <nav className="navbar">
    <ul className="nav-links">
      <li><a href="#profile">Profile</a></li>
      <li><a href="#ministerial">Ministry</a></li>
      <li><a href="#education">Education</a></li>
      <li><a href="#contact">Contact</a></li>
    </ul>
  </nav>
);

export default Navbar;