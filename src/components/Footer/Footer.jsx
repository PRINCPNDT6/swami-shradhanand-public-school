import React from 'react'
import { NavLink } from 'react-router-dom'
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import footerImg from '../../assets/footerimg.jpeg'
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import './Footer.css'
function Footer() {
  return (
    <>
       
        <div className="container footer" style={{
             backgroundImage: `linear-gradient(rgba(12,0,128,0.8), rgba(120,0,128,0.8)), url(${footerImg})`
        }}> 
        <div className="about-our-school">
         <div className="text">
           <span className='heading'>About Our School</span>
          <p>
            We invite you to join the Swami SharadhaNand School community, where education meets excellence, and students are prepared to lead by example in an ever-changing world.
          </p>
         </div>

          <div className="social-links">
             <li className='fb icon'>
              <FaFacebookF />
            </li>
            <li className='ig icon'>
              <FaInstagram />
            </li>
            <li className='tw icon'>
              <FaTwitter />
            </li>
          </div>
          
        </div>

        <div className="links">
          <div className="about-school">
            <span className='heading'>About School</span>
            <div className="bottom-line"></div>
            <ul>
              <li>
                <NavLink className= 'links-navlink' to= '/about'>About Us</NavLink>
              </li>
              <li><NavLink className= 'links-navlink' to='/affiliation'>UP Affiliation</NavLink></li>
              <li><NavLink className= 'links-navlink' to= '/whysspschool'>Why SSP School</NavLink></li>
              <li><NavLink className= 'links-navlink' to='/contact'>Contact</NavLink></li>
            </ul>

          </div>
          <div className="quick-links">
              
            <span className='heading'>Quick Links</span>
            <div className="bottom-line"></div>
            <ul>
              <li>
                <NavLink className= 'links-navlink' to= '/principalmsg'>Principal's Message</NavLink>
              </li>
              <li><NavLink className= 'links-navlink' to='/directormsg'>Director's Message</NavLink></li>
              <li><NavLink className= 'links-navlink' to= '/ourstaff'>Our Staff</NavLink></li>
              <li><NavLink className= 'links-navlink' to='/ourstudent'>Our Students</NavLink></li>
            </ul>

           
          </div>
        </div>

        <div className="contact">
          <span className='heading'>Contact Us</span>
          <div className="bottom-line"></div>

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

             
            <div className="address">
              <li>
                 <FaMapMarkerAlt className="contact-icon" />
              <a 
                href="https://www.google.com/maps/search/?api=1&query=Swami+Sharadhanand+Public+School+Barout+Budhana+Road+Uttar+Pradesh+250622" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                    Swami Sharadhanand Public School,
              </a>
            </li>
            <li>
              <a 
                href="https://www.google.com/maps/search/?api=1&query=Swami+Sharadhanand+Public+School+Barout+Budhana+Road+Uttar+Pradesh+250622" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                    Barout Budhana Road, Uttar Pradesh 250622
              </a>
            </li>
            </div>

          </ul>

        </div>
      </div>
    </>
  )
}

export default Footer