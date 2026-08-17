import { Brain, Code, Cloud, Layout, Smartphone, Terminal } from 'lucide-react';
import React from 'react';

export const servicesData = [
  {
    id: 'ai-solutions',
    name: 'AI Solutions',
    shortLabel: 'AI',
    icon: <Brain size={16} />,
    context: 'From data to intelligent action.',
    visualType: 'ai',
    animationType: 'flow',
    workflowStages: ['User Request', 'Data Processing', 'AI Model', 'Decision', 'Result']
  },
  {
    id: 'enterprise-software',
    name: 'Enterprise Software',
    shortLabel: 'Enterprise',
    icon: <Code size={16} />,
    context: 'Architecture built for complexity.',
    visualType: 'enterprise',
    animationType: 'cycle',
    workflowStages: ['Application', 'API', 'Business Logic', 'Database', 'Infrastructure', 'Response']
  },
  {
    id: 'cloud-engineering',
    name: 'Cloud Engineering',
    shortLabel: 'Cloud',
    icon: <Cloud size={16} />,
    context: 'Deploy. Scale. Monitor. Evolve.',
    visualType: 'cloud',
    animationType: 'pipeline',
    workflowStages: ['Source', 'Build', 'Test', 'Deploy', 'Monitor']
  },
  {
    id: 'ui-ux-design',
    name: 'UI/UX Design',
    shortLabel: 'UI/UX',
    icon: <Layout size={16} />,
    context: 'PRODUCT DESIGN WORKFLOW',
    visualType: 'design',
    animationType: 'evolution',
    workflowStages: ['Idea', 'Wireframe', 'Prototype', 'Interface', 'User Experience']
  },
  {
    id: 'mobile-apps',
    name: 'Mobile Apps',
    shortLabel: 'Mobile',
    icon: <Smartphone size={16} />,
    context: "Products designed for the user's hand.",
    visualType: 'mobile',
    animationType: 'interaction',
    workflowStages: ['Mobile UI', 'API Request', 'Backend', 'Response', 'Updated UI']
  },
  {
    id: 'devops',
    name: 'DevOps',
    shortLabel: 'DevOps',
    icon: <Terminal size={16} />,
    context: 'From commit to production.',
    visualType: 'devops',
    animationType: 'pipeline-status',
    workflowStages: ['Code', 'Build', 'Test', 'Review', 'Deploy', 'Monitor']
  }
];
