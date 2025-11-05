import { Metadata } from 'next'

export const chamberMetadata = {
  athena: {
    title: "Athena's Chamber - Technology & AI",
    description: "Explore cutting-edge technology projects including EventFlow, Caroline AI, and full-stack web applications. Wisdom meets innovation.",
    keywords: ['web development', 'AI', 'FastAPI', 'React', 'Next.js', 'machine learning', 'full-stack'],
  },
  aphrodite: {
    title: "Aphrodite's Gallery - Design & Aesthetics",
    description: "Interior design projects blending beauty with functionality. Residential spaces that inspire and comfort.",
    keywords: ['interior design', '3D rendering', 'residential design', 'space planning', 'aesthetics'],
  },
  dionysus: {
    title: "Dionysus' Theatre - Creative Projects",
    description: "Experimental and creative endeavors including murder mystery games and immersive experiences. Where creativity meets chaos.",
    keywords: ['creative projects', 'game design', 'murder mystery', 'immersive experiences', 'experimental'],
  },
  apollo: {
    title: "Apollo's Hall - Career & Timeline",
    description: "Professional journey, skills mastery, and career evolution. A structured path toward excellence.",
    keywords: ['career', 'professional development', 'skills', 'timeline', 'achievements'],
  },
} as const

export function generateChamberMetadata(chamber: keyof typeof chamberMetadata): Metadata {
  const data = chamberMetadata[chamber]
  return {
    title: data.title,
    description: data.description,
    keywords: data.keywords,
    openGraph: {
      title: data.title,
      description: data.description,
    },
    twitter: {
      title: data.title,
      description: data.description,
    },
  }
}
