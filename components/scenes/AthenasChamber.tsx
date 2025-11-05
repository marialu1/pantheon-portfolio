'use client'

import { useRef, useState } from 'react'
import { useFrame } from '@react-three/fiber'
import { Text, RoundedBox, Sphere } from '@react-three/drei'
import * as THREE from 'three'

interface Project {
  id: string
  name: string
  description: string
  tech: string[]
  position: [number, number, number]
}

const projects: Project[] = [
  {
    id: 'eventflow',
    name: 'EventFlow',
    description: 'AI-powered event planning platform with Caroline assistant',
    tech: ['FastAPI', 'SQLite', 'AI/ML', 'Python'],
    position: [-3, 1, 0]
  },
  {
    id: 'caroline',
    name: 'Caroline AI',
    description: 'Intelligent assistant for event planners with memory system',
    tech: ['Groq', 'RAG', 'LangChain', 'AI/ML'],
    position: [3, 1, 0]
  },
  {
    id: 'dominatedbycline',
    name: 'DominatedByCline',
    description: 'Personal blog and portfolio site',
    tech: ['Hugo', 'Markdown', 'Web'],
    position: [-3, 1, -4]
  },
  {
    id: 'pantheon',
    name: 'The Pantheon',
    description: 'This interactive 3D portfolio you\'re experiencing',
    tech: ['React Three Fiber', 'Next.js', 'TypeScript', '3D'],
    position: [3, 1, -4]
  }
]

interface ProjectPedestalProps {
  project: Project
  onClick: (project: Project) => void
}

function ProjectPedestal({ project, onClick }: ProjectPedestalProps) {
  const meshRef = useRef<THREE.Mesh>(null)
  const orbRef = useRef<THREE.Mesh>(null)
  const [hovered, setHovered] = useState(false)

  useFrame((state) => {
    if (orbRef.current) {
      // Rotating orb
      orbRef.current.rotation.y = state.clock.elapsedTime * 0.5
      orbRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.3) * 0.2

      // Floating animation
      orbRef.current.position.y = project.position[1] + 1.5 + Math.sin(state.clock.elapsedTime + project.position[0]) * 0.1
    }

    if (meshRef.current && hovered) {
      meshRef.current.scale.lerp(new THREE.Vector3(1.05, 1.05, 1.05), 0.1)
    } else if (meshRef.current) {
      meshRef.current.scale.lerp(new THREE.Vector3(1, 1, 1), 0.1)
    }
  })

  return (
    <group position={project.position}>
      {/* Pedestal */}
      <mesh
        ref={meshRef}
        position={[0, 0.5, 0]}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
        onClick={() => onClick(project)}
      >
        <cylinderGeometry args={[0.6, 0.8, 1, 6]} />
        <meshStandardMaterial
          color="#1e40af"
          metalness={0.7}
          roughness={0.3}
          emissive="#3b82f6"
          emissiveIntensity={hovered ? 0.3 : 0.1}
        />
      </mesh>

      {/* Floating orb */}
      <Sphere
        ref={orbRef}
        args={[0.3, 32, 32]}
        position={[0, 2, 0]}
      >
        <meshStandardMaterial
          color="#3b82f6"
          emissive="#3b82f6"
          emissiveIntensity={hovered ? 1 : 0.5}
          metalness={0.9}
          roughness={0.1}
        />
      </Sphere>

      {/* Point light from orb */}
      <pointLight
        position={[0, 2, 0]}
        color="#3b82f6"
        intensity={hovered ? 3 : 1.5}
        distance={4}
      />

      {/* Project name */}
      <Text
        position={[0, -0.3, 0]}
        fontSize={0.2}
        color="#93c5fd"
        anchorX="center"
        anchorY="middle"
        maxWidth={2}
      >
        {project.name}
      </Text>

      {/* Hover instruction */}
      {hovered && (
        <Text
          position={[0, -0.6, 0]}
          fontSize={0.12}
          color="#60a5fa"
          anchorX="center"
          anchorY="middle"
        >
          Click to learn more
        </Text>
      )}
    </group>
  )
}

export default function AthenasChamber() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)

  const handleProjectClick = (project: Project) => {
    console.log('Selected project:', project)
    setSelectedProject(project)
    // TODO: Open modal with project details
  }

  return (
    <>
      {/* Floor */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.5, -2]}>
        <planeGeometry args={[20, 20]} />
        <meshStandardMaterial
          color="#0f172a"
          metalness={0.6}
          roughness={0.4}
        />
      </mesh>

      {/* Back wall */}
      <mesh position={[0, 3, -6]}>
        <planeGeometry args={[16, 8]} />
        <meshStandardMaterial
          color="#1e293b"
          metalness={0.3}
          roughness={0.7}
        />
      </mesh>

      {/* Chamber title */}
      <Text
        position={[0, 4, -5.5]}
        fontSize={0.6}
        color="#3b82f6"
        anchorX="center"
        anchorY="middle"
        font="/fonts/greek-style.woff"
        outlineWidth={0.02}
        outlineColor="#1e40af"
      >
        ATHENA'S CHAMBER
      </Text>

      {/* Subtitle */}
      <Text
        position={[0, 3.3, -5.5]}
        fontSize={0.18}
        color="#60a5fa"
        anchorX="center"
        anchorY="middle"
      >
        Wisdom • Strategy • Technology
      </Text>

      {/* Central altar/platform */}
      <mesh position={[0, 0, -2]}>
        <cylinderGeometry args={[3, 3.5, 0.3, 8]} />
        <meshStandardMaterial
          color="#1e40af"
          metalness={0.5}
          roughness={0.5}
        />
      </mesh>

      {/* Main chamber light */}
      <spotLight
        position={[0, 8, -2]}
        angle={0.6}
        penumbra={1}
        intensity={2}
        color="#3b82f6"
        castShadow
      />

      {/* Ambient blue lighting */}
      <ambientLight intensity={0.3} color="#3b82f6" />

      {/* Project pedestals */}
      {projects.map((project) => (
        <ProjectPedestal
          key={project.id}
          project={project}
          onClick={handleProjectClick}
        />
      ))}

      {/* Decorative pillars */}
      {[-6, -3, 3, 6].map((x) => (
        <group key={x} position={[x, 0, -5]}>
          <mesh>
            <cylinderGeometry args={[0.3, 0.35, 6, 8]} />
            <meshStandardMaterial
              color="#1e40af"
              metalness={0.6}
              roughness={0.4}
            />
          </mesh>
          {/* Pillar top light */}
          <pointLight
            position={[0, 3.5, 0]}
            color="#3b82f6"
            intensity={0.5}
            distance={3}
          />
        </group>
      ))}

      {/* Back button hint (for later navigation) */}
      <Text
        position={[0, 0.5, 2]}
        fontSize={0.15}
        color="#475569"
        anchorX="center"
        anchorY="middle"
      >
        ← Return to Entrance
      </Text>
    </>
  )
}
