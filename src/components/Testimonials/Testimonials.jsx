import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import './Testimonials.css';

const testimonialData = [
  {
    quote:
      "CodexNeural is a professional, knowledgeable team committed to understanding client needs. Their clear communication, responsiveness, and solution-focused mindset ensured a transparent collaboration. They focus on delivering quality outcomes rather than simply completing a project. I highly recommend them as a dependable technology partner.",
    name: "Dr. Yulianna Shiikha",
    role: "CEO & Founder",
    company: "Life Science Ai",
    image: "/yulianna-profile.png",
  },
  {
    quote:
      "Their engineering team feels like an internal extension of our own. The AI architecture they designed reduced our processing time by 80% while maintaining absolute compliance and security.",
    name: "Jenny Gillson",
    role: "Founder",
    company: "Lemuria",
    image:
      "/jenny.jpeg",
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonialData.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonialData.length) % testimonialData.length);
  };

  return (
    <section className="testimonials-section">
      <div className="container">
        <div className="testimonials-slider-wrapper">
          <AnimatePresence mode="wait">
            <motion.div 
              key={currentIndex}
              className="testimonial-content glass-card"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            >
              <Quote size={48} className="quote-icon" />
              
              <h2 className="testimonial-quote">
                "{testimonialData[currentIndex].quote}"
              </h2>
              
              <div className="testimonial-footer">
                <div className="testimonial-author">
                  <div className="author-image-wrapper">
                    <img src={testimonialData[currentIndex].image} alt={testimonialData[currentIndex].name} className="author-image" />
                  </div>
                  <div className="author-info">
                    <h4 className="author-name">{testimonialData[currentIndex].name}</h4>
                    <p className="author-role">{testimonialData[currentIndex].role}, {testimonialData[currentIndex].company}</p>
                  </div>
                </div>

                <div className="testimonial-nav">
                  <button className="nav-arrow" onClick={prevTestimonial} aria-label="Previous Testimonial">
                    <ChevronLeft size={24} />
                  </button>
                  <button className="nav-arrow" onClick={nextTestimonial} aria-label="Next Testimonial">
                    <ChevronRight size={24} />
                  </button>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
