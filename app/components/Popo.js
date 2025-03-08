import { useTexture } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import React, { useRef } from "react";
import * as THREE from "three";

function Popo() {
  let tex = useTexture('./Texture.png');
  let popo = useRef(null);
  useFrame((state, delta) => {
    popo.current.rotation.y += delta;
  });
  return (
    <mesh ref={popo} rotation={[0, 1.5, 0.5]}>
      <cylinderGeometry args={[2, 2, 2, 50, 50, true]} />
      <meshStandardMaterial map={tex} side={THREE.DoubleSide} />
    </mesh>
  );
}

export default Popo;
