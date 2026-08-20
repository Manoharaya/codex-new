const fs = require('fs');
const path = require('path');

const filePath = path.join('e:', 'cn', 'src', 'pages', 'Resources.jsx');
let content = fs.readFileSync(filePath, 'utf8');

const newBlogsData = `const blogsData = [
  {
    id: 1,
    title: 'Architecting Resilient Multi-Agent AI Workflows in Production',
    category: 'AI & LLMS',
    date: 'Aug 14, 2026',
    readTime: '6 min read',
    author: { name: 'Manohar Singh', role: 'Chief Architect', avatar: 'https://ui-avatars.com/api/?name=Manohar+Singh&background=6F3FF5&color=fff' },
    excerpt: 'How to move beyond naive prompt-chaining and build autonomous agent graphs with state persistence, error boundaries, and tool fallback strategies for mission-critical apps.',
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 2,
    title: 'Zero-Downtime Microservices Scaling on Kubernetes & AWS',
    category: 'CLOUD & DEVOPS',
    date: 'Jul 28, 2026',
    readTime: '8 min read',
    author: { name: 'Priti Gupta', role: 'DevOps Lead', avatar: 'https://ui-avatars.com/api/?name=Priti+Gupta&background=22D3EE&color=000' },
    excerpt: 'A practical blueprint for configuring HPA, cluster autoscaling, and zero-drop connection draining under unpredictable surge loads in financial infrastructure.',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 3,
    title: 'RAG Optimization: Chunking Strategies for Domain-Specific LLMs',
    category: 'DATA ENGINEERING',
    date: 'Jun 30, 2026',
    readTime: '5 min read',
    author: { name: 'Bikash Sah', role: 'Data Engineer', avatar: 'https://ui-avatars.com/api/?name=Bikash+Sah&background=6F3FF5&color=fff' },
    excerpt: 'Benchmarking indexing speeds, HNSW precision, and cost efficiencies across vector databases to achieve sub-100ms retrieval latency in generative AI applications.',
    image: 'https://images.unsplash.com/photo-1544383835-bda2bc66a55d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 4,
    title: 'The Death of Monoliths: When (and Why) to Migrate to Event-Driven Systems',
    category: 'SOFTWARE ARCHITECTURE',
    date: 'Jul 12, 2026',
    readTime: '7 min read',
    author: { name: 'Anuj Pokharel', role: 'Senior Engineer', avatar: 'https://ui-avatars.com/api/?name=Anuj+Pokharel&background=22D3EE&color=000' },
    excerpt: 'Deconstructing real-world anti-patterns when decomposing legacy enterprise systems into resilient, Kafka-backed event streams without losing data integrity.',
    image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 5,
    title: 'Micro-Animations in Enterprise UI: Balancing Delight & Latency',
    category: 'UI/UX DESIGN',
    date: 'Jun 15, 2026',
    readTime: '4 min read',
    author: { name: 'Salon', role: 'Design Engineer', avatar: 'https://ui-avatars.com/api/?name=Salon&background=6F3FF5&color=fff' },
    excerpt: 'Engineering 60fps GPU-accelerated motion systems using Framer Motion and WebGL without sacrificing your initial bundle size or core web vitals.',
    image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 6,
    title: 'Securing API Gateways in Multi-Tenant SaaS Environments',
    category: 'CYBERSECURITY',
    date: 'May 28, 2026',
    readTime: '6 min read',
    author: { name: 'Rahul Sah', role: 'Security Architect', avatar: 'https://ui-avatars.com/api/?name=Rahul+Sah&background=22D3EE&color=000' },
    excerpt: 'Implementing robust JWT claims validation, distributed rate-limiting with Redis, and mutual TLS across federated endpoints to prevent data leakage.',
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  }
];`;

const startIdx = content.indexOf('const blogsData = [');
const endIdx = content.indexOf('const successStoriesData = [');

if (startIdx !== -1 && endIdx !== -1) {
  content = content.substring(0, startIdx) + newBlogsData + '\n\n' + content.substring(endIdx);
  fs.writeFileSync(filePath, content, 'utf8');
  console.log("Successfully replaced blogsData array.");
} else {
  console.log("Could not find blogsData or successStoriesData.");
}
