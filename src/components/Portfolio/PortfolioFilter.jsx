import React from 'react';
import './PortfolioComponents.css';
import { portfolioCategories } from '../../data/portfolioData';

const PortfolioFilter = ({ activeCategory, setActiveCategory }) => {
  return (
    <div className="portfolio-filter-container">
      <div className="container">
        <div className="portfolio-filter-scroll">
          <ul className="portfolio-filter-list">
            {portfolioCategories.map((cat) => (
              <li key={cat}>
                <button 
                  className={`portfolio-filter-btn ${activeCategory === cat ? 'active' : ''}`}
                  onClick={() => setActiveCategory(cat)}
                  aria-pressed={activeCategory === cat}
                >
                  {cat}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PortfolioFilter;
