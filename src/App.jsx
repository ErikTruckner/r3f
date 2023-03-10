import { useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
// import Box from './Box'
// import Castle from './Castle'
// import SimpleSolarSystem from './SimpleSolarSystem'
import ComplexSolarSystem from './ComplexSolarSystem'
import { Stars } from '@react-three/drei'

export default function App() {
  console.log(Canvas)

  return (
    <Canvas>
      <color args={['#000000']} attach='background' />
      <Stars />
      {/* <ambientLight /> */}
      <pointLight intensity={0.9} position={[0, 0, 0]} />
      <ComplexSolarSystem />
      {/* <ambientLight intensity={0.5} />
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
      <pointLight position={[-10, -10, -10]} /> */}
      {/* <Box position={[-0.8, 0, 0]} />
      <Box position={[0.8, 0, 0]} /> */}
      <OrbitControls />
    </Canvas>
  )
}
