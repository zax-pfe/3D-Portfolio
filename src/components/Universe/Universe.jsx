import React, { useLayoutEffect, useRef, useState } from "react";
import { useGLTF, useScroll } from "@react-three/drei";
import gsap from "gsap";
import { Canvas, useFrame, useLoader, useThree } from "@react-three/fiber";
import { TextureLoader } from "three/src/loaders/TextureLoader";
import Saturn from "../Satrun/Saturn";
import Moon from "../Moon/Moon";
import * as THREE from "three";

function Dot({ position }) {
  return (
    <mesh position={position}>
      <sphereGeometry args={[1, 4, 4]} />
      <meshStandardMaterial color="orange" />
    </mesh>
  );
}

export default function Universe({ setCameraPosition }) {
  return (
    <group dispose={null}>
      {/* <Dot position={MOON_CAMERA} />
      <Dot position={SATURN_CAMERA} /> */}
      {/* <Dot position={COMODORE_CAMERA} /> */}
      <group
        position={MOON_POSITION}
        onClick={() =>
          setCameraPosition({
            position: MOON_CAMERA,
            target: MOON_POSITION,
          })
        }
      >
        <group>
          <Moon />
        </group>
      </group>

      <group
        position={SATURN_POSITION}
        onClick={() =>
          setCameraPosition({
            position: SATURN_CAMERA,
            target: SATURN_POSITION,
          })
        }
      >
        <group>
          <Saturn />
        </group>
      </group>
    </group>
  );
}
