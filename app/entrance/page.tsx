'use client'

export default function EntranceSimple() {
  return (
    <div className="flex h-screen w-screen flex-col items-center justify-center bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      <div className="text-center space-y-8">
        <h1 className="text-7xl font-bold text-white mb-4">🏛️ THE PANTHEON</h1>
        <p className="text-xl text-slate-400 mb-12">Choose Your Chamber</p>

        <div className="grid grid-cols-2 gap-8 max-w-3xl">
          {/* Athena */}
          <a
            href="/athena-simple"
            className="group relative rounded-lg bg-blue-500/20 p-12 border-2 border-blue-500/30 hover:border-blue-500/60 hover:bg-blue-500/30 transition-all cursor-pointer"
          >
            <div className="text-6xl mb-4">⚔️</div>
            <h2 className="text-3xl font-bold text-blue-400 mb-2">ATHENA</h2>
            <p className="text-slate-400">Tech & AI Projects</p>
            <div className="absolute inset-0 rounded-lg bg-blue-500/0 group-hover:bg-blue-500/10 transition-all"></div>
          </a>

          {/* Aphrodite */}
          <a
            href="/aphrodite"
            className="group relative rounded-lg bg-pink-500/20 p-12 border-2 border-pink-500/30 hover:border-pink-500/60 hover:bg-pink-500/30 transition-all cursor-pointer"
          >
            <div className="text-6xl mb-4">💖</div>
            <h2 className="text-3xl font-bold text-pink-400 mb-2">APHRODITE</h2>
            <p className="text-slate-400">Design Portfolio</p>
            <div className="absolute inset-0 rounded-lg bg-pink-500/0 group-hover:bg-pink-500/10 transition-all"></div>
          </a>

          {/* Dionysus */}
          <a
            href="/dionysus"
            className="group relative rounded-lg bg-purple-500/20 p-12 border-2 border-purple-500/30 hover:border-purple-500/60 hover:bg-purple-500/30 transition-all cursor-pointer"
          >
            <div className="text-6xl mb-4">🍷</div>
            <h2 className="text-3xl font-bold text-purple-400 mb-2">DIONYSUS</h2>
            <p className="text-slate-400">Creative Experiments</p>
            <div className="absolute inset-0 rounded-lg bg-purple-500/0 group-hover:bg-purple-500/10 transition-all"></div>
          </a>

          {/* Apollo */}
          <a
            href="/apollo"
            className="group relative rounded-lg bg-amber-500/20 p-12 border-2 border-amber-500/30 hover:border-amber-500/60 hover:bg-amber-500/30 transition-all cursor-pointer"
          >
            <div className="text-6xl mb-4">☀️</div>
            <h2 className="text-3xl font-bold text-amber-400 mb-2">APOLLO</h2>
            <p className="text-slate-400">Career & CV</p>
            <div className="absolute inset-0 rounded-lg bg-amber-500/0 group-hover:bg-amber-500/10 transition-all"></div>
          </a>
        </div>

        <div className="mt-12 text-sm text-slate-600">
          <p>Interactive 3D version: <a href="/" className="text-blue-400 hover:text-blue-300">Click here</a></p>
        </div>
      </div>
    </div>
  )
}
