const fs = require('fs');
const path = require('path');

const filePath = path.join('e:', 'cn', 'src', 'pages', 'Resources.css');
let content = fs.readFileSync(filePath, 'utf8');

// Remove the overlay CSS blocks
const cssToRemove = /\.blueprint-overlay \{[\s\S]*?\}\s*\.overlay-text \{[\s\S]*?\}\s*\.resource-ebook-card:hover \.blueprint-preview \{[\s\S]*?\}\s*\.resource-ebook-card:hover \.blueprint-overlay \{[\s\S]*?\}\s*\.resource-ebook-card:hover \.overlay-text \{[\s\S]*?\}/;

// Wait, the hover on blueprint-preview is useful (transform scale(1.02)). So let me only remove the overlay related ones.
// Let's just do precise replacements.

content = content.replace(/\.blueprint-overlay \{[\s\S]*?\}/, '');
content = content.replace(/\.overlay-text \{[\s\S]*?\}/, '');
content = content.replace(/\.resource-ebook-card:hover \.blueprint-overlay \{[\s\S]*?\}/, '');
content = content.replace(/\.resource-ebook-card:hover \.overlay-text \{[\s\S]*?\}/, '');

fs.writeFileSync(filePath, content, 'utf8');
console.log("Successfully cleaned up Resources.css.");
