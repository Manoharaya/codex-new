const fs = require('fs');
const path = require('path');

const filePath = path.join('e:', 'cn', 'src', 'components', 'Navbar', 'Navbar.jsx');
let content = fs.readFileSync(filePath, 'utf8');

// Replacements for megamenu
content = content.replace(/<Link to="\/services" className="megamenu-item">\s*<div className="megamenu-icon"><Brain[^>]+><\/div>\s*<div className="megamenu-text">\s*<h5>AI Solutions<\/h5>/g, '<Link to="/services/ai-solutions" className="megamenu-item">\n                    <div className="megamenu-icon"><Brain size={20} /></div>\n                    <div className="megamenu-text">\n                      <h5>AI Solutions</h5>');

content = content.replace(/<Link to="\/services" className="megamenu-item">\s*<div className="megamenu-icon"><Code[^>]+><\/div>\s*<div className="megamenu-text">\s*<h5>Enterprise Software<\/h5>/g, '<Link to="/services/software-development" className="megamenu-item">\n                    <div className="megamenu-icon"><Code size={20} /></div>\n                    <div className="megamenu-text">\n                      <h5>Enterprise Software</h5>');

content = content.replace(/<Link to="\/services" className="megamenu-item">\s*<div className="megamenu-icon"><Layout[^>]+><\/div>\s*<div className="megamenu-text">\s*<h5>Website Development<\/h5>/g, '<Link to="/services/web-development" className="megamenu-item">\n                    <div className="megamenu-icon"><Layout size={20} /></div>\n                    <div className="megamenu-text">\n                      <h5>Website Development</h5>');

content = content.replace(/<Link to="\/services" className="megamenu-item">\s*<div className="megamenu-icon"><Smartphone[^>]+><\/div>\s*<div className="megamenu-text">\s*<h5>Mobile Apps<\/h5>/g, '<Link to="/services/app-development" className="megamenu-item">\n                    <div className="megamenu-icon"><Smartphone size={20} /></div>\n                    <div className="megamenu-text">\n                      <h5>Mobile Apps</h5>');

content = content.replace(/<Link to="\/services" className="megamenu-item">\s*<div className="megamenu-icon"><Hexagon[^>]+><\/div>\s*<div className="megamenu-text">\s*<h5>Blockchain & Web3<\/h5>/g, '<Link to="/services/blockchain-web3" className="megamenu-item">\n                    <div className="megamenu-icon"><Hexagon size={20} /></div>\n                    <div className="megamenu-text">\n                      <h5>Blockchain & Web3</h5>');

content = content.replace(/<Link to="\/services" className="megamenu-item">\s*<div className="megamenu-icon"><Cloud[^>]+><\/div>\s*<div className="megamenu-text">\s*<h5>Cloud Engineering<\/h5>/g, '<Link to="/services/cloud-engineering" className="megamenu-item">\n                    <div className="megamenu-icon"><Cloud size={20} /></div>\n                    <div className="megamenu-text">\n                      <h5>Cloud Engineering</h5>');

content = content.replace(/<Link to="\/services" className="megamenu-item">\s*<div className="megamenu-icon"><Terminal[^>]+><\/div>\s*<div className="megamenu-text">\s*<h5>DevOps<\/h5>/g, '<Link to="/services/devops" className="megamenu-item">\n                    <div className="megamenu-icon"><Terminal size={20} /></div>\n                    <div className="megamenu-text">\n                      <h5>DevOps</h5>');

content = content.replace(/<Link to="\/services" className="megamenu-item">\s*<div className="megamenu-icon"><Palette[^>]+><\/div>\s*<div className="megamenu-text">\s*<h5>UI\/UX Design<\/h5>/g, '<Link to="/services/ui-ux-design" className="megamenu-item">\n                    <div className="megamenu-icon"><Palette size={20} /></div>\n                    <div className="megamenu-text">\n                      <h5>UI/UX Design</h5>');

content = content.replace(/<Link to="\/services" className="megamenu-item">\s*<div className="megamenu-icon"><PenTool[^>]+><\/div>\s*<div className="megamenu-text">\s*<h5>Graphic Design<\/h5>/g, '<Link to="/services/graphic-design" className="megamenu-item">\n                    <div className="megamenu-icon"><PenTool size={20} /></div>\n                    <div className="megamenu-text">\n                      <h5>Graphic Design</h5>');

content = content.replace(/<Link to="\/services" className="megamenu-item">\s*<div className="megamenu-icon"><Search[^>]+><\/div>\s*<div className="megamenu-text">\s*<h5>Search Engine Optimization<\/h5>/g, '<Link to="/services/technical-seo" className="megamenu-item">\n                    <div className="megamenu-icon"><Search size={20} /></div>\n                    <div className="megamenu-text">\n                      <h5>Search Engine Optimization</h5>');

content = content.replace(/<Link to="\/services" className="megamenu-item">\s*<div className="megamenu-icon"><Share2[^>]+><\/div>\s*<div className="megamenu-text">\s*<h5>Social Media Marketing<\/h5>/g, '<Link to="/services/digital-marketing" className="megamenu-item">\n                    <div className="megamenu-icon"><Share2 size={20} /></div>\n                    <div className="megamenu-text">\n                      <h5>Social Media Marketing</h5>');

content = content.replace(/<Link to="\/services" className="megamenu-item">\s*<div className="megamenu-icon"><FileText[^>]+><\/div>\s*<div className="megamenu-text">\s*<h5>Content Writing<\/h5>/g, '<Link to="/services/content-writing" className="megamenu-item">\n                    <div className="megamenu-icon"><FileText size={20} /></div>\n                    <div className="megamenu-text">\n                      <h5>Content Writing</h5>');

// Accordions
content = content.replace(/<Link to="\/services" className="accordion-link" onClick=\{\(\) => setIsMobileMenuOpen\(false\)\}>AI Solutions<\/Link>/g, '<Link to="/services/ai-solutions" className="accordion-link" onClick={() => setIsMobileMenuOpen(false)}>AI Solutions</Link>');
content = content.replace(/<Link to="\/services" className="accordion-link" onClick=\{\(\) => setIsMobileMenuOpen\(false\)\}>Enterprise Software<\/Link>/g, '<Link to="/services/software-development" className="accordion-link" onClick={() => setIsMobileMenuOpen(false)}>Enterprise Software</Link>');
content = content.replace(/<Link to="\/services" className="accordion-link" onClick=\{\(\) => setIsMobileMenuOpen\(false\)\}>Website Development<\/Link>/g, '<Link to="/services/web-development" className="accordion-link" onClick={() => setIsMobileMenuOpen(false)}>Website Development</Link>');
content = content.replace(/<Link to="\/services" className="accordion-link" onClick=\{\(\) => setIsMobileMenuOpen\(false\)\}>Mobile Apps<\/Link>/g, '<Link to="/services/app-development" className="accordion-link" onClick={() => setIsMobileMenuOpen(false)}>Mobile Apps</Link>');
content = content.replace(/<Link to="\/services" className="accordion-link" onClick=\{\(\) => setIsMobileMenuOpen\(false\)\}>Blockchain & Web3<\/Link>/g, '<Link to="/services/blockchain-web3" className="accordion-link" onClick={() => setIsMobileMenuOpen(false)}>Blockchain & Web3</Link>');
content = content.replace(/<Link to="\/services" className="accordion-link" onClick=\{\(\) => setIsMobileMenuOpen\(false\)\}>Cloud Engineering<\/Link>/g, '<Link to="/services/cloud-engineering" className="accordion-link" onClick={() => setIsMobileMenuOpen(false)}>Cloud Engineering</Link>');
content = content.replace(/<Link to="\/services" className="accordion-link" onClick=\{\(\) => setIsMobileMenuOpen\(false\)\}>DevOps<\/Link>/g, '<Link to="/services/devops" className="accordion-link" onClick={() => setIsMobileMenuOpen(false)}>DevOps</Link>');
content = content.replace(/<Link to="\/services" className="accordion-link" onClick=\{\(\) => setIsMobileMenuOpen\(false\)\}>UI\/UX Design<\/Link>/g, '<Link to="/services/ui-ux-design" className="accordion-link" onClick={() => setIsMobileMenuOpen(false)}>UI/UX Design</Link>');
content = content.replace(/<Link to="\/services" className="accordion-link" onClick=\{\(\) => setIsMobileMenuOpen\(false\)\}>Graphic Design<\/Link>/g, '<Link to="/services/graphic-design" className="accordion-link" onClick={() => setIsMobileMenuOpen(false)}>Graphic Design</Link>');
content = content.replace(/<Link to="\/services" className="accordion-link" onClick=\{\(\) => setIsMobileMenuOpen\(false\)\}>Search Engine Optimization<\/Link>/g, '<Link to="/services/technical-seo" className="accordion-link" onClick={() => setIsMobileMenuOpen(false)}>Search Engine Optimization</Link>');
content = content.replace(/<Link to="\/services" className="accordion-link" onClick=\{\(\) => setIsMobileMenuOpen\(false\)\}>Social Media Marketing<\/Link>/g, '<Link to="/services/digital-marketing" className="accordion-link" onClick={() => setIsMobileMenuOpen(false)}>Social Media Marketing</Link>');
content = content.replace(/<Link to="\/services" className="accordion-link" onClick=\{\(\) => setIsMobileMenuOpen\(false\)\}>Content Writing<\/Link>/g, '<Link to="/services/content-writing" className="accordion-link" onClick={() => setIsMobileMenuOpen(false)}>Content Writing</Link>');

fs.writeFileSync(filePath, content, 'utf8');
