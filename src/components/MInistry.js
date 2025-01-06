import React from "react";
import image1 from "../components/Images/Ruth Thanks Giving (275) (1).jpg";
import image2 from "../components/Images/DEN_2912.JPG";
import youthGroupImage from "../components/Images/backgroundpic.jpeg"; // Replace with the actual path to the youth group image
import video from '../components/Images/RevRuth.png'
import "./MInistry.css";

const Ministry = () => (
  <section id="ministerial" className="ministerial-section">
    {/* Ministry Journey Section */}
    <h2>Ministry Journey</h2>
    <div className="journey-item">
      
      <div className="journey-text">
        <p>
          Rev. Ruth Muita's calling began in 2012 when she first enrolled as a
          student at St. Timothy Kagira Divinity College, under the mentorship
          of Bishop Muturi, serving as an apprentice evangelist.
        </p>
      </div>
      <div className="journey-media">
        <img src={image1} alt="Ministry work at St. Timothy Kagira Church" />
      </div>
    </div>

    <div className="journey-item">
      <div className="journey-text">
        <p>
          She was later posted at St. Mary Thindigua under Dr. Gathagu. Rev.
          Ruth’s service extended beyond boundaries, transferring from Mt.
          Kenya South Diocese to Machakos Diocese. At ACK Syokimau under Bishop
          Joseph Mutungi, where she was ordained as a deacon, and she continued
          her ministry at St. Mattheas and other parishes such as ACK Ngimu,
          where she served as a diocesan evangelist.
        </p>
      </div>
      <div id='2nd-img'className="journey-media">
        <img src={image2} alt="Ministry work in Machakos Diocese" />
      </div>
    </div>

    <div className="journey-item">
      <div className="journey-text">
        <p>
          Rev. Ruth was later ordained as a Reverend at All Souls Cathedral.
          Her passion for youth ministry inspired the founding of *Destiny Echo
          Worshippers*, spreading the gospel through powerful music during
          crusades and events.
        </p>
        <p>
          Through her unwavering commitment, she continues to mentor, teach,
          and transform lives, bringing hope and faith to the communities she
          serves.
        </p>
      </div>
      <div className="journey-media">
        <video controls>
          <source src={video} type="video/mp4" />
        </video>
      </div>
    </div>

    {/* Destiny Echo Worshippers Section */}
    <div className="journey-item">
      <div className="journey-text">
        <p>
          Destiny Echo Worshippers is a vibrant youth group founded by Rev.
          Ruth Muita. She identified talented young individuals in the
          community, mentored them, and empowered them to spread the gospel
          through music. Their music inspires faith and touches lives during
          crusades and events.
        </p>
      </div>
      <div className="journey-media">
        <img
          src={youthGroupImage}
          alt="Destiny Echo Worshippers performing"
        />
      </div>
    </div>

    
    
  </section>
);

export default Ministry;


