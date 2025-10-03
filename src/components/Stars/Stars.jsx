import { Canvas, useFrame, useLoader, useThree } from "@react-three/fiber";
import { TextureLoader } from "three/src/loaders/TextureLoader";
import { OrbitControls, useMotion, useScroll } from "@react-three/drei";
import * as THREE from "three";
import React, { useMemo } from "react";

function Star({ position }) {
  return (
    <mesh position={position}>
      <sphereGeometry args={[0.25, 8, 8]} />
      <meshStandardMaterial color="white" />
    </mesh>
  );
}

export default function Stars({ count = 200 }) {
  const stars = useMemo(
    () =>
      Array.from({ length: count }, () => [
        THREE.MathUtils.randFloatSpread(100),
        THREE.MathUtils.randFloatSpread(100),
        THREE.MathUtils.randFloatSpread(100),
      ]),
    [count]
  );

  return (
    <>
      {stars.map((pos, index) => (
        <Star key={index} position={pos} />
      ))}
    </>
  );
}
