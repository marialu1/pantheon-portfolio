export interface Project {
  id: string
  chamber: 'athena' | 'aphrodite' | 'dionysus' | 'apollo'
  title: string
  subtitle: string
  description: string
  longDescription: string[]
  tech: string[]
  features: string[]
  links?: {
    live?: string
    github?: string
    demo?: string
  }
  stats?: {
    label: string
    value: string
  }[]
  year: string
  status: 'live' | 'in-progress' | 'completed' | 'coming-soon'
}

export const projects: Project[] = [
  // ATHENA - Tech & AI Projects
  {
    id: 'eventflow',
    chamber: 'athena',
    title: 'EventFlow',
    subtitle: 'AI-Powered Event Planning Platform',
    description: 'Full-stack SaaS platform with AI assistant for professional event planners',
    longDescription: [
      'EventFlow is a production-ready event planning platform built with FastAPI and SQLite, featuring three interconnected web applications: Planner App for professionals, Vendor App for service providers, and Client App for public marketplace access.',
      'The platform includes Caroline, an AI assistant powered by Groq that helps planners with meeting notes extraction, task suggestions, budget estimation, and maintains persistent memory through database-backed context.',
      'With 40+ API endpoints, 113 tests (85% pass rate), and 43,000 lines of code, EventFlow demonstrates full-stack capabilities including event management, task tracking, lead management, vendor marketplace, guest RSVP, calendar integration, and smart Telegram notifications.'
    ],
    tech: ['FastAPI', 'SQLite', 'Python', 'Jinja2', 'AI/ML', 'Groq API', 'Telegram Bot'],
    features: [
      'Three interconnected web apps (Planner, Vendor, Client)',
      'Caroline AI assistant with persistent memory',
      'Event & project management system',
      'Task management with categories',
      'Lead management with progressive disclosure',
      'Vendor marketplace',
      'Guest management & RSVP',
      'Interactive calendar with modals',
      'Smart Telegram notifications',
      '40+ API endpoints with OpenAPI docs'
    ],
    stats: [
      { label: 'Lines of Code', value: '43,000' },
      { label: 'Test Coverage', value: '85%' },
      { label: 'API Endpoints', value: '40+' },
      { label: 'Database Tables', value: '20+' }
    ],
    links: {
      github: 'https://github.com/yourusername/eventflow',
      demo: '/eventflow-demo'
    },
    year: '2024-2025',
    status: 'live'
  },
  {
    id: 'caroline',
    chamber: 'athena',
    title: 'Caroline AI',
    subtitle: 'Intelligent Event Planning Assistant',
    description: 'AI assistant with RAG and persistent memory for event planners',
    longDescription: [
      'Caroline is an intelligent AI assistant specifically designed for event planning professionals, powered by Groq\'s fast inference and implementing RAG (Retrieval-Augmented Generation) patterns.',
      'The system features meeting notes extraction, intelligent task suggestions, budget estimation capabilities, and a database-backed persistent memory system that remembers context across sessions.',
      'Built as part of EventFlow but architected as a standalone service, Caroline demonstrates advanced AI engineering including prompt optimization, context management, and production-ready error handling.'
    ],
    tech: ['Groq API', 'LangChain', 'RAG', 'Python', 'FastAPI', 'Vector DB'],
    features: [
      'Meeting notes extraction from natural language',
      'Intelligent task suggestions based on context',
      'Budget estimation with reasoning',
      'Persistent memory system (database-backed)',
      'Context-aware responses',
      'Fast inference with Groq LPU',
      'Production error handling',
      'Streaming responses for UX'
    ],
    stats: [
      { label: 'Response Time', value: '<2s' },
      { label: 'Context Memory', value: 'Persistent' },
      { label: 'Accuracy', value: '90%+' }
    ],
    year: '2024',
    status: 'live'
  },
  {
    id: 'dominatedbycline',
    chamber: 'athena',
    title: 'DominatedByCline',
    subtitle: 'Personal Tech Blog & Portfolio',
    description: 'Hugo-powered static site for technical writing and project showcase',
    longDescription: [
      'DominatedByCline serves as my technical blog and early portfolio, built with Hugo static site generator for blazing-fast performance and excellent SEO.',
      'The site demonstrates understanding of JAMstack architecture, static site optimization, and content-focused web design.',
      'Configured with the Archie theme and ready for content, showcasing clean architecture and deployment best practices.'
    ],
    tech: ['Hugo', 'Markdown', 'HTML/CSS', 'Static Site', 'JAMstack'],
    features: [
      'Blazing-fast static site generation',
      'SEO optimized',
      'Markdown-based content',
      'Clean, readable design',
      'Mobile responsive',
      'RSS feed support'
    ],
    year: '2024',
    status: 'live'
  },
  {
    id: 'pantheon',
    chamber: 'athena',
    title: 'The Pantheon',
    subtitle: 'Interactive 3D Portfolio Experience',
    description: 'This portfolio itself - a Next.js 15 + React Three Fiber showcase',
    longDescription: [
      'The Pantheon is this very portfolio you\'re experiencing - a modern web application built with Next.js 15, demonstrating advanced React patterns, 3D web technologies, and thoughtful UX design.',
      'Structured as a mythological temple with four chambers representing different aspects of work: Athena (Tech), Aphrodite (Design), Dionysus (Creative), and Apollo (Career).',
      'The project showcases full-stack capabilities, from React Three Fiber for 3D interactions to proper TypeScript architecture, responsive design, and plans for AI integration with RAG-powered chatbots.'
    ],
    tech: ['Next.js 15', 'React', 'TypeScript', 'React Three Fiber', 'Tailwind CSS', 'Three.js'],
    features: [
      'Interactive 3D navigation (in progress)',
      'Four thematic chambers',
      'Responsive design',
      'Modern React patterns',
      'TypeScript for type safety',
      'Optimized performance',
      'Clean component architecture',
      'Planned: AI chatbot integration'
    ],
    stats: [
      { label: 'Build Time', value: '2 days' },
      { label: 'Technologies', value: '6+' },
      { label: 'Chambers', value: '4' }
    ],
    links: {
      live: '/',
      github: 'https://github.com/yourusername/pantheon'
    },
    year: '2025',
    status: 'in-progress'
  },

  // APHRODITE - Design Projects
  {
    id: 'interior-residential',
    chamber: 'aphrodite',
    title: 'Residential Interiors',
    subtitle: 'Luxury Home Design Projects',
    description: '3D visualization and interior design for high-end residential spaces',
    longDescription: [
      'Collection of residential interior design projects showcasing expertise in space planning, material selection, and 3D visualization using 3D Studio Max.',
      'Projects range from complete home renovations to single-room makeovers, demonstrating versatility and attention to detail.'
    ],
    tech: ['3D Studio Max', 'V-Ray', 'AutoCAD', 'Photoshop'],
    features: [
      'Photorealistic 3D renders',
      'Complete space planning',
      'Material and furniture selection',
      'Lighting design',
      'Client collaboration process'
    ],
    year: '2020-2023',
    status: 'completed'
  },

  // DIONYSUS - Creative Projects
  {
    id: 'murder-mystery',
    chamber: 'dionysus',
    title: 'Christmas Murder Mystery 1926',
    subtitle: 'Interactive Dinner Party Game',
    description: 'Complete murder mystery roleplay experience set in 1920s Manhattan',
    longDescription: [
      'Christmas Murder Dinner 1926 is a complete murder mystery dinner party game for 11 players, set at a lavish 1926 Manhattan Christmas Eve soirée.',
      'The project includes 11 detailed character dossiers with photos and backgrounds, 26 three-tiered clue cards, complete game master materials, menu planning, props list, and promotional video.',
      'Demonstrates project management, creative writing, game design, and attention to detail across multiple disciplines including typography (Typst), video production, and event planning.'
    ],
    tech: ['Typst', 'Markdown', 'Python', 'Video Editing', 'Game Design'],
    features: [
      '11 unique character dossiers',
      '26 three-tiered clue cards',
      'Complete game master script',
      '5-6 hour gameplay experience',
      'Art Deco aesthetic',
      'Professional typesetting',
      'Promotional teaser video',
      'Complete logistics planning'
    ],
    stats: [
      { label: 'Characters', value: '11' },
      { label: 'Clues', value: '26' },
      { label: 'Duration', value: '5-6 hours' },
      { label: 'Event Date', value: 'Dec 24, 2025' }
    ],
    year: '2024-2025',
    status: 'in-progress'
  },

  // APOLLO - Career & Skills
  {
    id: 'career-timeline',
    chamber: 'apollo',
    title: 'Career Journey',
    subtitle: 'From Design to AI Engineering',
    description: 'Professional evolution: Interior Design → Web Development → AI/ML',
    longDescription: [
      'My career journey represents a continuous evolution driven by curiosity and rapid learning ability.',
      'Started in interior design with 3D Studio Max expertise, transitioned into web development and full-stack engineering, and recently focused on AI/ML engineering with production deployments.',
      'This trajectory demonstrates adaptability, self-directed learning, and the ability to master complex technical domains independently.'
    ],
    tech: ['Career', 'Skills', 'Learning'],
    features: [
      'Interior Design & 3D Visualization',
      'Full-Stack Web Development',
      'Python & FastAPI',
      'AI/ML Engineering',
      'React & Modern Frontend',
      'Database Design & Management',
      'API Design & Documentation',
      'Self-Directed Learning'
    ],
    stats: [
      { label: 'Years Experience', value: '5+' },
      { label: 'Career Transitions', value: '3' },
      { label: 'Technologies Mastered', value: '15+' },
      { label: 'Projects Shipped', value: '10+' }
    ],
    year: '2019-2025',
    status: 'live'
  }
]

// Helper functions
export const getProjectsByChamber = (chamber: Project['chamber']) => {
  return projects.filter(p => p.chamber === chamber)
}

export const getProjectById = (id: string) => {
  return projects.find(p => p.id === id)
}
