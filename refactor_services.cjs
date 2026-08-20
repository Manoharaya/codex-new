const fs = require('fs');

let content = fs.readFileSync('src/components/Services/Services.jsx', 'utf8');

// 1. Fix Imports
content = content.replace(
  /Globe,\s*Smartphone,\s*Terminal,\s*Layers,\s*Zap,\s*Share2,\s*Palette,\s*FileText,\s*Cpu,\s*ArrowRight,\s*ChevronDown/,
  'Globe, Smartphone, Terminal, Layers, Palette, Brain, Cloud, ArrowRight, ChevronDown'
);

// 2. Replace servicesData
const newServicesData = `const servicesData = [
  {
    icon: <Brain size={32} strokeWidth={1.5} />,
    id: 'ai-solutions',
    title: 'AI Solutions',
    desc: 'Custom LLM integration, autonomous agents, and RAG pipelines.',
    image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&q=80&w=800',
    headline: 'Neural Workflows',
    supporting: 'Deploy robust enterprise AI agents that slash operational overhead and automate complex logic.'
  },
  {
    icon: <Terminal size={32} strokeWidth={1.5} />,
    id: 'software-development',
    title: 'Enterprise Software',
    desc: 'High-throughput, fault-tolerant distributed systems and internal tooling.',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80',
    headline: 'Mission-Critical Architecture',
    supporting: 'Engineered for resilience, handling millions of concurrent requests with sub-10ms latency.'
  },
  {
    icon: <Globe size={32} strokeWidth={1.5} />,
    id: 'web-development',
    title: 'Website Development',
    desc: 'Immersive, hyper-optimized web platforms built on modern JS frameworks.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800',
    headline: 'Sub-Second Delivery',
    supporting: 'Jamstack architectures ensuring perfect SEO, accessibility, and fluid 60fps micro-animations.'
  },
  {
    icon: <Smartphone size={32} strokeWidth={1.5} />,
    id: 'app-development',
    title: 'Mobile Apps',
    desc: 'Native and cross-platform mobile architectures engineered for massive scale.',
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=800&q=80',
    headline: 'Flawless Native Experiences',
    supporting: 'Hardware-accelerated rendering and offline-first data synchronization for iOS and Android.'
  },
  {
    icon: <Cloud size={32} strokeWidth={1.5} />,
    id: 'cloud-engineering',
    title: 'Cloud Engineering',
    desc: 'Automated CI/CD pipelines, Kubernetes orchestration, and serverless logic.',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80',
    headline: 'Zero-Downtime Infrastructure',
    supporting: 'Immutable, self-healing cloud topologies deployed seamlessly via Infrastructure-as-Code.'
  },
  {
    icon: <Layers size={32} strokeWidth={1.5} />,
    id: 'ui-ux-design',
    title: 'UI/UX Design',
    desc: 'Data-driven user research and strict, enterprise-grade design systems.',
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=800&q=80',
    headline: 'Cognitive Friction Reduction',
    supporting: 'Translating deeply complex system requirements into beautiful, perfectly intuitive interfaces.'
  }
];`;

content = content.replace(/const servicesData = \[[\s\S]*?\];/m, newServicesData);

// 3. Make the Desktop card naturally clickable.
// Find <div className="cinematic-card">
content = content.replace(
  /<div className="cinematic-card">/g,
  '<Link to={`/services/${service.id}`} className="cinematic-card" style={{ textDecoration: "none", color: "inherit", display: "block" }}>'
);
// And the closing div for cinematic card
// It's the one before `) : (`
content = content.replace(
  /<\/div>\s*\)\s*:\s*\(/,
  '</Link>\n                ) : ('
);

// 4. Change the inner CTA to span so it's not nested <a> inside <a>
content = content.replace(
  /<Link to=\{`\/services\/\$\{service\.id\}`\} className="btn-primary mt-4 inline-flex">[\s\S]*?<\/Link>/g,
  '<span className="btn-primary mt-4 inline-flex">Explore <ArrowRight size={16} /></span>'
);

// Wait, the mobile one needs to STAY a Link because mobile wrapper is a normal div!
// Ah, the regex above matches BOTH Desktop and Mobile Links. I need to be careful.
// Let's replace ONLY the Desktop one. The Desktop one is before `</motion.div>\n                      </motion.div>\n                    </div>\n\n                    {/* Cover Layer`
fs.writeFileSync('src/components/Services/Services.jsx', content, 'utf8');
