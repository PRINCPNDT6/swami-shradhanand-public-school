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
function Directormsg() {
   
  const navigate = useNavigate();
  return (
    <>
        <Herosection HeroImg = {upaffiliationHero} Pagename= 'Principal Message'  />

        <div className="responsive-page">
          <div className="affiliation-box">
          <div className="img-text">
            <img src={affiliationsecondImg} alt="" />
          <div className="text">
            <h1>Director  Message</h1>
            <p style={{marginBottom:'30px', color:'#04042ad2 '}}>Empowering Young Minds, Enriching Young Lives: A Commitment to Excellence in Education.</p>
            
            <p style={{marginBottom:'30px', color:'#04042aef '}}>As we navigate the complexities of the 21st century, it has become increasingly evident that the future of education lies in fostering a culture of innovation, creativity, and critical thinking. At BIT Global School, we are dedicated to providing a transformative learning experience that prepares our students to thrive in an ever-evolving world.</p>

            <p style={{marginBottom:'30px', color:'#04042aef '}}>Our academic framework is built on the principles of Personalized Learning, where each child’s unique strengths, interests, and learning styles are taken into account to create a tailored educational journey. Our expert faculty, equipped with cutting-edge teaching methodologies and technological tools, work tirelessly to create an immersive learning environment that is both engaging and effective.</p>

            <p style={{marginBottom:'30px', color:'#04042aef '}}>We are committed to harnessing the power of technology to enhance the learning experience, with a focus on Artificial Intelligence, Data Analytics, and Virtual Reality. Our state-of-the-art infrastructure,</p>

            <p style={{marginBottom:'30px', color:'#04042aef '}}>including smart classrooms, makerspaces, and digital libraries, provides our students with the ideal platform to explore, experiment, and innovate.</p>

            <p style={{marginBottom:'30px', color:'#04042aef '}}>At Swami SharaDhaNand School, we believe that education should be a holistic experience that extends beyond the confines of the classroom. Our co-curricular programs, including sports, arts, and community service, are designed to foster essential life skills, such as teamwork, communication, and empathy.</p>

            <p style={{marginBottom:'30px', color:'#04042aef '}}>As we strive for excellence in education, we are guided by our core values of Creativity, Critical Thinking, and Character. We are committed to nurturing a community of lifelong learners who are equipped to navigate the complexities of the 21st century with confidence, compassion, and courage.</p>

            <p style={{marginBottom:'30px', color:'#04042aef '}}>To our students, we pledge to provide a supportive and inclusive learning environment that encourages you to take risks, challenge assumptions, and push beyond your perceived limits. We believe in your potential and are committed to helping you realize your dreams.</p>

            <p style={{marginBottom:'30px', color:'#04042aef '}}>To our parents, we thank you for entrusting us with the privilege of educating your children. We are honored to partner with you in this journey and look forward to working together to create a brighter future for our students.</p>

            <p style={{marginBottom:'30px', color:'#04042aef '}}>As we embark on this exciting journey together, I invite you to join us in our pursuit of excellence in education. Let us work together to create a learning community that is truly exceptional, where every child can thrive, grow, and flourish.</p>

            <p style={{marginBottom:'10px', color:'#04042aef '}}>Thank you for being part of the Swami SharaDhaNand School family.</p>

            <p style={{marginBottom:'10px', color:'#04042aef '}}>Sincerely,</p>
            <p><span style={{display:'block'}}>Dr. Nitin Singh Tomar</span>Director Academics, Swami SharaDhaNand School</p>
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

export default Directormsg