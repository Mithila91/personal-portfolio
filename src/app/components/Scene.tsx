'use client'
import dynamic from 'next/dynamic'

// Properly load ThreeScene with NoSSR
const ThreeScene = dynamic(() => import('./ThreeScene'), {
  ssr: false,
  loading: () => (
    <div className="flex items-center justify-center h-full">
      <div className="text-white">Loading 3D Scene...</div>
    </div>
  )
})

export default function Scene() {
  return <ThreeScene />
}
