'use client'

import dynamic from 'next/dynamic'

const Scene = dynamic(() => import('@/components/canvas/Scene'), { ssr: false })
const AthenasChamber = dynamic(() => import('@/components/scenes/AthenasChamber'), { ssr: false })

export default function AthenaPage() {
  return (
    <main className="relative h-screen w-screen bg-gradient-to-b from-blue-950 via-slate-900 to-slate-950">
      {/* 3D Scene */}
      <Scene className="absolute inset-0">
        <AthenasChamber />
      </Scene>

      {/* UI Overlay */}
      <div className="pointer-events-none absolute inset-0 z-10 flex items-end justify-center p-8">
        <div className="pointer-events-auto rounded-lg bg-slate-950/80 px-6 py-4 backdrop-blur-sm border border-blue-500/30">
          <p className="text-center text-sm text-blue-300">
            Click on a project orb to view details
          </p>
          <p className="mt-2 text-center text-xs text-slate-500">
            Drag to rotate • Scroll to zoom
          </p>
        </div>
      </div>
    </main>
  )
}
