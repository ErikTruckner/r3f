import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

function SimpleSolarSystem(props) {
  const meshRef = useRef();
  const planetRef = useRef();

  // Use useFrame to rotate the mesh and planet on every frame
  useFrame(() => {
    meshRef.current.rotation.y += 0.002;
    planetRef.current.rotation.y += 0.01;
  });

  return (
    <group {...props}>
      {/* Sun */}
      <mesh ref={meshRef}>
        <sphereBufferGeometry args={[2, 32, 32]} />
        <meshStandardMaterial emissive={'#ffd700'} />
      </mesh>
      {/* Planet */}
      <mesh ref={planetRef} position={[5, 0, 0]}>
        <sphereBufferGeometry args={[1, 32, 32]} />
        <meshStandardMaterial color={'#b0bec5'} />
        {/* Moon */}
        <mesh position={[2, 0, 0]}>
          <sphereBufferGeometry args={[0.5, 32, 32]} />
          <meshStandardMaterial color={'#cfd8dc'} />
        </mesh>
      </mesh>
    </group>
  );
}

export default SimpleSolarSystem;
