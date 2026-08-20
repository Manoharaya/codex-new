const fs = require('fs');
const path = require('path');

const filePath = path.join('e:', 'cn', 'src', 'pages', 'Resources.jsx');
let content = fs.readFileSync(filePath, 'utf8');

// Update download URLs
content = content.replace(
  "downloadUrl: '#',",
  "downloadUrl: '/blueprints/multi-agent-blueprint.md',"
);

content = content.replace(
  "downloadUrl: '#',",
  "downloadUrl: '/blueprints/k8s-cluster-topology.md',"
);

content = content.replace(
  "downloadUrl: '#',",
  "downloadUrl: '/blueprints/event-streaming-pipeline.md',"
);

content = content.replace(
  "downloadUrl: '#',",
  "downloadUrl: '/blueprints/zero-trust-gateway.md',"
);

// Update button JSX
const oldBtn = `<a href="mailto:connect@codexneural.com?subject=Request%20Blueprint:%20" className="btn-secondary" style={{ padding: '6px 14px', fontSize: '13px' }}>
                        <Download size={13} /> Download
                      </a>`;

const newBtn = `<a href={ebook.downloadUrl} download className="btn-secondary" style={{ padding: '6px 14px', fontSize: '13px' }}>
                        <Download size={13} /> Download Config
                      </a>`;

content = content.replace(oldBtn, newBtn);

fs.writeFileSync(filePath, content, 'utf8');
console.log("Successfully updated Resources.jsx download links.");
