const fs = require('fs');
const path = require('path');

const filePath = path.join('e:', 'cn', 'src', 'pages', 'Resources.jsx');
let content = fs.readFileSync(filePath, 'utf8');

// 1. Add images to ebooksData
content = content.replace(
  "topics: ['Agentic Workflows', 'LLM Fine-Tuning & Quantization', 'Security & Guardrails', 'Infrastructure Cost Modeling']",
  "topics: ['Agentic Workflows', 'LLM Fine-Tuning & Quantization', 'Security & Guardrails', 'Infrastructure Cost Modeling'],\n    image: 'https://images.unsplash.com/photo-1620121692029-d088224ddc74?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'"
);

content = content.replace(
  "topics: ['FinOps Cloud Auditing', 'Container Packing & Spot Instances', 'Multi-Region Ingress', 'Automated Failover']",
  "topics: ['FinOps Cloud Auditing', 'Container Packing & Spot Instances', 'Multi-Region Ingress', 'Automated Failover'],\n    image: 'https://images.unsplash.com/photo-1550684848-fac1c5b4e853?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'"
);

content = content.replace(
  "topics: ['Design Tokens 2.0', 'Micro-Interactions', 'Component Maintenance', 'React / Tailwind Translation']",
  "topics: ['Design Tokens 2.0', 'Micro-Interactions', 'Component Maintenance', 'React / Tailwind Translation'],\n    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'"
);

content = content.replace(
  "topics: ['Prompt Injection Defense', 'mTLS & Service Meshes', 'Identity Verification', 'Federated GraphQL Security']",
  "topics: ['Prompt Injection Defense', 'mTLS & Service Meshes', 'Identity Verification', 'Federated GraphQL Security'],\n    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'"
);

// 2. Modify the JSX rendering for ebooks
const oldEbookJsx = `{ebooksData.map((ebook) => (
                <div key={ebook.id} className="resource-ebook-card">
                  <span className="ebook-type-badge">{ebook.badge}</span>
                  <h3 className="ebook-title">{ebook.title}</h3>
                  <p className="ebook-desc">{ebook.description}</p>
                  
                  <div style={{ marginBottom: 'var(--space-16)' }}>
                    <span style={{ fontSize: '11px', fontFamily: 'IBM Plex Mono, monospace', color: 'var(--text-secondary)', textTransform: 'uppercase', display: 'block', marginBottom: 6 }}>
                      Key Focus Areas:
                    </span>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                      {ebook.topics.map((topic, tIdx) => (
                        <span key={tIdx} style={{ fontSize: '11px', padding: '2px 8px', background: 'rgba(255,255,255,0.05)', borderRadius: '4px', color: 'var(--text-primary)' }}>
                          {topic}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="ebook-footer">
                    <span className="ebook-pages-info">{ebook.pages}</span>
                    <a href="mailto:connect@codexneural.com?subject=Request%20eBook:%20" className="btn-secondary" style={{ padding: '6px 14px', fontSize: '13px' }}>
                      <Download size={13} /> Request Copy
                    </a>
                  </div>
                </div>
              ))}`;

const newEbookJsx = `{ebooksData.map((ebook) => (
                <div key={ebook.id} className="resource-ebook-card">
                  
                  <div className="ebook-cover-wrapper">
                    <div className="ebook-cover" style={{ backgroundImage: \`url(\${ebook.image})\` }}>
                      <div className="ebook-spine"></div>
                    </div>
                  </div>

                  <div className="ebook-content-wrapper">
                    <span className="ebook-type-badge">{ebook.badge}</span>
                    <h3 className="ebook-title">{ebook.title}</h3>
                    <p className="ebook-desc">{ebook.description}</p>
                    
                    <div className="ebook-topics-wrapper" style={{ marginBottom: 'var(--space-16)' }}>
                      <span style={{ fontSize: '11px', fontFamily: 'IBM Plex Mono, monospace', color: 'var(--text-secondary)', textTransform: 'uppercase', display: 'block', marginBottom: 6 }}>
                        Key Focus Areas:
                      </span>
                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                        {ebook.topics.map((topic, tIdx) => (
                          <span key={tIdx} style={{ fontSize: '11px', padding: '2px 8px', background: 'rgba(255,255,255,0.05)', borderRadius: '4px', color: 'var(--text-primary)' }}>
                            {topic}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="ebook-footer">
                      <span className="ebook-pages-info">{ebook.pages}</span>
                      <a href="mailto:connect@codexneural.com?subject=Request%20eBook:%20" className="btn-secondary" style={{ padding: '6px 14px', fontSize: '13px' }}>
                        <Download size={13} /> Download PDF
                      </a>
                    </div>
                  </div>
                </div>
              ))}`;

content = content.replace(oldEbookJsx, newEbookJsx);

fs.writeFileSync(filePath, content, 'utf8');
console.log("Successfully updated ebooksData and JSX.");
