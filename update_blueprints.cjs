const fs = require('fs');
const path = require('path');

const filePath = path.join('e:', 'cn', 'src', 'pages', 'Resources.jsx');
let content = fs.readFileSync(filePath, 'utf8');

// Replace the ebooksData array
const newEbooksData = `const ebooksData = [
  {
    id: 1,
    badge: 'LLM & AI SYSTEMS',
    title: 'Multi-Agent State Graph Architecture Blueprint',
    pages: 'System Diagram • Python • LangChain',
    description: 'A complete reference architecture detailing our setup for orchestrating 12 independent AI agents with real-time state persistence and tool fallback.',
    downloadUrl: '#',
    topics: ['Stateful Graphs', 'Redis Persistence', 'Semantic Routing', 'Vector DBs'],
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 2,
    badge: 'CLOUD DEVOPS',
    title: 'Zero-Downtime E-Commerce Cluster Topology',
    pages: 'Architecture Diagram • Terraform • Helm',
    description: 'High-res topology map demonstrating how we scale e-commerce infrastructure to 50k RPS with instant HPA triggers and Multi-AZ failover.',
    downloadUrl: '#',
    topics: ['HPA Configs', 'Ingress NGINX', 'Pod Disruption', 'PostgreSQL HA'],
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 3,
    badge: 'DATA PIPELINES',
    title: 'Real-Time Event Streaming Data Pipeline',
    pages: 'System Diagram • Kafka • ClickHouse',
    description: 'Detailed schema and data flow blueprint for migrating legacy batch processing into a sub-10ms latency event-driven architecture.',
    downloadUrl: '#',
    topics: ['Kafka Topics', 'ClickHouse', 'Debezium CDC', 'Event Sourcing'],
    image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 4,
    badge: 'SECURITY',
    title: 'Zero-Trust Multi-Tenant API Gateway',
    pages: 'Architecture Diagram • Redis • Lua',
    description: 'Actionable blueprint for implementing mTLS, distributed rate limiting, and aggressive JWT edge validation across federated SaaS endpoints.',
    downloadUrl: '#',
    topics: ['mTLS', 'Distributed Limiting', 'Identity Federation', 'Edge Compute'],
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  }
];`;

content = content.replace(/const ebooksData = \[[\s\S]*?\];/g, newEbooksData);

// 2. Change the Pillar UI from eBooks to Blueprints
content = content.replace(
  /<h3 className="pillar-title">eBooks<\/h3>/g,
  '<h3 className="pillar-title">Blueprints</h3>'
);

content = content.replace(
  /<p className="pillar-desc">\s*Explore the insights from our experts to take a strategic leap into your product development journey\s*<\/p>/g,
  '<p className="pillar-desc">Download production-grade system architectures, topology maps, and deployment configurations.</p>'
);

content = content.replace(
  /<span>View Whitepapers \(\{ebooksData\.length\}\)<\/span>/g,
  '<span>View Blueprints ({ebooksData.length})</span>'
);

// 3. Change Tab Nav
content = content.replace(
  /<BookOpen size=\{16\} \/> Guides & eBooks/g,
  '<BookOpen size={16} /> Architecture Blueprints'
);

// 4. Change Download Button Text
content = content.replace(
  /<Download size=\{13\} \/> Download PDF/g,
  '<Download size={13} /> Download Blueprint'
);

content = content.replace(
  /<Download size=\{13\} \/> Request Copy/g,
  '<Download size={13} /> Download Blueprint'
);

// We need to change the CSS class rendering in JSX to remove the 3D book spin effect and use a blueprint preview effect.
const oldEbookJsx = `                  <div className="ebook-cover-wrapper">
                    <div className="ebook-cover" style={{ backgroundImage: \`url(\${ebook.image})\` }}>
                      <div className="ebook-spine"></div>
                    </div>
                  </div>`;

const newEbookJsx = `                  <div className="blueprint-preview-wrapper">
                    <div className="blueprint-preview" style={{ backgroundImage: \`url(\${ebook.image})\` }}>
                      <div className="blueprint-overlay">
                        <span className="overlay-text">PREVIEW</span>
                      </div>
                    </div>
                  </div>`;

content = content.replace(oldEbookJsx, newEbookJsx);
content = content.replace(oldEbookJsx, newEbookJsx);
content = content.replace(oldEbookJsx, newEbookJsx);
content = content.replace(oldEbookJsx, newEbookJsx);
content = content.replace(/ebook-cover/g, 'blueprint-preview');

fs.writeFileSync(filePath, content, 'utf8');
console.log("Successfully updated Resources.jsx for Blueprints.");
