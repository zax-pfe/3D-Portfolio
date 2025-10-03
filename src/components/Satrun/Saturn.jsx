import * as THREE from "three";
import React, { useLayoutEffect, useRef } from "react";
import { Canvas, useFrame, useLoader, useThree } from "@react-three/fiber";
import { TextureLoader } from "three/src/loaders/TextureLoader";

export default function Saturn() {
  const normalTexture = useLoader(TextureLoader, "/assets/normal.jpg");

  const ref = useRef();

  useFrame((state) => {
    ref.current.rotation.x += 0.01;
    ref.current.rotation.y += 0.01;
  });

  return (
    <group ref={ref}>
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[2.3, 0.1, 16, 100]} />
        <meshStandardMaterial color="skyblue" />
      </mesh>
      <mesh>
        <sphereGeometry args={[2, 16, 16]} />
        <meshStandardMaterial color="red" normalMap={normalTexture} />
      </mesh>
    </group>
  );
}
