'use client'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, useGLTF, SpotLight } from '@react-three/drei'
import { Suspense, useEffect } from 'react'
import * as THREE from 'three'

function Model() {
  const { scene } = useGLTF('/models/scene.gltf')

  useEffect(() => {
    scene.traverse((child) => {
      if (child instanceof THREE.Mesh) {
        // Make sure material is transparent
        if (child.material) {
          child.material.transparent = true
          child.material.opacity = 1
          child.material.side = THREE.DoubleSide
          // Enable shadows
          child.castShadow = true
          child.receiveShadow = true
          // Remove any background color
          if (child.material.color) {
            child.material.color.setStyle('#FFFFFF')
          }
        }
      }
    })
  }, [scene])

  return <primitive object={scene} scale={2} position={[0, -1, 0]} />
}

export default function ThreeScene() {
  return (
    <div className="w-full h-full relative">
      <Canvas
        className="!bg-transparent"
        camera={{ position: [0, 0, 5], fov: 75 }}
        shadows // Enable shadow maps
        gl={{ 
          alpha: true,
          antialias: true,
          preserveDrawingBuffer: true,
          premultipliedAlpha: false,
          stencil: false,
        }}
      >
        {/* Base ambient light */}
        <ambientLight intensity={1} />
        
        {/* Main directional light with shadows */}
        <directionalLight 
          position={[5, 5, 5]} 
          intensity={2} 
          color="#4682B4"
          castShadow
          shadow-mapSize-width={1024}
          shadow-mapSize-height={1024}
          shadow-camera-far={50}
          shadow-camera-left={-10}
          shadow-camera-right={10}
          shadow-camera-top={10}
          shadow-camera-bottom={-10}
        />
        
        {/* Fill lights for the dark side */}
        <pointLight position={[-5, 0, -5]} intensity={0.5} color="#4682B4" castShadow />
        <pointLight position={[0, -5, -5]} intensity={0.5} color="#553EB7" castShadow />
        
        {/* Colored rim lights */}
        <pointLight position={[-2, 2, -2]} intensity={1.5} color="#4169E1" castShadow />
        <pointLight position={[2, -2, -2]} intensity={1.5} color="#553EB7" castShadow />
        
        {/* Blue glow lights */}
        <spotLight
          position={[0, 0, 5]}
          angle={0.6}
          penumbra={1}
          intensity={1}
          color="#00BFFF"
          castShadow
          shadow-mapSize-width={1024}
          shadow-mapSize-height={1024}
        />
        
        {/* Additional blue accent lights */}
        <pointLight position={[3, 3, 3]} intensity={0.8} color="#1E90FF" castShadow />
        <pointLight position={[-3, -3, 3]} intensity={0.8} color="#4682B4" castShadow />

        <Suspense fallback={null}>
          <Model />
          <OrbitControls 
            enableZoom={true}
            autoRotate
            autoRotateSpeed={0.5}
          />
        </Suspense>
      </Canvas>
    </div>
  )
}

useGLTF.preload('/models/scene.gltf') 