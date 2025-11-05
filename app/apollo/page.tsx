'use client'

import { useState } from 'react'
import { Project, getProjectsByChamber } from '@/lib/data/projects'
import ProjectCard from '@/components/ui/ProjectCard'
import ProjectModal from '@/components/ui/ProjectModal'

export default function Apollo() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const apolloProjects = getProjectsByChamber('apollo')

  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-amber-950 via-slate-900 to-slate-950 py-12 px-6">
      {/* Header */}
      <div className="max-w-6xl mx-auto text-center space-y-6 mb-12">
        <h1 className="text-6xl font-bold text-amber-400">☀️ APOLLO'S HALL</h1>
        <p className="text-xl text-amber-300">Order • Prophecy • Career</p>
        <p className="text-slate-400 max-w-2xl mx-auto">
          Where past meets future. A structured timeline of professional growth,
          skills mastery, and the journey toward excellence.
        </p>
      </div>

      {/* Projects Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
        {apolloProjects.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
            onSelect={setSelectedProject}
            accentColor="amber"
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
        accentColor="amber"
      />

      {/* Debug Info */}
      <div className="absolute bottom-4 right-4 text-xs text-slate-600">
        <p>Chamber: Apollo | Projects: {apolloProjects.length}</p>
        <p>The path illuminated...</p>
      </div>
    </div>
  )
}
