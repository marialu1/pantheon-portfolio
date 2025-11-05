'use client'

import { Project } from '@/lib/data/projects'
import { useEffect } from 'react'

interface ProjectModalProps {
  project: Project | null
  isOpen: boolean
  onClose: () => void
  accentColor?: string
}

export default function ProjectModal({ project, isOpen, onClose, accentColor = 'blue' }: ProjectModalProps) {
  // Close on ESC key
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    if (isOpen) {
      document.addEventListener('keydown', handleEsc)
      document.body.style.overflow = 'hidden'
    }
    return () => {
      document.removeEventListener('keydown', handleEsc)
      document.body.style.overflow = 'unset'
    }
  }, [isOpen, onClose])

  if (!isOpen || !project) return null

  const colorClasses = {
    blue: {
      border: 'border-blue-500/30',
      text: 'text-blue-400',
      bg: 'bg-blue-500/10',
      tag: 'bg-blue-500/20 text-blue-300',
      button: 'bg-blue-500 hover:bg-blue-600 text-white'
    },
    pink: {
      border: 'border-pink-500/30',
      text: 'text-pink-400',
      bg: 'bg-pink-500/10',
      tag: 'bg-pink-500/20 text-pink-300',
      button: 'bg-pink-500 hover:bg-pink-600 text-white'
    },
    purple: {
      border: 'border-purple-500/30',
      text: 'text-purple-400',
      bg: 'bg-purple-500/10',
      tag: 'bg-purple-500/20 text-purple-300',
      button: 'bg-purple-500 hover:bg-purple-600 text-white'
    },
    amber: {
      border: 'border-amber-500/30',
      text: 'text-amber-400',
      bg: 'bg-amber-500/10',
      tag: 'bg-amber-500/20 text-amber-300',
      button: 'bg-amber-500 hover:bg-amber-600 text-white'
    }
  }

  const colors = colorClasses[accentColor as keyof typeof colorClasses] || colorClasses.blue

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fadeIn"
      onClick={onClose}
    >
      <div
        className={`
          relative w-full max-w-4xl max-h-[90vh] overflow-y-auto
          bg-slate-900 rounded-2xl border-2 ${colors.border}
          shadow-2xl animate-slideUp
        `}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-10 h-10 flex items-center justify-center rounded-full bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white transition-colors"
          aria-label="Close"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Content */}
        <div className="p-8">
          {/* Header */}
          <div className="mb-6">
            <div className="flex items-center gap-3 mb-2">
              <h2 className={`text-4xl font-bold ${colors.text}`}>{project.title}</h2>
              <span className="text-sm text-slate-500">{project.year}</span>
            </div>
            <p className="text-xl text-slate-300">{project.subtitle}</p>
          </div>

          {/* Description */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-white mb-3">About</h3>
            {project.longDescription.map((para, index) => (
              <p key={index} className="text-slate-300 leading-relaxed mb-3">
                {para}
              </p>
            ))}
          </div>

          {/* Tech Stack */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-white mb-3">Technologies</h3>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((tech, index) => (
                <span
                  key={index}
                  className={`px-3 py-1 rounded-lg ${colors.tag} text-sm font-medium`}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Features */}
          {project.features && project.features.length > 0 && (
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-white mb-3">Key Features</h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                {project.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-2 text-slate-300">
                    <span className={colors.text}>•</span>
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Stats */}
          {project.stats && project.stats.length > 0 && (
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-white mb-3">Stats & Metrics</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {project.stats.map((stat, index) => (
                  <div key={index} className={`p-4 rounded-lg ${colors.bg} text-center`}>
                    <div className={`text-2xl font-bold ${colors.text} mb-1`}>{stat.value}</div>
                    <div className="text-xs text-slate-400">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Links */}
          {project.links && (
            <div className="flex flex-wrap gap-3 pt-6 border-t border-slate-700">
              {project.links.live && (
                <a
                  href={project.links.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`px-6 py-3 rounded-lg ${colors.button} font-medium transition-colors flex items-center gap-2`}
                >
                  <span>Visit Live Site</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              )}
              {project.links.github && (
                <a
                  href={project.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 rounded-lg bg-slate-800 hover:bg-slate-700 text-white font-medium transition-colors flex items-center gap-2"
                >
                  <span>View on GitHub</span>
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </a>
              )}
              {project.links.demo && (
                <a
                  href={project.links.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 rounded-lg bg-slate-800 hover:bg-slate-700 text-white font-medium transition-colors"
                >
                  View Demo
                </a>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
