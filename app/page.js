"use client";
import React from "react";
import { Canvas } from "@react-three/fiber";
import Popo from "./components/Popo";
import {
  Bloom,
  EffectComposer,
  ToneMapping,
} from "@react-three/postprocessing";

const page = () => {
  return (
    <div className="h-screen w-full">
      <div>
        <h1 className="text-[40vh] w-full leading-tight text-center font-semibold absolute text-zinc-900/50 -translate-1/2 top-[50%] left-[50%] ">Pratik Jha</h1>
      </div>
      <Canvas camera={{ fov: 70 }}>
]        <ambientLight />
        <Popo />
        <EffectComposer>
          <Bloom
            mipmapBlur
            intensity={30}
            luminanceThreshold={0}
            luminanceSmoothing={0}
          />
          <ToneMapping adaptive />
        </EffectComposer>
      </Canvas>
    </div>
  );
};

export default page;
