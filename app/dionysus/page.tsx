'use client'

export default function Dionysus() {
  return (
    <div className="flex h-screen w-screen flex-col items-center justify-center bg-gradient-to-b from-purple-950 via-slate-900 to-slate-950">
      <div className="text-center space-y-6">
        <h1 className="text-6xl font-bold text-purple-400">🍷 DIONYSUS' THEATRE</h1>
        <p className="text-xl text-purple-300">Creativity • Chaos • Celebration</p>

        <div className="mt-12 max-w-4xl">
          <div className="rounded-lg bg-purple-500/20 p-12 border border-purple-500/30">
            <h3 className="text-3xl font-bold text-purple-300 mb-4">Coming Soon</h3>
            <p className="text-slate-400 text-lg">
              Experimental projects, murder mystery game, and creative chaos
            </p>
            <div className="mt-8 text-slate-500">
              <p>• Christmas Murder Mystery 1926</p>
              <p>• Experimental Tech Projects</p>
              <p>• Creative Side Projects</p>
              <p>• Art Deco & Theatre Design</p>
            </div>
          </div>
        </div>

        <div className="mt-12">
          <a href="/" className="text-slate-400 hover:text-slate-300 text-lg">
            ← Return to Entrance
          </a>
        </div>
      </div>
    </div>
  )
}
