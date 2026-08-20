const fs = require('fs');
const path = require('path');

const filePath = path.join('e:', 'cn', 'src', 'pages', 'Resources.css');
let content = fs.readFileSync(filePath, 'utf8');

const regex = /@media\s*\(max-width:\s*768px\)\s*\{/;
const newMedia = `@media (max-width: 768px) {
  .resources-tabs-nav {
    display: none;
  }`;

content = content.replace(regex, newMedia);

fs.writeFileSync(filePath, content, 'utf8');
console.log("Successfully hid .resources-tabs-nav on mobile.");
