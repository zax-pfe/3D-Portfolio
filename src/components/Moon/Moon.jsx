import * as THREE from "three";
import React, { useLayoutEffect, useRef } from "react";
import { Canvas, useFrame, useLoader, useThree } from "@react-three/fiber";
import { TextureLoader } from "three/src/loaders/TextureLoader";

export default function Moon() {
  const monRef = useRef();
  const moonTexture = useLoader(TextureLoader, "/assets/moon.jpg");
  const normalTexture = useLoader(TextureLoader, "/assets/normal.jpg");

  useFrame((state) => {
    // ref.current.rotation.x += 0.01;
    monRef.current.rotation.y += 0.005;
  });
  return (
    <mesh ref={monRef}>
      <sphereGeometry args={[5, 8, 8]} />
      <meshStandardMaterial map={moonTexture} normalMap={normalTexture} />
    </mesh>
  );
}
