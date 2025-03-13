import React from "react";
import "./Services.css";

const Services = () => {
  return (
    <section id="services" className="services">
      <h2>Counsel & Care</h2>
      <div className="services-list">
        <div className="service-card">
          <h3>Psychotherapy Services</h3>
          <p>Providing compassionate therapy at Eremia Psychotherapy, located at Office 210, Rosslyn Mall.</p>
        </div>
        <div className="service-card">
          <h3>Spiritual Guidance</h3>
          <p>Offering pastoral care and counseling as a Reverend at ACK Syokimau.</p>
        </div>
        <div className="service-card">
          <h3>Youth Empowerment</h3>
          <p>Founder of Destiny Echo Youth Band, mentoring young people through faith and music.</p>
        </div>
      </div>
    </section>
  );
};

export default Services;
