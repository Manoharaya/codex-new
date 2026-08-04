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

const Home = () => {
  return (
    <main>
      <Hero />
      <Services />
      <WhyUs />
      <FeaturedProjects />
      <Process />
      <TechStack />
      <Industries />
      <Testimonials />
      <Stats />
      <FinalCTA />
    </main>
  );
};

export default Home;
