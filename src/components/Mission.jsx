import React from "react";
import "./Mission.css";

const Mission = () => {
  return (
    <>
    
    <section className="mv-section">
      <div className="mv-container">
        <h2 className="mv-title">Mission & Vision</h2>
        <p className="mv-subtitle">
          Especially favourable compliment but thoroughly unreserved saw she themselves.
        </p>

        <div className="mv-cards">
          {/* Mission */}
          <div className="mv-card">
            <h3 className="mv-card-title">Mission</h3>
            <p>
              At Swami SharadhaNand School, our mission is to provide a nurturing and
              innovative learning environment that fosters academic excellence,
              creativity, and leadership. We aim to empower students with
              knowledge, skills, and values to excel in a rapidly evolving global society.
            </p>
          </div>

          {/* Vision */}
          <div className="mv-card">
            <h3 className="mv-card-title">Vision</h3>
            <p>
              Our vision is to shape future-ready individuals by offering holistic
              education that encourages critical thinking, adaptability, and ethical
              responsibility. SS School strives to create lifelong learners
              and responsible citizens who contribute positively to society.
            </p>
          </div>
        </div>
      </div>
    </section>
      <div className="Our-values">
        <h1>Our Values</h1>
        <p>At Swami SharadhaNand School, our values form the foundation of everything we do. We believe in nurturing integrity, curiosity, and compassion in every student. Our commitment lies in fostering a culture of respect, inclusivity, and lifelong learning. We empower young minds to think critically, act ethically, and lead confidently in a global society. With a strong focus on academic excellence and character development, we strive to create responsible citizens who make a positive impact on the world. Our values guide us as we shape the future—one student, one lesson, and one step at a time.</p>
      </div>
      </>
  );
};

export default Mission;