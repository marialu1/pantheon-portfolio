'use client'

export default function Test() {
  return (
    <div className="flex h-screen w-screen items-center justify-center bg-slate-950">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-blue-500">THE PANTHEON</h1>
        <p className="mt-4 text-slate-400">Next.js is working!</p>
        <div className="mt-8 grid grid-cols-2 gap-4">
          <div className="rounded-lg bg-blue-500/20 p-4 text-blue-400">ATHENA</div>
          <div className="rounded-lg bg-pink-500/20 p-4 text-pink-400">APHRODITE</div>
          <div className="rounded-lg bg-purple-500/20 p-4 text-purple-400">DIONYSUS</div>
          <div className="rounded-lg bg-amber-500/20 p-4 text-amber-400">APOLLO</div>
        </div>
      </div>
    </div>
  )
}
