'use client'

import { useState } from 'react'
import { Project, getProjectsByChamber } from '@/lib/data/projects'
import ProjectCard from '@/components/ui/ProjectCard'
import ProjectModal from '@/components/ui/ProjectModal'

export default function AphroditePage() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const aphroditeProjects = getProjectsByChamber('aphrodite')

  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-pink-950 via-slate-900 to-slate-950 py-12 px-6">
      {/* Header */}
      <div className="max-w-6xl mx-auto text-center space-y-6 mb-12">
        <h1 className="text-6xl font-bold text-pink-400">💖 APHRODITE'S GALLERY</h1>
        <p className="text-xl text-pink-300">Beauty • Aesthetics • Design</p>
        <p className="text-slate-400 max-w-2xl mx-auto">
          Where form meets function. Interior design projects that blend aesthetics with
          livability, creating spaces that inspire and comfort.
        </p>
      </div>

      {/* Projects Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
        {aphroditeProjects.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
            onSelect={setSelectedProject}
            accentColor="pink"
          />
        ))}
      </div>

      {/* Navigation */}
      <div className="max-w-6xl mx-auto text-center">
        <a href="/" className="text-slate-400 hover:text-slate-300 transition-colors">
          ← Return to Entrance
        </a>
      </div>

      {/* Project Modal */}
      <ProjectModal
        project={selectedProject}
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
        accentColor="pink"
      />

      {/* Debug Info */}
      <div className="absolute bottom-4 right-4 text-xs text-slate-600">
        <p>Chamber: Aphrodite | Projects: {aphroditeProjects.length}</p>
        <p>Design portfolio coming soon...</p>
      </div>
    </div>
  )
}
