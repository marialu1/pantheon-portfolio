'use client'

export default function Apollo() {
  return (
    <div className="flex h-screen w-screen flex-col items-center justify-center bg-gradient-to-b from-amber-950 via-slate-900 to-slate-950">
      <div className="text-center space-y-6">
        <h1 className="text-6xl font-bold text-amber-400">☀️ APOLLO'S HALL</h1>
        <p className="text-xl text-amber-300">Order • Prophecy • Career</p>

        <div className="mt-12 max-w-4xl">
          <div className="rounded-lg bg-amber-500/20 p-12 border border-amber-500/30">
            <h3 className="text-3xl font-bold text-amber-300 mb-4">Coming Soon</h3>
            <p className="text-slate-400 text-lg">
              Career timeline, skills, certifications, and future vision
            </p>
            <div className="mt-8 text-slate-500">
              <p>• Professional Timeline</p>
              <p>• Skills & Technologies</p>
              <p>• Certifications & Education</p>
              <p>• Dynamic CV Generator</p>
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
