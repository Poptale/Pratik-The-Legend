'use client'
import React, { useRef } from "react";
import {
  Bloom,
  EffectComposer,
  ToneMapping,
} from "@react-three/postprocessing";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, useTexture } from "@react-three/drei";
import * as THREE from "three";

const Cylinder = () => {
  const tex = useTexture('./Texture3.jpg');
  const popo = useRef(null);

  useFrame((state, delta) => {
    popo.current.rotation.y += delta;
  });

  return (
    <mesh ref={popo} position={[0,4,0]} rotation={[0, 1.5, 0.5]}>
      <sphereGeometry args={[5, 30, 10]} />
      <meshStandardMaterial map={tex} side={THREE.DoubleSide} />
    </mesh>
  );
};

const Ball = () => {
  return (
    <Canvas camera={{ fov: 70, position: [10, 0, 20] }}> {/* Move the camera back */}
      <ambientLight />
          <Cylinder />
      <EffectComposer>
        <Bloom
          mipmapBlur
          intensity={300}
          luminanceThreshold={0}
          luminanceSmoothing={0}
        />
        <ToneMapping adaptive />
      </EffectComposer>
    </Canvas>
  );
};

export default Ball;
