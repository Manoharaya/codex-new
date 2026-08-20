const fs = require('fs');
const path = require('path');

const filePath = path.join('e:', 'cn', 'src', 'pages', 'Resources.jsx');
let content = fs.readFileSync(filePath, 'utf8');

const lines = content.split('\n');

// Topic 2: CLOUD DEVOPS
lines[135] = "    image: '/blueprints/cloud_cluster.jpg'";

// Topic 3: DATA PIPELINES
lines[145] = "    image: '/blueprints/data_pipeline.jpg'";

// Topic 4: SECURITY
lines[155] = "    image: '/blueprints/security_gateway.jpg'";

fs.writeFileSync(filePath, lines.join('\n'), 'utf8');
console.log("Successfully updated 3 blueprint images to custom local AI renders.");
