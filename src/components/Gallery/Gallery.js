import React from "react";
import "./Gallery.css";
import Youtube from "../Youtube/Youtube.js";
import img1 from "../Images/Ruth Thanks Giving (275) (1).jpg";

const Gallery = () => {
  const videoId = "sCaJIaZOXdY"; // Correct YouTube video ID

  return (
    <section id="gallery" className="gallery">
      <h2>Gallery</h2>
      <div className="gallery-grid">
        <div className="gallery-card">
          <img src={img1} alt="Family" />
        </div>

        {/* First Video Clip (Part 1) */}
        <div className="gallery-card">
          
          <Youtube videoId={videoId} startTime={100 * 60} endTime={101 * 60} />
        </div>

        {/* Second Video Clip (Part 2) */}
        <div className="gallery-card">
        
          <Youtube videoId={videoId} startTime={107 * 60} endTime={108 * 60} />
        </div>

      </div>
    </section>
  );
};

export default Gallery;

