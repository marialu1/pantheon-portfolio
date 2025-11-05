'use client'

export default function Aphrodite() {
  return (
    <div className="flex h-screen w-screen flex-col items-center justify-center bg-gradient-to-b from-pink-950 via-slate-900 to-slate-950">
      <div className="text-center space-y-6">
        <h1 className="text-6xl font-bold text-pink-400">💖 APHRODITE'S GALLERY</h1>
        <p className="text-xl text-pink-300">Beauty • Aesthetics • Design</p>

        <div className="mt-12 max-w-4xl">
          <div className="rounded-lg bg-pink-500/20 p-12 border border-pink-500/30">
            <h3 className="text-3xl font-bold text-pink-300 mb-4">Coming Soon</h3>
            <p className="text-slate-400 text-lg">
              Interior design portfolio, 3D renders, and visual work
            </p>
            <div className="mt-8 text-slate-500">
              <p>• Interior Design Projects</p>
              <p>• 3D Studio Max Renders</p>
              <p>• Design Philosophy</p>
              <p>• Client Testimonials</p>
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
