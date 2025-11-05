'use client'

import { useRef, useState } from 'react'
import { useFrame } from '@react-three/fiber'
import { Text, MeshPortalMaterial, RoundedBox } from '@react-three/drei'
import * as THREE from 'three'

interface PortalProps {
  position: [number, number, number]
  name: string
  color: string
  onClick?: () => void
}

function Portal({ position, name, color, onClick }: PortalProps) {
  const meshRef = useRef<THREE.Mesh>(null)
  const [hovered, setHovered] = useState(false)

  useFrame((state) => {
    if (meshRef.current) {
      // Gentle floating animation
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime + position[0]) * 0.1

      // Hover effect
      const scale = hovered ? 1.1 : 1
      meshRef.current.scale.lerp(new THREE.Vector3(scale, scale, scale), 0.1)
    }
  })

  return (
    <group position={position}>
      {/* Portal frame */}
      <RoundedBox
        ref={meshRef}
        args={[1.5, 2.5, 0.3]}
        radius={0.05}
        smoothness={4}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
        onClick={onClick}
      >
        <meshStandardMaterial
          color={color}
          emissive={color}
          emissiveIntensity={hovered ? 0.5 : 0.2}
          metalness={0.8}
          roughness={0.2}
        />
      </RoundedBox>

      {/* Portal glow */}
      <pointLight
        position={[0, 0, 0.5]}
        color={color}
        intensity={hovered ? 2 : 1}
        distance={3}
      />

      {/* Portal name */}
      <Text
        position={[0, -1.5, 0.2]}
        fontSize={0.2}
        color="#ffffff"
        anchorX="center"
        anchorY="middle"
      >
        {name}
      </Text>
    </group>
  )
}

export default function Entrance() {
  const portals = [
    { position: [-3, 1.5, 0] as [number, number, number], name: 'ATHENA', color: '#3b82f6', chamber: 'athena-simple' },
    { position: [3, 1.5, 0] as [number, number, number], name: 'APHRODITE', color: '#ec4899', chamber: 'aphrodite' },
    { position: [-3, 1.5, -5] as [number, number, number], name: 'DIONYSUS', color: '#8b5cf6', chamber: 'dionysus' },
    { position: [3, 1.5, -5] as [number, number, number], name: 'APOLLO', color: '#f59e0b', chamber: 'apollo' },
  ]

  const handlePortalClick = (chamber: string) => {
    console.log(`Entering ${chamber} chamber...`)
    // Navigate to chamber
    if (typeof window !== 'undefined') {
      window.location.href = `/${chamber}`
    }
  }

  return (
    <>
      {/* Floor */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.5, -2.5]}>
        <planeGeometry args={[20, 20]} />
        <meshStandardMaterial color="#1a1a2e" metalness={0.5} roughness={0.5} />
      </mesh>

      {/* Central platform */}
      <mesh position={[0, 0, -2.5]}>
        <cylinderGeometry args={[2, 2.5, 0.5, 32]} />
        <meshStandardMaterial color="#0f3460" metalness={0.6} roughness={0.4} />
      </mesh>

      {/* Central light beam */}
      <spotLight
        position={[0, 10, -2.5]}
        angle={0.3}
        penumbra={1}
        intensity={1}
        castShadow
        color="#ffffff"
      />

      {/* Title */}
      <Text
        position={[0, 3, -2.5]}
        fontSize={0.5}
        color="#ffffff"
        anchorX="center"
        anchorY="middle"
        font="/fonts/greek-style.woff" // TODO: Add Greek-style font
      >
        THE PANTHEON
      </Text>

      {/* Subtitle */}
      <Text
        position={[0, 2.3, -2.5]}
        fontSize={0.15}
        color="#94a3b8"
        anchorX="center"
        anchorY="middle"
      >
        Choose Your Chamber
      </Text>

      {/* Four portals */}
      {portals.map((portal) => (
        <Portal
          key={portal.name}
          position={portal.position}
          name={portal.name}
          color={portal.color}
          onClick={() => handlePortalClick(portal.chamber)}
        />
      ))}
    </>
  )
}
