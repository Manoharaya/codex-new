const fs = require('fs');
const path = require('path');

const filePath = path.join('e:', 'cn', 'src', 'pages', 'Resources.css');
let content = fs.readFileSync(filePath, 'utf8');

const oldCssRegex = /\.ebook-cover-wrapper[\s\S]*?\.ebook-spine[\s\S]*?\}/g;

const newCss = `.blueprint-preview-wrapper {
  background: linear-gradient(145deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.01) 100%);
  padding: var(--space-24);
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid var(--glass-border);
}

.blueprint-preview {
  width: 100%;
  height: 240px;
  background-size: cover;
  background-position: center;
  border-radius: var(--radius-sm);
  box-shadow: 0 10px 20px rgba(0,0,0,0.2);
  position: relative;
  overflow: hidden;
  border: 1px solid var(--glass-border);
  transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.4s ease;
}

.blueprint-overlay {
  position: absolute;
  inset: 0;
  background: rgba(10, 10, 15, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0;
  transition: opacity 0.3s ease;
  backdrop-filter: blur(2px);
}

.overlay-text {
  font-family: 'IBM Plex Mono', monospace;
  font-size: 14px;
  font-weight: 700;
  color: #fff;
  letter-spacing: 2px;
  border: 1px solid rgba(255,255,255,0.5);
  padding: 8px 16px;
  border-radius: 4px;
  transform: translateY(10px);
  transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1);
}

.resource-ebook-card:hover .blueprint-preview {
  transform: scale(1.02);
  box-shadow: 0 15px 30px rgba(0,0,0,0.4);
}

.resource-ebook-card:hover .blueprint-overlay {
  opacity: 1;
}

.resource-ebook-card:hover .overlay-text {
  transform: translateY(0);
}`;

content = content.replace(oldCssRegex, newCss);
fs.writeFileSync(filePath, content, 'utf8');
console.log("Successfully updated Resources.css for Blueprints.");
