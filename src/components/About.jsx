import React from 'react'
import './About.css'
import { useEffect } from "react";
import aboutheroImg from '../assets/aboutheroimg.jpg'
import aboutusimg from '../assets/aboutusimg.jpg'
function About() {

useEffect(() => {

  const counters = document.querySelectorAll(".number-aboutS");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {

      if (entry.isIntersecting) {

        const counter = entry.target;
        const target = +counter.getAttribute("data-target");

        let count = 0;
        const duration = 1000; // 1 second
        const increment = target / (duration / 16);

        const updateCount = () => {
          count += increment;

          if (count < target) {
            counter.innerText = Math.floor(count) + (counter.innerText.includes('%') ? '%' : '+');
            requestAnimationFrame(updateCount);
          } else {
            counter.innerText = target + (counter.innerText.includes('%') ? '%' : '+');
          }
        };

        updateCount();
        observer.unobserve(counter); // ek baar hi chale

      }

    });
  }, { threshold: 0.5 });

  counters.forEach(counter => observer.observe(counter));

}, []);
  return (
     <>
      <div className="hero-image" style={{position:'relative', backgroundColor:'blue', border:'none', height:'400px', opacity:'0.8'}}>
        <img  src={aboutheroImg} style={{height:'400px', width:'100%', objectFit:'cover', opacity: '1', border:'none'}} alt="" />
        <div style={{position:'absolute', left:'50%', top:'60%', transform: 'translate(-50%, -50%)', display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center', color:'#fff'}} className="hero-text">
          <span style={{display:'block', fontSize:'60px', fontWeight:'bold'}} className='hero-text-Fspan'>About</span>
          <span style={{fontSize:'20px'}}>Home/About</span>
        </div>
      </div>



       <div className="About-Section">


        <div className="about-text">

          <div className="aboutT">
            <h3>About Us</h3>
            <h2>Who We Are -What We Do</h2>
            <p>Swami SharadhaNand School is a premier institution dedicated to academic excellence and holistic development. We provide innovative learning experiences, fostering critical thinking, creativity, and leadership skills to empower students for a successful future in a dynamic world.</p>
          </div>
          <div className="aboutS">
            <div className="f-S">
              <div>
                <span className='number-aboutS' data-target="100">0%</span>
                <span className='text-aboutS'>Exam Result</span>
              </div>
              <div>
               <span className='number-aboutS' data-target="15">0+</span>
                <span className='text-aboutS'>Class Room</span>
              </div>
              <div>
                <span className='number-aboutS' data-target="20">0+</span>
                <span className='text-aboutS'style={{display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center'}}> <span style={{display:'block'}}>Profesioaly</span> Qualified teachers</span>
              </div>
            </div>
            <div className="s-S">
               <div>
                  <span className='number-aboutS' data-target="100">0%</span>
                <span className='text-aboutS'>Satisfied Parents</span>
              </div>
               <div>
                <span className='number-aboutS' data-target="1000">0+</span>

                <span className='text-aboutS'>Students</span>
              </div>
               <div>
                <span className='number-aboutS' data-target="40">0+</span>
                <span className='text-aboutS'>Individual Program</span>
              </div>
            </div>
          </div>
        </div>


        <div className="about-image">
           
          <img src={aboutusimg} className='about-image-img'  alt="" />
        </div>
       </div>


        
        <div style={{width:'50%', boxSizing:'border-box'}} className="about-text">

          <div className="aboutT aboutT-C">
            <h3 className='h3-3'>Most Advanced UP Board School In Baghpat</h3>
            <h2 className='h2-2'>Inspiring Future Generation!</h2>
            <p>At Swami SharadhaNand School, we are committed to shaping the leaders of tomorrow by fostering curiosity, creativity, and confidence. Through innovative learning methods, hands-on experiences, and a values-driven approach, we empower students with knowledge and skills to excel in a rapidly evolving world. Our holistic education nurtures critical thinking, leadership, and adaptability, ensuring every child grows into a responsible, innovative, and successful individual, ready to make a meaningful impact.</p>
          </div>
           
        </div>
        <div style={{width:'50%', display:'flex', justifyContent:'center', alignItems:'center '}} className="about-image none">
           
          <img src={aboutusimg} style={{height:'400px', width:'90%'}} alt="" />
        </div>
        
     </>
  )
}

export default About