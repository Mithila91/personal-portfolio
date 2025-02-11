'use client'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import { Suspense } from 'react'
import type { MeshProps } from '@react-three/fiber'
import Model3D from './Model3D'

// Basic box component for testing
function Box(props: MeshProps) {
  return (
    <mesh {...props}>
      <boxGeometry />
      <meshStandardMaterial color="hotpink" />
    </mesh>
  )
}

export default function ThreeScene() {
  return (
    <Canvas dpr={[1, 2]} camera={{ position: [0, 0, 5], fov: 75 }}>
      <color attach="background" args={['#000']} />
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 10]} intensity={1} />
      <Suspense fallback={null}>
        <Box position={[0, 0, 0]} />
        <OrbitControls />
      </Suspense>
    </Canvas>
  )
} 