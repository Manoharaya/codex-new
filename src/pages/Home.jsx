import React from 'react';
import Hero from '../components/Hero/Hero';
import Services from '../components/Services/Services';
import WhyUs from '../components/WhyUs/WhyUs';
import FeaturedProjects from '../components/FeaturedProjects/FeaturedProjects';
import Process from '../components/Process/Process';
import TechStack from '../components/TechStack/TechStack';
import Industries from '../components/Industries/Industries';
import Testimonials from '../components/Testimonials/Testimonials';
import Stats from '../components/Stats/Stats';
import FinalCTA from '../components/FinalCTA/FinalCTA';
import SEO from '../components/SEO/SEO';

const Home = () => {
  return (
    <div className="home page-wrapper">
      <SEO 
        title="Home"
        description="CodexNeural engineers premium digital products. We specialize in AI solutions, custom enterprise software, and scalable web and mobile applications."
        url="/"
      />
      <div className="chapter-hero">
        <Hero />
      </div>
      <div className="chapter-services">
        <Services />
        <WhyUs />
      </div>
      <div className="chapter-portfolio">
        <FeaturedProjects />
        <Process />
      </div>
      <div className="chapter-tech">
        <TechStack />
      </div>
      <div className="chapter-about">
        <Industries />
        <Testimonials />
        <Stats />
      </div>
      <div className="chapter-hero">
        <FinalCTA />
      </div>
    </div>
  );
};

export default Home;
