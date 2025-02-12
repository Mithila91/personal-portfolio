'use client'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import { Suspense } from 'react'
import { useGLTF } from '@react-three/drei'

function Model() {
  const { scene } = useGLTF('/models/scene.gltf')
  return <primitive object={scene} scale={2} position={[0, -1, 0]} />
}

export default function ThreeScene() {
  return (
    <div className="w-full h-full relative">
      <Canvas
        className="!bg-transparent"
        camera={{ position: [0, 0, 5], fov: 75 }}
        gl={{ 
          alpha: true,
          antialias: true,
          preserveDrawingBuffer: true,
          premultipliedAlpha: false,
          stencil: false,
        }}
      >
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <Suspense fallback={null}>
          <Model />
          <OrbitControls enableZoom={true} />
        </Suspense>
      </Canvas>
    </div>
  )
}

useGLTF.preload('/models/scene.gltf') 