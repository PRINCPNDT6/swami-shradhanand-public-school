import React from 'react'
import '../Affiliation.css'
import './WhysspSchool.css'
import { useNavigate } from "react-router-dom";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
//  import upaffiliationHero from '../../assets'
import upaffiliationHero from '../../assets/upaffiliationHero.jpeg'
import affiliationsecondImg from '../../assets/affiliationsecondimg.jpg'
import affiliationcertificate from '../../assets/affiliation-certificate.jpg'
import aboutusimg from '../../assets/aboutusimg.jpg'
import Herosection from '../Herosection/Herosection';
function WhysspSchool() {
   
  const navigate = useNavigate();
  return (
    <>
        <Herosection HeroImg = {upaffiliationHero} Pagename= ' What’s Unique in Swami SharadaNand School'  />

        <div className="responsive-page">
          <div className="affiliation-box">
          <div className="img-text">
            <img src={affiliationsecondImg} alt="" />
          <div className="text">
            <h1>What's Unique in Swami Sharadhanand School</h1>
            <p>At Swami Sharadhanand School, excellence is more than a goal—it’s a way of life. We are proud to offer a learning environment that is both innovative and nurturing, setting us apart as a leader in modern education. Our unique approach combines academic rigor with holistic development, ensuring every student is prepared for a rapidly changing world. We integrate state-of-the-art facilities, dynamic teaching methods, and a supportive community to create an educational experience unlike any other.</p>
            &nbsp;
            <p>Here’s what makes Swami SharadhaNand School truly unique:</p>
          </div>
          </div>

           <div className="another-p">
            <ul>

            <li><span >Innovative Learning Environment: </span>Our classrooms are equipped with modern technology and interactive tools that encourage creativity, critical thinking, and collaborative learning.</li>
            <li><span >Comprehensive STEM Facilities: </span>With fully equipped Science Labs for Physics, Chemistry, and Biology, along with the cutting-edge Atal Tinkering Lab, students can explore their scientific interests and develop practical skills.</li>
            <li><span >World-Class Sports and Extracurriculars:  </span>We offer specialized facilities such as Cricket Academy, Archery Academy, Shooting Range, and various martial arts programs. This focus on sports nurtures teamwork, discipline, and physical fitness.</li>
            <li><span >Holistic Development Programs: </span>Our classrooms are equipped with modern technology and interactive tools that encourage creativity, critical thinking, and collaborative learning.</li>
            <li><span >Hostel Facility: </span> Our secure and comfortable hostel facility caters to students from various regions, creating a diverse and vibrant community where lifelong friendships are formed.</li>
            <li><span >UP Affiliation: </span> As a leading UP institution, we follow a curriculum that emphasizes both academic excellence and values-based education.</li>

            </ul>

            <p>In addition to these unique features, Swami SharaDhaNand School is committed to delivering a global standard of education that equips students to excel in an interconnected world. We adopt internationally benchmarked teaching methodologies and incorporate digital learning tools that mirror global trends in education.</p>

            <p>Our faculty is continually trained in contemporary pedagogical practices, ensuring that our students benefit from a curriculum that is both current and forward-thinking.</p>

            <p>Furthermore, we encourage cross-cultural exchanges, global competitions, and partnerships with educational institutions abroad, which broaden students’ perspectives and prepare them for global challenges.</p>

            <p>At Swami SharaDhaNand S School, we don’t just follow education standards—we set them, inspiring our students to become tomorrow’s innovators and leaders on the world stage.</p>
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

export default WhysspSchool