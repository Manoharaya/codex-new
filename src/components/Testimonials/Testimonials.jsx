import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star } from 'lucide-react';
import './Testimonials.css';

const testimonialData = [
  {
    quote:
      "I’ve had a very positive experience working with CodexNeural. Their team is professional, knowledgeable and genuinely committed to understanding the client’s needs. What I particularly appreciated was their ability to communicate clearly, remain responsive, and approach challenges with a solution-focused mindset. The collaboration felt transparent and reliable, with a strong emphasis on delivering quality outcomes. I would be happy to recommend them as a dependable technology partner.",
    name: "Dr. Yulianna Shiikha",
    role: "CEO & Founder",
    company: "Life Science AI",
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

  return (
    <section className="testimonials-section">
      <div className="container">
        
        <div className="testimonials-header">
          <h2>What Our <span className="text-gradient">Clients Say</span></h2>
        </div>

        <div className="testimonials-slider-wrapper">
          <AnimatePresence mode="wait">
            <motion.div 
              key={currentIndex}
              className="testimonial-card glass-card"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="testimonial-card-left">
                <div className="author-image-wrapper">
                  <img src={testimonialData[currentIndex].image} alt={testimonialData[currentIndex].name} className="author-image" />
                </div>
              </div>

              <div className="testimonial-card-right">
                <div className="author-info">
                  <h4 className="author-name">{testimonialData[currentIndex].name}</h4>
                  <p className="author-role">{testimonialData[currentIndex].role}, {testimonialData[currentIndex].company}</p>
                </div>
                
                <div className="testimonial-quote-wrap">
                  {testimonialData[currentIndex].quote.split('\n\n').map((para, idx) => (
                    <p key={idx} className="testimonial-quote-para">
                      {para}
                    </p>
                  ))}
                </div>

                <div className="testimonial-stars">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={18} fill="currentColor" className="star-icon" />
                  ))}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="testimonial-dots">
            {testimonialData.map((_, idx) => (
              <button 
                key={idx}
                className={`testimonial-dot ${idx === currentIndex ? 'active' : ''}`}
                onClick={() => setCurrentIndex(idx)}
                aria-label={`Go to testimonial ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
