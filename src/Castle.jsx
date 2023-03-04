import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber'

function Castle(props) {
  const meshRef = useRef();

  // Use useFrame to rotate the mesh on every frame
  useFrame(() => {
    meshRef.current.rotation.y += 0.01;
  });

  return (
    <mesh ref={meshRef} {...props}>
      <boxBufferGeometry args={[10, 10, 10]} />
      <meshStandardMaterial color={'#cfd8dc'} />
      <mesh ref={meshRef} position={[0, 5, 0]}>
        <boxBufferGeometry args={[8, 8, 8]} />
        <meshStandardMaterial color={'#607d8b'} />
        <mesh ref={meshRef} position={[0, 8, 0]}>
          <boxBufferGeometry args={[6, 6, 6]} />
          <meshStandardMaterial color={'#455a64'} />
          <mesh ref={meshRef} position={[0, 9.5, 0]}>
            <boxBufferGeometry args={[4, 1, 4]} />
            <meshStandardMaterial color={'#795548'} />
          </mesh>
        </mesh>
      </mesh>
    </mesh>
  );
}

export default Castle;