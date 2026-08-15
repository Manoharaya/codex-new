export const caseStudiesData = [
  {
    slug: "novahealth-diagnostics-ai",
    title: "NovaHealth Diagnostics",
    category: "AI & AUTOMATION",
    industry: "Healthcare",
    heroImage: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1400&q=80",
    essence: "Reducing manual patient data operations from hours to minutes through intelligent AI automation.",
    challenge: "NovaHealth was overwhelmed by manual patient intake and diagnostic sorting. Their staff spent 60% of their time on administrative data entry rather than patient care, leading to massive bottlenecks and potential critical errors in diagnostic routing.",
    approach: "We recognized that traditional OCR wouldn't be enough for complex medical records. We architected a solution that combined strict security protocols with advanced Large Language Models capable of understanding clinical context, ensuring both speed and compliance.",
    solution: "We engineered an intelligent, HIPAA-compliant ecosystem powered by custom LLMs and OCR. The system automatically ingests, categorizes, and routes patient documents, while an intuitive clinical dashboard provides doctors with instant, AI-summarized patient histories.",
    technologies: ["React", "Python", "OpenAI", "AWS HIPAA", "PostgreSQL"],
    services: ["AI Solutions", "Software Development", "Cloud Engineering"],
    metrics: [
      { value: "400%", label: "Processing Speed" },
      { value: "60%", label: "Admin Time Saved" },
      { value: "99.9%", label: "Data Accuracy" }
    ],
    theme: "theme-purple"
  },
  {
    slug: "nexus-global-banking-cloud",
    title: "Nexus Global Banking",
    category: "CLOUD & DEVOPS",
    industry: "Finance",
    heroImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1400&q=80",
    essence: "Transforming a fragmented legacy banking platform into a unified, scalable cloud-first ecosystem.",
    challenge: "Nexus Global was operating on a 15-year-old monolithic architecture that was slow to scale and difficult to maintain. Customer experience was suffering due to app crashes, slow load times, and a deeply fragmented user interface across different banking products.",
    approach: "A rip-and-replace strategy was too risky for an active banking system. Instead, we utilized the strangler fig pattern, gradually breaking down the monolith into microservices while building a modern, unified design system for the frontend.",
    solution: "We orchestrated a complete digital transformation. We broke down the monolith into microservices, built a unified design system, and deployed a blazing-fast React Native mobile application alongside a Next.js web portal, completely revitalizing their digital presence.",
    technologies: ["Next.js", "React Native", "Go", "Docker", "Azure"],
    services: ["Web Development", "Mobile App Development", "Cloud Engineering"],
    metrics: [
      { value: "3x", label: "Faster Load Times" },
      { value: "85%", label: "Mobile Adoption" },
      { value: "0", label: "Downtime (YTD)" }
    ],
    theme: "theme-blue"
  },
  {
    slug: "aerofleet-logistics-software",
    title: "AeroFleet Logistics",
    category: "SOFTWARE",
    industry: "Enterprise",
    heroImage: "https://images.unsplash.com/photo-1586528116311-ad8ed7c83a56?ixlib=rb-4.0.3&auto=format&fit=crop&w=1400&q=80",
    essence: "Engineering a real-time global supply chain tracker capable of processing millions of data points daily.",
    challenge: "AeroFleet struggled with supply chain visibility. Their global fleet generated massive amounts of telemetry data, but their existing systems couldn't process or visualize it in real-time, resulting in severe logistical delays and wasted fuel.",
    approach: "The core issue was data ingestion limits and rendering performance. We designed a highly resilient event-driven cloud architecture for the backend, paired with WebGL on the frontend to handle rendering thousands of real-time nodes without browser freezing.",
    solution: "We built a high-performance cloud architecture capable of ingesting millions of IoT data points per second. We paired this with a stunning WebGL-powered tracking dashboard that gives dispatchers real-time, predictive insights into global fleet movements.",
    technologies: ["Vue.js", "Node.js", "AWS IoT", "MongoDB", "WebGL"],
    services: ["Software Development", "Cloud Engineering", "UI/UX Design"],
    metrics: [
      { value: "2M+", label: "Events/Second" },
      { value: "15%", label: "Fuel Saved" },
      { value: "30%", label: "Delivery Speed" }
    ],
    theme: "theme-emerald"
  }
];

export const caseStudyCategories = [
  "ALL",
  "AI & AUTOMATION",
  "SOFTWARE",
  "WEB",
  "MOBILE",
  "CLOUD & DEVOPS",
  "DESIGN",
  "DIGITAL"
];
