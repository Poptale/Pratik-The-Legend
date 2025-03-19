import React from "react";
import {
  Bloom,
  EffectComposer,
  ToneMapping,
} from "@react-three/postprocessing";
import { Canvas } from "@react-three/fiber";
import Popo from "./Popo";

const Cyl = () => {
  return (
    <>
      <Canvas camera={{ fov: 70 }} className="">
        ] <ambientLight />
        <Popo />
        <EffectComposer>
          <Bloom
            mipmapBlur
            intensity={200}
            luminanceThreshold={0}
            luminanceSmoothing={0}
          />
          <ToneMapping adaptive />
        </EffectComposer>
      </Canvas>
    </>
  );
};

export default Cyl;
