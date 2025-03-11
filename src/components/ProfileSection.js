import React from "react";
import profile from "../components/Images/revruth2.jpg";
import "./ProfileSection.css";

const ProfileSection = () => {
  const church = "https://www.google.com/maps/place/St.+Mary's+ACK+Syokimau+Parish";

  return (
    <>
      <section id="profile" className="profile-section">
        <img src={profile} alt="Rev. Ruth Ng'endo Muita." className="profile-img" />
        <div className="profile-details">
          <h1>Rev. Ruth Ng'endo Muita</h1>
          <h2>Serving at <a href={church}>ACK Syokimau</a></h2>
          <p>
            "I can do all things through Christ who strengthens me." – Philippians 4:13
          </p>
          <p>
            Rev. Ruth Muita is a dedicated servant of God, committed to spreading love, faith, and hope in her community and beyond.
          </p>
        </div>
      </section>
    </>
  );
};

export default ProfileSection;
