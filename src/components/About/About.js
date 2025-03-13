import React from "react";
import "./About.css";
import profileImg from "../Images/DEN_2912.JPG"; // Ensure this path is correct

const About = () => {
  return (
    <section id="about" className="about">
      <div className="about-text">
        <h2>Meet Rev. Ruth</h2>
        <p>Rev. Ruth Muita, a leader at ACK Syokimau, guides in faith, mental health, and youth mentorship.</p>
        <p><strong>Founder:</strong> Eremia Psychotherapy, 2024</p>
        <p><strong>Location:</strong> <a href='https://maps.app.goo.gl/GzqV7AvjwQpd1ipm7' >Office 210, Rosslyn Mall</a></p>
      </div>
      <div className="about-image">
        <img src={profileImg} alt="Rev. Ruth Muita" />
      </div>
    </section>
  );
};

export default About;
