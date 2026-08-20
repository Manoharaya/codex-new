const fs = require('fs');
const path = require('path');

const filePath = path.join('e:', 'cn', 'src', 'pages', 'Careers.jsx');
let content = fs.readFileSync(filePath, 'utf8');

// 1. Remove stats row
content = content.replace(/<motion\.div\s+className="careers-stats-row"[\s\S]*?<\/motion\.div>/, '');

// 2. Remove Culture section
content = content.replace(/\{\/\* 2\. Culture & Engineering Values \*\/\}[\s\S]*?<\/section>/, '');

// 3. Remove Benefits section
content = content.replace(/\{\/\* 3\. Perks & Benefits \*\/\}[\s\S]*?<\/section>/, '');

fs.writeFileSync(filePath, content, 'utf8');
console.log("Successfully minimized Careers page content.");
