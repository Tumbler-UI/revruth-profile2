import React from "react";
import { Link } from "react-scroll";
import "./Navbar.css";
import profileImg from "../Images/revruth2.jpg"; 

const Navbar = () => {
  

 

  return (
    <>
      <div className="navbar">
        <div className="nav-top">
          <div className="nav-profile" style={{ flex: 1 }}>
            <img src={profileImg} alt="profile" />
          </div>
          <div className="nav-text" style={{ flex: 2 }}>
            <h1>Rev. Ruth Muita</h1>
            <h3>Transforming lives through Faith and Counselling</h3>
          </div>
        </div>

        <div className="nav-bottom">
          <ul className="nav-links">
            <li>            
               <Link to="about" smooth={true} duration={500} className="nav-link">Her-Journey</Link>
            </li>
            <li> 
            <Link to="services" smooth={true} duration={500} className="nav-link">Counsel&Care</Link>
            </li>
            <li>
            <Link to="gallery" smooth={true} duration={500} className="nav-link">Gallery</Link>
            </li>
          </ul>
        </div>
      </div>

      
    </>
  );
};

export default Navbar;

