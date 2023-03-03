import { useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import Box from './Box'


export default function App() {

  console.log(Canvas);

  return (
    <Canvas>
      <ambientLight intensity={0.5} />
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
      <pointLight position={[-10, -10, -10]} />
      <Box position={[-0.8, 0, 0]} />
      <Box position={[0.8, 0, 0]} />
      <OrbitControls />
    </Canvas>
  )
}


