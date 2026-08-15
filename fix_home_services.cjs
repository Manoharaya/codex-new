const fs = require('fs');
const path = require('path');

const filePath = path.join('e:', 'cn', 'src', 'components', 'Services', 'Services.jsx');
let content = fs.readFileSync(filePath, 'utf8');

// Add IDs to each object in servicesData array using string replacement
content = content.replace("title: 'Website Development',", "id: 'web-development',\n    title: 'Website Development',");
content = content.replace("title: 'App Development',", "id: 'app-development',\n    title: 'App Development',");
content = content.replace("title: 'System/Software Development',", "id: 'software-development',\n    title: 'System/Software Development',");
content = content.replace("title: 'UI/UX Design',", "id: 'ui-ux-design',\n    title: 'UI/UX Design',");
content = content.replace("title: 'Search Engine Optimization (SEO)',", "id: 'technical-seo',\n    title: 'Search Engine Optimization (SEO)',");
content = content.replace("title: 'Social Media Marketing (SMM)',", "id: 'digital-marketing',\n    title: 'Social Media Marketing (SMM)',");
content = content.replace("title: 'Graphic Design',", "id: 'graphic-design',\n    title: 'Graphic Design',");
content = content.replace("title: 'Content Writing',", "id: 'content-writing',\n    title: 'Content Writing',");
content = content.replace("title: 'Blockchain & Web3 Development',", "id: 'blockchain-web3',\n    title: 'Blockchain & Web3 Development',");

// Replace the Link destinations using regex
content = content.replace(/<Link to="\/services" className="btn-primary mt-4 inline-flex">/g, '<Link to={/services/\} className="btn-primary mt-4 inline-flex">');
content = content.replace(/<Link to="\/services" className="btn-primary mt-2">/g, '<Link to={/services/\} className="btn-primary mt-2">');

fs.writeFileSync(filePath, content, 'utf8');
