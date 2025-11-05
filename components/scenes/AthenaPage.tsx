'use client'

import { useState } from 'react'
import { Project, getProjectsByChamber } from '@/lib/data/projects'
import ProjectCard from '@/components/ui/ProjectCard'
import ProjectModal from '@/components/ui/ProjectModal'

export default function AthenaPage() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const athenaProjects = getProjectsByChamber('athena')

  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-blue-950 via-slate-900 to-slate-950 py-12 px-6">
      {/* Header */}
      <div className="max-w-6xl mx-auto text-center space-y-6 mb-12">
        <h1 className="text-6xl font-bold text-blue-400">⚔️ ATHENA'S CHAMBER</h1>
        <p className="text-xl text-blue-300">Wisdom • Strategy • Technology</p>
        <p className="text-slate-400 max-w-2xl mx-auto">
          Where code meets creativity. Technical projects leveraging AI, full-stack development,
          and modern web technologies to solve real-world problems.
        </p>
      </div>

      {/* Projects Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
        {athenaProjects.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
            onSelect={setSelectedProject}
            accentColor="blue"
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
        accentColor="blue"
      />

      {/* Debug Info */}
      <div className="absolute bottom-4 right-4 text-xs text-slate-600">
        <p>Chamber: Athena | Projects: {athenaProjects.length}</p>
        <p>3D version coming soon...</p>
      </div>
    </div>
  )
}
