const fs = require('fs');
const path = require('path');

const filePath = path.join('e:', 'cn', 'src', 'pages', 'Resources.jsx');
let content = fs.readFileSync(filePath, 'utf8');

const lines = content.split('\n');

// Update Topic 2: CLOUD DEVOPS
lines[135] = "    image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'";

// Update Topic 3: DATA PIPELINES
lines[145] = "    image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'";

// Update Topic 4: SECURITY
lines[155] = "    image: 'https://images.unsplash.com/photo-1614064641983-4ecc4629b14c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'";

fs.writeFileSync(filePath, lines.join('\n'), 'utf8');
console.log("Successfully updated 3 blueprint images.");
