'use client'
import { useRef, useState } from 'react'
import { useFrame } from '@react-three/fiber'
import { useGLTF } from '@react-three/drei'
import type { Mesh } from 'three'

export default function Model3D() {
  // Load the GLTF model
  const { scene } = useGLTF('/models/scene.gltf')
  const meshRef = useRef<Mesh>(null!)
  const [hovered, setHover] = useState(false)
  const [active, setActive] = useState(false)

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta
    }
  })

  return (
    <primitive
      ref={meshRef}
      object={scene}
      scale={active ? 1.5 : 1}
      onClick={() => setActive(!active)}
      onPointerOver={() => setHover(true)}
      onPointerOut={() => setHover(false)}
    />
  )
}

// Pre-load the model - this needs to be after the component definition
useGLTF.preload('/models/scene.gltf')
