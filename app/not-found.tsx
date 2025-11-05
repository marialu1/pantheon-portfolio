import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="flex h-screen w-screen flex-col items-center justify-center bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      <div className="text-center space-y-8 px-6">
        {/* 404 Title */}
        <div className="space-y-4">
          <h1 className="text-9xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
            404
          </h1>
          <h2 className="text-4xl font-bold text-white">Lost in the Void</h2>
          <p className="text-xl text-slate-400 max-w-md mx-auto">
            This chamber does not exist in The Pantheon. Perhaps the gods moved it, or it never was...
          </p>
        </div>

        {/* Navigation Options */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-12">
          <Link
            href="/"
            className="px-8 py-4 rounded-lg bg-blue-500 hover:bg-blue-600 text-white font-medium transition-colors flex items-center gap-2 justify-center"
          >
            <span>🏛️</span>
            <span>Return to Entrance</span>
          </Link>

          <div className="flex gap-2">
            <Link
              href="/athena-simple"
              className="px-6 py-4 rounded-lg bg-blue-500/20 hover:bg-blue-500/30 text-blue-400 border border-blue-500/30 font-medium transition-colors"
              title="Athena's Chamber - Technology"
            >
              ⚔️
            </Link>
            <Link
              href="/aphrodite"
              className="px-6 py-4 rounded-lg bg-pink-500/20 hover:bg-pink-500/30 text-pink-400 border border-pink-500/30 font-medium transition-colors"
              title="Aphrodite's Gallery - Design"
            >
              💖
            </Link>
            <Link
              href="/dionysus"
              className="px-6 py-4 rounded-lg bg-purple-500/20 hover:bg-purple-500/30 text-purple-400 border border-purple-500/30 font-medium transition-colors"
              title="Dionysus' Theatre - Creative"
            >
              🍷
            </Link>
            <Link
              href="/apollo"
              className="px-6 py-4 rounded-lg bg-amber-500/20 hover:bg-amber-500/30 text-amber-400 border border-amber-500/30 font-medium transition-colors"
              title="Apollo's Hall - Career"
            >
              ☀️
            </Link>
          </div>
        </div>

        {/* Decorative Quote */}
        <div className="mt-16 text-sm text-slate-600 italic">
          "Not all who wander are lost, but you might be..."
        </div>
      </div>
    </div>
  )
}
