import React from "react";
import "./Services.css";

const Services = () => {
  return (
    <section id="services" className="services">
      <h2>Counsel & Care</h2>
      <div className="services-list">
        <div className="service-card">
          <h3>Pastoral Ministry</h3>
          <p>
            Serving at <strong href='https://maps.app.goo.gl/MxNhEuyFLCsMBMja7'>ACK St. Matthias Sabaki</strong>, guiding individuals and families in faith and 
            spiritual growth.
          </p>
        </div>
        <div className="service-card">
          <h3>Counseling Services</h3>
          <p>
            Offers therapy sessions at <strong>Eremia Counselling Centre</strong> (Rosslyn Mall, Office 210), 
            helping individuals navigate life’s challenges.
          </p>
        </div>
        <div className="service-card">
          <h3>Youth Empowerment</h3>
          <p>
            Founder of <strong>Destiny Echoes Youth Ministry</strong>, mentoring young people through faith, 
            music, and leadership programs.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Services;

