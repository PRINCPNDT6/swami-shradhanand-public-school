import React, { useState } from "react";
import './Feedbackslider.css'

const testimonials = [
  {
    name: "Yogendra Sharma",
    text: "Swami SharadhaNand School truly cares about students’ growth. The teaching methods are modern, and my child is learning new skills every day.",
    rating: 5,
  },
  {
    name: "Rahul Tomar",
    text: "School is very supportive. Teachers focus on studies and overall development of children.",
    rating: 4,
  },
  {
    name: "Anita Sharma",
    text: "Excellent environment and disciplined learning system. My child improved a lot.",
    rating: 5,
  },
];

function TestimonialSlider() {
  const [index, setIndex] = useState(0);

  const prevSlide = () => {
    setIndex(index === 0 ? testimonials.length - 1 : index - 1);
  };

  const nextSlide = () => {
    setIndex(index === testimonials.length - 1 ? 0 : index + 1);
  };

  return (
    <div className="testimonial-section">

      <h4 className="title">Testimonial</h4>
      <h2 className="subtitle">What Parents Think and Experienced</h2>

      <div className="slider">

        <button onClick={prevSlide} className="arrow left">❮</button>

        <div className="card">
          <h3>{testimonials[index].name}</h3>

          <div className="stars">
            {"⭐".repeat(testimonials[index].rating)}
          </div>

          <p>{testimonials[index].text}</p>
        </div>

        <button onClick={nextSlide} className="arrow right">❯</button>

      </div>
    </div>
  );
}

export default TestimonialSlider;