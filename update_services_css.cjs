const fs = require('fs');
let css = fs.readFileSync('src/components/Services/Services.css', 'utf8');

// Change grid to 2 columns
css = css.replace('grid-template-columns: repeat(3, 1fr);', 'grid-template-columns: repeat(2, 1fr);');

// Increase card height for desktop
css = css.replace('height: 400px;', 'height: 460px;');

// Add new classes at the bottom
const additionalCSS = `

/* Category Navigator Additions */
.cover-subservices {
  list-style: none;
  padding: 0;
  margin: var(--space-8) 0 var(--space-24) 0;
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.cover-subservice-item {
  color: var(--text-secondary);
  font-size: 14px;
  display: flex;
  align-items: center;
}

.cover-subservice-item::before {
  content: "•";
  margin-right: 8px;
  color: var(--brand-purple);
  opacity: 0.7;
}

.cinematic-subservices {
  list-style: none;
  padding: 0;
  margin: var(--space-8) 0 var(--space-24) 0;
  display: flex;
  flex-direction: column;
  gap: var(--space-8);
  width: 100%;
}

.cinematic-subservice-link {
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: rgba(255, 255, 255, 0.9);
  text-decoration: none;
  font-size: 15px;
  padding: 8px 12px;
  border-radius: var(--radius-sm);
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: all 0.2s ease;
  width: 100%;
}

.cinematic-subservice-link:hover {
  background: rgba(255, 255, 255, 0.15);
  border-color: rgba(255, 255, 255, 0.3);
  color: #ffffff;
  transform: translateX(4px);
}

.mobile-subservices {
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 100%;
  margin-top: var(--space-16);
  margin-bottom: var(--space-24);
}

.mobile-subservice-link {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 14px 16px;
  background: var(--glass-border);
  border-radius: var(--radius-sm);
  color: var(--text-primary);
  text-decoration: none;
  font-size: 15px;
  font-weight: 500;
  min-height: 48px;
}

.mobile-subservice-link:active {
  background: var(--glass-border-hover);
}
`;

fs.writeFileSync('src/components/Services/Services.css', css + additionalCSS);
