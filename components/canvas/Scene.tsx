'use client'

import { Canvas } from '@react-three/fiber'
import { OrbitControls, Preload } from '@react-three/drei'
import { Suspense } from 'react'

interface SceneProps {
  children: React.ReactNode
  className?: string
}

export default function Scene({ children, className }: SceneProps) {
  return (
    <Canvas
      className={className}
      camera={{ position: [0, 2, 5], fov: 50 }}
      gl={{ antialias: true, alpha: true }}
      dpr={[1, 2]} // Pixel ratio for performance
    >
      <Suspense fallback={null}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        {children}
        <OrbitControls
          enablePan={false}
          enableZoom={true}
          enableRotate={true}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 6}
        />
        <Preload all />
      </Suspense>
    </Canvas>
  )
}
