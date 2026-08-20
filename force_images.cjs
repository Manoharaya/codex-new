const fs = require('fs');
const path = require('path');

const filePath = path.join('e:', 'cn', 'src', 'pages', 'Resources.jsx');
let content = fs.readFileSync(filePath, 'utf8');

// Replace all 4 images precisely
const lines = content.split('\n');
lines[125] = "    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'";
lines[135] = "    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'";
lines[145] = "    image: 'https://images.unsplash.com/photo-1504890001746-f203ad00fb68?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'";
lines[155] = "    image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'";

fs.writeFileSync(filePath, lines.join('\n'), 'utf8');
console.log("Successfully updated all 4 blueprint images.");
