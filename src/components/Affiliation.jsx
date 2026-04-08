import React from 'react'
import './Affiliation.css'
import { useNavigate } from "react-router-dom";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import Herosection from './Herosection/Herosection'
import upaffiliationHero from '../assets/upaffiliationHero.jpeg'
import affiliationsecondImg from '../assets/affiliationsecondimg.jpg'
import affiliationcertificate from '../assets/affiliation-certificate.jpg'
import aboutusimg from '../assets/aboutusimg.jpg'
function Affiliation() {
  const navigate = useNavigate();
  return (
    <>
        <Herosection HeroImg={upaffiliationHero} Pagename= 'UP Affiliation' />
        <div className="responsive-page">
          <div className="affiliation-box">
          <div className="img-text">
            <img src={affiliationsecondImg} alt="" />
          <div className="text">
            <h1>UP Affiliation</h1>
            <p>Swami SharadhaNand School is proudly affiliated with the UP Board of  Education (UP), ensuring a high standard of education that aligns with national academic excellence. Our UP Affiliation Certificate reflects our commitment to providing a structured, well-regulated, and future-oriented curriculum. With CBSE-approved teaching methodologies, we focus on holistic development, critical thinking, and conceptual learning. This affiliation assures parents and students of a recognized, credible, and quality education system. On this page, we proudly display our UP Affiliation Certificate, reinforcing our dedication to maintaining the highest educational standards for a bright and successful future.</p>
          </div>
          </div>
          <div className="certificate">
            <h2>UP Affiliation Certificate</h2>
          <img src={affiliationcertificate} alt="" />
             
          </div>
        </div>
        <div className="contactpage">

         <div className="contact-img">

          <div  className='image-div'>
             <img src={aboutusimg} alt="" />
          </div>
          <div className="imginnertext">
           <h1>Magic Moments Early Learning</h1>
            <p>Swami SharadhaNand School, Meerut, fosters holistic growth with global education, Indian values, and excellence in academics & sports.</p>
           <button onClick={() => {
              navigate('/contact');
              window.scrollTo(0, 0);
            }}>
              Enroll Now
           </button>

          </div>

         </div>
          <div className="text">
            <hr />
            <h2>Contact Info</h2>
            <hr />
            <p>We invite you to join the Swami SharadhaNand community, where education meets excellence, and students are prepared to lead by example in an ever-changing world.</p>
           <ul className='info-box'>

              <li>
                <FaPhoneAlt className="contact-icon" />
                <a href="tel:7618612927">7618612927</a>
              </li>

              <li>
                <FaEnvelope className="contact-icon" />
                <a href="mailto:krrishsharma698@gmail.com">
                  krrishsharma698@gmail.com
                </a>
              </li>

              <li>
                <FaMapMarkerAlt className="contact-icon" />
                <a 
                  href="https://www.google.com/maps/search/?api=1&query=Swami+Sharadhanand+Public+School+Barout+Budhana+Road+Uttar+Pradesh+250622" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  Swami Sharadhanand Public School, Barout Budhana Road
                </a>
              </li>

            </ul>
          </div>
        </div>
        </div>
    </>
  )
}

export default Affiliation