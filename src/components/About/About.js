import React from "react";
import "./About.css";
import profileImg from "../Images/DEN_2912.JPG"; // Ensure this path is correct

const About = () => {
  return (
    <section id="about" className="about">
      <div className="about-text">
        <h2>Meet Rev. Ruth Muita</h2>
        <p>
          Rev. Ruth Muita is an ordained Anglican priest in the Diocese of Machakos, currently serving at 
          <a href="https://maps.app.goo.gl/MxNhEuyFLCsMBMja7"> ACK St. Matthias Sabaki</a>. She is dedicated to transforming lives through faith, 
          mentorship, and counseling.
        </p>
        <p>
          <strong>Youth Ministry:</strong> Founder of Destiny Echoes Youth Ministry
        </p>
        <p>
          <strong>Counseling Services:</strong> Provides therapy at 
          <a href="https://maps.app.goo.gl/GzqV7AvjwQpd1ipm7" target="_blank" rel="noopener noreferrer">
            Eremia Counselling Centre, Rosslyn Mall, Office 210
          </a>
        </p>
      </div>
      <div className="about-image">
        <img src={profileImg} alt="Rev. Ruth Muita - Minister & Counselor" />
      </div>
    </section>
  );
};

export default About;

