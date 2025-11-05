'use client'

import { useState } from 'react'
import { Project, getProjectsByChamber } from '@/lib/data/projects'
import ProjectCard from '@/components/ui/ProjectCard'
import ProjectModal from '@/components/ui/ProjectModal'

export default function Dionysus() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const dionysusProjects = getProjectsByChamber('dionysus')

  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-purple-950 via-slate-900 to-slate-950 py-12 px-6">
      {/* Header */}
      <div className="max-w-6xl mx-auto text-center space-y-6 mb-12">
        <h1 className="text-6xl font-bold text-purple-400">🍷 DIONYSUS' THEATRE</h1>
        <p className="text-xl text-purple-300">Creativity • Chaos • Celebration</p>
        <p className="text-slate-400 max-w-2xl mx-auto">
          Where creativity meets chaos. Experimental projects, immersive games, and
          creative endeavors that blur the line between art and experience.
        </p>
      </div>

      {/* Projects Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
        {dionysusProjects.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
            onSelect={setSelectedProject}
            accentColor="purple"
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
        accentColor="purple"
      />

      {/* Debug Info */}
      <div className="absolute bottom-4 right-4 text-xs text-slate-600">
        <p>Chamber: Dionysus | Projects: {dionysusProjects.length}</p>
        <p>Creative chaos unleashed...</p>
      </div>
    </div>
  )
}
