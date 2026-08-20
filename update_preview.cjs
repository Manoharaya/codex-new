const fs = require('fs');
const path = require('path');

const filePath = path.join('e:', 'cn', 'src', 'pages', 'Resources.jsx');
let content = fs.readFileSync(filePath, 'utf8');

// 1. Remove the PREVIEW overlay from JSX
const oldJsx = `<div className="blueprint-preview" style={{ backgroundImage: \`url(\${ebook.image})\` }}>
                      <div className="blueprint-overlay">
                        <span className="overlay-text">PREVIEW</span>
                      </div>
                    </div>`;

const newJsx = `<div className="blueprint-preview" style={{ backgroundImage: \`url(\${ebook.image})\` }}>
                    </div>`;

content = content.replace(oldJsx, newJsx);

// 2. Replace the old unsplash images with fresh ones
content = content.replace(
  "image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'",
  "image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'" // Tech board
);

content = content.replace(
  "image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'",
  "image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'" // Data networking abstract
);

content = content.replace(
  "image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'",
  "image: 'https://images.unsplash.com/photo-1504890001746-f203ad00fb68?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'" // Abstract lines
);

content = content.replace(
  "image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'",
  "image: 'https://images.unsplash.com/photo-1523961131990-521072f16e6e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'" // Security/Data nodes
);

fs.writeFileSync(filePath, content, 'utf8');
console.log("Successfully removed PREVIEW overlay and updated images.");
