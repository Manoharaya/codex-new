import React from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';
import './Testimonials.css';

const testimonialData = [
  {
    quote: "CodexNeural didn't just build our platform; they engineered a scalable infrastructure that allowed us to handle a 400% increase in user traffic without a single point of failure. They are true product engineers.",
    name: "Sarah Jenkins",
    role: "Chief Technology Officer",
    company: "FinTech Elevate",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    quote: "Their engineering team feels like an internal extension of our own. The AI architecture they designed reduced our processing time by 80% while maintaining absolute compliance and security.",
    name: "Marcus Chen",
    role: "VP of Engineering",
    company: "HealthSync",
    image: "https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&q=80&w=800"
  }
];

const Testimonials = () => {
  return (
    <section className="testimonials-section">
      <div className="container">
        <div className="testimonials-carousel">
          {testimonialData.map((testimonial, index) => (
            <motion.div 
              key={index}
              className="testimonial-content glass-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
            >
              <Quote size={48} className="quote-icon" />
              
              <h2 className="testimonial-quote">
                "{testimonial.quote}"
              </h2>
              
              <div className="testimonial-author">
                <div className="author-image-wrapper">
                  <img src={testimonial.image} alt={testimonial.name} className="author-image" />
                </div>
                <div className="author-info">
                  <h4 className="author-name">{testimonial.name}</h4>
                  <p className="author-role">{testimonial.role}, {testimonial.company}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
