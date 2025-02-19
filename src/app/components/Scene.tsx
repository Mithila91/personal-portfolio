'use client'
import dynamic from 'next/dynamic'

// Properly load ThreeScene with NoSSR
const ThreeScene = dynamic(() => import('./ThreeScene'), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full flex items-center justify-center text-white">
      Loading...
    </div>
  )
})

export default function Scene() {
  return (
    <div className="w-full h-full relative bg-transparent">
      <div className="absolute inset-0">
        <ThreeScene />
      </div>
    </div>
  )
}
