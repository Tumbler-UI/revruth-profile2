import React from "react";
import "./Gallery.css";
import img1 from "../Images/Ruth Thanks Giving (275) (1).jpg";


const Gallery = () => {
  return (
    <section id="gallery" className="gallery">
      <h2>Gallery</h2>
      <div className="gallery-grid">
        <div className="gallery-card">
          <img src={img1} alt="Family" />
        </div>
        
        
        
      </div>
    </section>
  );
};

export default Gallery;
