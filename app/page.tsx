'use client'

export default function LandingPage() {
  return (
    <div className="flex min-h-screen w-full flex-col items-center justify-center bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 px-4">
      <div className="text-center space-y-8 max-w-4xl">
        {/* Main Title */}
        <div className="space-y-4">
          <h1 className="text-6xl sm:text-7xl md:text-8xl font-bold text-white mb-4">
            🏛️ THE PANTHEON
          </h1>
          <p className="text-xl sm:text-2xl md:text-3xl text-slate-300 font-light">
            A Divine Portfolio Experience
          </p>
        </div>

        {/* Description */}
        <p className="text-base sm:text-lg text-slate-400 max-w-2xl mx-auto px-4">
          Enter the halls of the gods and explore a collection of projects, creativity, and innovation.
          Each chamber holds unique treasures waiting to be discovered.
        </p>

        {/* Enter Button */}
        <div className="pt-8">
          <a
            href="/entrance"
            className="inline-block group relative px-12 py-4 text-lg sm:text-xl font-bold text-white bg-gradient-to-r from-blue-600 to-purple-600 rounded-full hover:from-blue-500 hover:to-purple-500 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 focus:outline-none focus:ring-4 focus:ring-purple-500/50"
          >
            <span className="relative z-10">Enter The Pantheon</span>
            <div className="absolute inset-0 rounded-full bg-white opacity-0 group-hover:opacity-10 transition-opacity"></div>
          </a>
        </div>

        {/* Footer hint */}
        <div className="pt-12 text-sm text-slate-500">
          <p>✨ Crafted with React, Next.js & Three.js</p>
        </div>
      </div>
    </div>
  )
}
