import React from 'react';
import SEO from '../components/SEO/SEO';
import FinalCTA from '../components/FinalCTA/FinalCTA';
import PortfolioHero from '../components/Portfolio/PortfolioHero';
import PortfolioFeatured from '../components/Portfolio/PortfolioFeatured';
import PortfolioShowcase from '../components/Portfolio/PortfolioShowcase';
import PortfolioCapability from '../components/Portfolio/PortfolioCapability';
import PortfolioGlobal from '../components/Portfolio/PortfolioGlobal';
import { portfolioData } from '../data/portfolioData';

const Portfolio = () => {
  // Separate the featured project (Life Science AI) from the rest for layout purposes
  const featuredProject = portfolioData.find(p => p.id === 'life-science-ai');
  const showcaseProjects = portfolioData.filter(p => p.id !== 'life-science-ai');

  return (
    <>
      <SEO 
        title="Selected Work | Codex Neural"
        description="Explore the digital systems, AI platforms, and web experiences built by Codex Neural for real businesses across the globe."
      />

      <div className="portfolio-page-wrapper">
        <PortfolioHero />
        
        {/* Featured Project */}
        {featuredProject && (
          <PortfolioFeatured project={featuredProject} />
        )}

        {/* Other Projects */}
        <PortfolioShowcase projects={showcaseProjects} />

        {/* Capability Overview */}
        <PortfolioCapability />

        {/* Global Reach */}
        <PortfolioGlobal />

        <FinalCTA />
      </div>
    </>
  );
};

export default Portfolio;
