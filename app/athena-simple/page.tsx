'use client'

export default function AthenaSimple() {
  return (
    <div className="flex h-screen w-screen flex-col items-center justify-center bg-gradient-to-b from-blue-950 via-slate-900 to-slate-950">
      <div className="text-center space-y-6">
        <h1 className="text-6xl font-bold text-blue-400">⚔️ ATHENA'S CHAMBER</h1>
        <p className="text-xl text-blue-300">Wisdom • Strategy • Technology</p>

        <div className="mt-12 grid grid-cols-2 gap-6 max-w-4xl">
          <div className="rounded-lg bg-blue-500/20 p-8 border border-blue-500/30 hover:bg-blue-500/30 transition-all cursor-pointer">
            <h3 className="text-2xl font-bold text-blue-300 mb-2">EventFlow</h3>
            <p className="text-slate-400">AI-powered event planning platform</p>
            <div className="mt-4 flex gap-2 flex-wrap">
              <span className="text-xs px-2 py-1 bg-blue-500/20 rounded">FastAPI</span>
              <span className="text-xs px-2 py-1 bg-blue-500/20 rounded">AI/ML</span>
              <span className="text-xs px-2 py-1 bg-blue-500/20 rounded">Python</span>
            </div>
          </div>

          <div className="rounded-lg bg-blue-500/20 p-8 border border-blue-500/30 hover:bg-blue-500/30 transition-all cursor-pointer">
            <h3 className="text-2xl font-bold text-blue-300 mb-2">Caroline AI</h3>
            <p className="text-slate-400">Intelligent assistant with memory</p>
            <div className="mt-4 flex gap-2 flex-wrap">
              <span className="text-xs px-2 py-1 bg-blue-500/20 rounded">Groq</span>
              <span className="text-xs px-2 py-1 bg-blue-500/20 rounded">RAG</span>
              <span className="text-xs px-2 py-1 bg-blue-500/20 rounded">AI/ML</span>
            </div>
          </div>

          <div className="rounded-lg bg-blue-500/20 p-8 border border-blue-500/30 hover:bg-blue-500/30 transition-all cursor-pointer">
            <h3 className="text-2xl font-bold text-blue-300 mb-2">DominatedByCline</h3>
            <p className="text-slate-400">Personal blog and portfolio</p>
            <div className="mt-4 flex gap-2 flex-wrap">
              <span className="text-xs px-2 py-1 bg-blue-500/20 rounded">Hugo</span>
              <span className="text-xs px-2 py-1 bg-blue-500/20 rounded">Web</span>
            </div>
          </div>

          <div className="rounded-lg bg-blue-500/20 p-8 border border-blue-500/30 hover:bg-blue-500/30 transition-all cursor-pointer">
            <h3 className="text-2xl font-bold text-blue-300 mb-2">The Pantheon</h3>
            <p className="text-slate-400">This 3D portfolio experience</p>
            <div className="mt-4 flex gap-2 flex-wrap">
              <span className="text-xs px-2 py-1 bg-blue-500/20 rounded">React Three Fiber</span>
              <span className="text-xs px-2 py-1 bg-blue-500/20 rounded">Next.js</span>
              <span className="text-xs px-2 py-1 bg-blue-500/20 rounded">3D</span>
            </div>
          </div>
        </div>

        <div className="mt-12">
          <a href="/" className="text-slate-400 hover:text-slate-300">
            ← Return to Entrance
          </a>
        </div>
      </div>

      <div className="absolute bottom-4 right-4 text-xs text-slate-600">
        <p>3D version coming soon...</p>
        <p>Testing: /athena for 3D chamber</p>
      </div>
    </div>
  )
}
