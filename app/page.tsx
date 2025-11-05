'use client'

export default function Home() {
  return (
    <div className="flex min-h-screen w-full flex-col items-center justify-center bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 px-4 py-12">
      <div className="text-center space-y-8">
        <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-white mb-4">🏛️ THE PANTHEON</h1>
        <p className="text-lg sm:text-xl text-slate-400 mb-12">Choose Your Chamber</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 max-w-3xl w-full px-4">
          {/* Athena */}
          <a
            href="/athena-simple"
            className="group relative rounded-lg bg-blue-500/20 p-8 sm:p-12 border-2 border-blue-500/30 hover:border-blue-500/60 hover:bg-blue-500/30 focus:outline-none focus:ring-4 focus:ring-blue-500/50 transition-all cursor-pointer"
            aria-label="Enter Athena's Chamber - Technology and AI Projects"
          >
            <div className="text-5xl sm:text-6xl mb-4">⚔️</div>
            <h2 className="text-2xl sm:text-3xl font-bold text-blue-400 mb-2">ATHENA</h2>
            <p className="text-slate-400">Tech & AI Projects</p>
            <div className="absolute inset-0 rounded-lg bg-blue-500/0 group-hover:bg-blue-500/10 transition-all"></div>
          </a>

          {/* Aphrodite */}
          <a
            href="/aphrodite"
            className="group relative rounded-lg bg-pink-500/20 p-8 sm:p-12 border-2 border-pink-500/30 hover:border-pink-500/60 hover:bg-pink-500/30 focus:outline-none focus:ring-4 focus:ring-pink-500/50 transition-all cursor-pointer"
            aria-label="Enter Aphrodite's Gallery - Design and Interior Projects"
          >
            <div className="text-5xl sm:text-6xl mb-4" aria-hidden="true">💖</div>
            <h2 className="text-2xl sm:text-3xl font-bold text-pink-400 mb-2">APHRODITE</h2>
            <p className="text-slate-400">Design Portfolio</p>
            <div className="absolute inset-0 rounded-lg bg-pink-500/0 group-hover:bg-pink-500/10 transition-all"></div>
          </a>

          {/* Dionysus */}
          <a
            href="/dionysus"
            className="group relative rounded-lg bg-purple-500/20 p-8 sm:p-12 border-2 border-purple-500/30 hover:border-purple-500/60 hover:bg-purple-500/30 focus:outline-none focus:ring-4 focus:ring-purple-500/50 transition-all cursor-pointer"
            aria-label="Enter Dionysus' Theatre - Creative and Experimental Projects"
          >
            <div className="text-5xl sm:text-6xl mb-4" aria-hidden="true">🍷</div>
            <h2 className="text-2xl sm:text-3xl font-bold text-purple-400 mb-2">DIONYSUS</h2>
            <p className="text-slate-400">Creative Experiments</p>
            <div className="absolute inset-0 rounded-lg bg-purple-500/0 group-hover:bg-purple-500/10 transition-all"></div>
          </a>

          {/* Apollo */}
          <a
            href="/apollo"
            className="group relative rounded-lg bg-amber-500/20 p-8 sm:p-12 border-2 border-amber-500/30 hover:border-amber-500/60 hover:bg-amber-500/30 focus:outline-none focus:ring-4 focus:ring-amber-500/50 transition-all cursor-pointer"
            aria-label="Enter Apollo's Hall - Career Timeline and CV"
          >
            <div className="text-5xl sm:text-6xl mb-4" aria-hidden="true">☀️</div>
            <h2 className="text-2xl sm:text-3xl font-bold text-amber-400 mb-2">APOLLO</h2>
            <p className="text-slate-400">Career & CV</p>
            <div className="absolute inset-0 rounded-lg bg-amber-500/0 group-hover:bg-amber-500/10 transition-all"></div>
          </a>
        </div>

        <div className="mt-12 text-sm text-slate-500">
          <p>💡 3D version with floating portals coming soon</p>
        </div>
      </div>
    </div>
  )
}
