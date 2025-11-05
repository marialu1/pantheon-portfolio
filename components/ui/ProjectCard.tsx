'use client'

import { Project } from '@/lib/data/projects'
import { useState } from 'react'

interface ProjectCardProps {
  project: Project
  onSelect: (project: Project) => void
  accentColor?: string
}

export default function ProjectCard({ project, onSelect, accentColor = 'blue' }: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  const colorClasses = {
    blue: {
      bg: 'bg-blue-500/20',
      border: 'border-blue-500/30 hover:border-blue-500/60',
      text: 'text-blue-400',
      tag: 'bg-blue-500/20 text-blue-300',
      glow: 'hover:shadow-blue-500/20'
    },
    pink: {
      bg: 'bg-pink-500/20',
      border: 'border-pink-500/30 hover:border-pink-500/60',
      text: 'text-pink-400',
      tag: 'bg-pink-500/20 text-pink-300',
      glow: 'hover:shadow-pink-500/20'
    },
    purple: {
      bg: 'bg-purple-500/20',
      border: 'border-purple-500/30 hover:border-purple-500/60',
      text: 'text-purple-400',
      tag: 'bg-purple-500/20 text-purple-300',
      glow: 'hover:shadow-purple-500/20'
    },
    amber: {
      bg: 'bg-amber-500/20',
      border: 'border-amber-500/30 hover:border-amber-500/60',
      text: 'text-amber-400',
      tag: 'bg-amber-500/20 text-amber-300',
      glow: 'hover:shadow-amber-500/20'
    }
  }

  const colors = colorClasses[accentColor as keyof typeof colorClasses] || colorClasses.blue

  const statusBadges = {
    live: { label: '✓ Live', color: 'bg-green-500/20 text-green-400' },
    'in-progress': { label: '⚡ In Progress', color: 'bg-yellow-500/20 text-yellow-400' },
    completed: { label: '✓ Completed', color: 'bg-blue-500/20 text-blue-400' },
    'coming-soon': { label: '🔜 Coming Soon', color: 'bg-slate-500/20 text-slate-400' }
  }

  const status = statusBadges[project.status]

  return (
    <div
      className={`
        group relative rounded-xl ${colors.bg} p-6
        border-2 ${colors.border} ${colors.glow}
        transition-all duration-300 cursor-pointer
        hover:scale-[1.02] hover:shadow-2xl
        ${isHovered ? 'translate-y-[-4px]' : ''}
      `}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => onSelect(project)}
    >
      {/* Status Badge */}
      <div className="absolute top-3 right-3">
        <span className={`text-xs px-2 py-1 rounded-full ${status.color} font-medium`}>
          {status.label}
        </span>
      </div>

      {/* Year */}
      <div className="text-xs text-slate-500 mb-2">{project.year}</div>

      {/* Title */}
      <h3 className={`text-2xl font-bold ${colors.text} mb-1 group-hover:text-opacity-100 transition-colors`}>
        {project.title}
      </h3>

      {/* Subtitle */}
      <p className="text-sm text-slate-400 mb-3">{project.subtitle}</p>

      {/* Description */}
      <p className="text-slate-300 text-sm leading-relaxed mb-4 line-clamp-2">
        {project.description}
      </p>

      {/* Tech Stack */}
      <div className="flex flex-wrap gap-2 mb-4">
        {project.tech.slice(0, 4).map((tech, index) => (
          <span
            key={index}
            className={`text-xs px-2 py-1 rounded ${colors.tag} font-medium`}
          >
            {tech}
          </span>
        ))}
        {project.tech.length > 4 && (
          <span className="text-xs px-2 py-1 rounded bg-slate-500/20 text-slate-400">
            +{project.tech.length - 4} more
          </span>
        )}
      </div>

      {/* Stats (if available) */}
      {project.stats && project.stats.length > 0 && (
        <div className="grid grid-cols-2 gap-3 mb-4 pt-4 border-t border-slate-700/50">
          {project.stats.slice(0, 2).map((stat, index) => (
            <div key={index} className="text-center">
              <div className={`text-lg font-bold ${colors.text}`}>{stat.value}</div>
              <div className="text-xs text-slate-500">{stat.label}</div>
            </div>
          ))}
        </div>
      )}

      {/* Call to Action */}
      <div className={`
        flex items-center justify-between text-sm ${colors.text}
        opacity-0 group-hover:opacity-100 transition-opacity
      `}>
        <span>Click to learn more</span>
        <span className="transform group-hover:translate-x-1 transition-transform">→</span>
      </div>

      {/* Hover Glow Effect */}
      <div className={`
        absolute inset-0 rounded-xl ${colors.bg} opacity-0
        group-hover:opacity-10 transition-opacity pointer-events-none
      `} />
    </div>
  )
}
