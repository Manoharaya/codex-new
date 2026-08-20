import React from 'react';
import Hero from '../components/Hero/Hero';
import Services from '../components/Services/Services';
import WhyUs from '../components/WhyUs/WhyUs';
// import FeaturedProjects from '../components/FeaturedProjects/FeaturedProjects';
import Process from '../components/Process/Process';
import TechStack from '../components/TechStack/TechStack';
import Industries from '../components/Industries/Industries';
import Testimonials from '../components/Testimonials/Testimonials';
import Stats from '../components/Stats/Stats';
import FinalCTA from '../components/FinalCTA/FinalCTA';
import SEO from '../components/SEO/SEO';
import TrustStrip from '../components/TrustStrip/TrustStrip';
import ErrorBoundary from '../components/ErrorBoundary';

const Home = () => {
  const homeSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": "https://www.codexneural.com/#website",
        "url": "https://www.codexneural.com/",
        "name": "Codex Neural",
        "description": "Codex Neural is a global product engineering and technology consulting company specializing in AI solutions, custom enterprise software, cloud infrastructure, and digital platforms."
      },
      {
        "@type": "Organization",
        "@id": "https://www.codexneural.com/#organization",
        "name": "Codex Neural",
        "url": "https://www.codexneural.com/",
        "logo": "https://www.codexneural.com/logo.svg",
        "email": "connect@codexneural.com",
        "telephone": "+9779840327185",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Kathmandu",
          "addressCountry": "NP"
        },
        "founder": {
          "@type": "Person",
          "name": "Manohar Singh",
          "jobTitle": "Founder & CEO"
        },
        "sameAs": [
          "https://www.linkedin.com/company/codex-neural/",
          "https://github.com/Manoharaya"
        ]
      }
    ]
  };

  return (
    <div className="home page-wrapper">
      <SEO
        title="Codex Neural | Future-Ready AI & IT Solutions"
        description="Codex Neural builds intelligent digital systems, AI platforms, enterprise software, and scalable cloud infrastructure for modern global businesses."
        url="/"
        schema={homeSchema}
      />
      <div className="chapter-hero">
        <ErrorBoundary><Hero /></ErrorBoundary>
      </div>
      <ErrorBoundary><TrustStrip /></ErrorBoundary>
      <div className="chapter-services">
        <ErrorBoundary><Services /></ErrorBoundary>
        <ErrorBoundary><WhyUs /></ErrorBoundary>
      </div>
      <div className="chapter-portfolio">
        {/* <FeaturedProjects /> */}
        <ErrorBoundary><Stats /></ErrorBoundary>
        <ErrorBoundary><Process /></ErrorBoundary>
      </div>
      <div className="chapter-tech">
        <ErrorBoundary><TechStack /></ErrorBoundary>
      </div>
      <div className="chapter-about">
        <ErrorBoundary><Industries /></ErrorBoundary>
        <ErrorBoundary><Testimonials /></ErrorBoundary>
      </div>
      <div className="chapter-hero">
        <ErrorBoundary><FinalCTA /></ErrorBoundary>
      </div>
    </div>
  );
};

export default Home;
