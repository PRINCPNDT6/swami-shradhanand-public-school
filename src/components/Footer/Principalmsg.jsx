import React from 'react'
import '../Affiliation.css'
// import './WhysspSchool.css'
import { useNavigate } from "react-router-dom";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
//  import upaffiliationHero from '../../assets'
import upaffiliationHero from '../../assets/upaffiliationHero.jpeg'
import affiliationsecondImg from '../../assets/affiliationsecondimg.jpg'
// import affiliationcertificate from '../../assets/affiliation-certificate.jpg'
import aboutusimg from '../../assets/aboutusimg.jpg'
import Herosection from '../Herosection/Herosection';
function Principalmsg() {
   
  const navigate = useNavigate();
  return (
    <>
        <Herosection HeroImg = {upaffiliationHero} Pagename= 'Principal Message'  />

        <div className="responsive-page">
          <div className="affiliation-box">
          <div className="img-text">
            <img src={affiliationsecondImg} alt="" />
          <div className="text">
            <h1>Principal Message</h1>
            <p style={{marginBottom:'30px', color:'#04042ad2 '}}>Welcome to Swami SharadhaNand School: Empowering Young Minds for a Brighter Tomorrow</p>
            
            <p style={{marginBottom:'30px', color:'#04042aef '}}>As the Principal of Swami SharadhaNand School, I am honored to lead a community of dedicated educators, passionate learners, and supportive parents. Our school is built on the foundation of academic excellence, innovation, and character development, with a commitment to nurturing the unique potential of each child.</p>

            <p style={{marginBottom:'30px', color:'#04042aef '}}>At Swami SharadhaNand School, we believe that education should be a transformative experience that prepares our students to thrive in an ever-evolving world. Our curriculum is designed to foster critical thinking, creativity, and problem-solving skills, with a focus on developing essential life skills, such as communication, collaboration, and empathy.</p>

            <p style={{marginBottom:'30px', color:'#04042aef '}}>Our team of experienced and enthusiastic teachers are committed to creating a supportive and inclusive learning environment that encourages our students to take risks, challenge assumptions, and push beyond their perceived limits. We believe in the power of technology to enhance the learning experience, and our state-of-the-art infrastructure provides our students with the ideal platform to explore, experiment, and innovate.</p>

            <p style={{marginBottom:'30px', color:'#04042aef '}}>As a school, we are committed to the values of Respect, Responsibility, and Resilience. We believe that these values are essential for our students to become compassionate, thoughtful, and active citizens of the world.</p>

            <p style={{marginBottom:'30px', color:'#04042aef '}}>To our students, I offer these words of encouragement: never stop learning, never stop growing, and never stop believing in yourself. You have the power to shape your own destiny, and we are here to support and guide you every step of the way.</p>

            <p style={{marginBottom:'30px', color:'#04042aef '}}>To our parents, I thank you for entrusting us with the privilege of educating your children. We are honored to partner with you in this journey and look forward to working together to create a brighter future for our students.</p>

            <p style={{marginBottom:'30px', color:'#04042aef '}}>As we continue on this exciting journey together, I invite you to join us in our pursuit of excellence in education. Let us work together to create a learning community that is truly exceptional, where every child can thrive, grow, and flourish.</p>

            <p style={{marginBottom:'10px', color:'#04042aef '}}>Thank you for being part of the Swami SharaDhaNand School family.</p>

            <p style={{marginBottom:'10px', color:'#04042aef '}}>Sincerely,</p>
            <p><span style={{display:'block'}}>Mr. Sunil Kumar Sharma</span>Principal, Swami SharaDhaNand School</p>
          </div>
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

export default Principalmsg