const fs = require('fs');
const path = require('path');

const filePath = path.join('e:', 'cn', 'src', 'pages', 'Resources.css');
let content = fs.readFileSync(filePath, 'utf8');

const oldEbookCssRegex = /\/\* eBook Cards \*\/(.|\n)*?\/\* 5\. Newsletter Banner \*\//;

const newEbookCss = `/* eBook Cards */
.resource-ebook-card {
  background: var(--bg-surface);
  border: 1px solid var(--glass-border);
  border-radius: var(--radius-card);
  padding: 0;
  display: flex;
  flex-direction: column;
  transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
  position: relative;
  overflow: hidden;
}

.resource-ebook-card:hover {
  border-color: var(--brand-cyan);
  transform: translateY(-6px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4);
}

.ebook-cover-wrapper {
  background: linear-gradient(145deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.01) 100%);
  padding: var(--space-40) var(--space-32);
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid var(--glass-border);
  perspective: 1000px;
}

.ebook-cover {
  width: 160px;
  height: 220px;
  background-size: cover;
  background-position: center;
  border-radius: 4px 12px 12px 4px;
  box-shadow: 
    inset 4px 0 10px rgba(0,0,0,0.5), 
    inset -1px 0 2px rgba(255,255,255,0.3),
    15px 15px 30px rgba(0,0,0,0.6);
  position: relative;
  transform: rotateY(-15deg);
  transition: transform 0.5s cubic-bezier(0.16, 1, 0.3, 1);
}

.resource-ebook-card:hover .ebook-cover {
  transform: rotateY(0deg) scale(1.05);
  box-shadow: 
    inset 4px 0 10px rgba(0,0,0,0.3), 
    inset -1px 0 2px rgba(255,255,255,0.3),
    0 20px 40px rgba(0,0,0,0.8);
}

.ebook-spine {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  width: 14px;
  background: linear-gradient(90deg, rgba(255,255,255,0.2) 0%, rgba(0,0,0,0.2) 10%, rgba(255,255,255,0.1) 20%, rgba(0,0,0,0.4) 100%);
  border-radius: 4px 0 0 4px;
  border-right: 1px solid rgba(0,0,0,0.5);
}

.ebook-content-wrapper {
  padding: var(--space-32);
  display: flex;
  flex-direction: column;
  flex: 1;
}

.ebook-type-badge {
  display: inline-block;
  align-self: flex-start;
  font-size: 11px;
  font-family: 'IBM Plex Mono', monospace;
  padding: 4px 12px;
  background: linear-gradient(90deg, rgba(0, 240, 255, 0.15), rgba(111, 63, 245, 0.15));
  border: 1px solid rgba(0, 240, 255, 0.3);
  border-radius: 999px;
  color: var(--brand-cyan);
  text-transform: uppercase;
  margin-bottom: var(--space-16);
  letter-spacing: 1px;
  font-weight: 600;
}

[data-theme='light'] .ebook-type-badge {
  background: linear-gradient(90deg, rgba(111, 63, 245, 0.1), rgba(0, 240, 255, 0.1));
  border-color: rgba(111, 63, 245, 0.3);
  color: var(--brand-purple);
}

.ebook-title {
  font-size: var(--text-h4);
  font-weight: 700;
  color: var(--text-primary);
  line-height: 1.35;
  margin-bottom: var(--space-12);
  letter-spacing: -0.01em;
}

.ebook-desc {
  font-size: var(--text-body-sm);
  color: var(--text-secondary);
  line-height: 1.6;
  margin-bottom: var(--space-20);
}

.ebook-footer {
  margin-top: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: var(--space-20);
  border-top: 1px solid var(--glass-border);
}

.ebook-pages-info {
  font-size: var(--text-caption);
  color: var(--text-secondary);
  font-family: 'IBM Plex Mono', monospace;
}

/* 5. Newsletter Banner */`;

if (oldEbookCssRegex.test(content)) {
  content = content.replace(oldEbookCssRegex, newEbookCss);
  fs.writeFileSync(filePath, content, 'utf8');
  console.log("Successfully updated eBook CSS.");
} else {
  console.log("Could not find eBook CSS block.");
}
