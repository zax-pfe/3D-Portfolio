"use client";

import Lenis from "lenis";
import { useEffect, useRef } from "react";
import Experience from "@/components/Experience";
import { Canvas } from "@react-three/fiber";
import * as THREE from "three";
import { useState } from "react";
import Overlay from "@/components/Overlay/Overlay";
import styles from "./page.module.scss";
import gsap from "gsap";
import CameraController from "@/components/CameraController";

export default function Home() {
  const [cameraPosition, setCameraPosition] = useState({
    position: [0, 20, 20],
    target: [0, 0, 0],
  });

  const [activeProject, setActiveProject] = useState(null);

  const controlsRef = useRef(null);

  return (
    <div className={styles.page}>
      <Canvas
        className={styles.canvas}
        camera={{ fov: 64, position: cameraPosition.position }}
      >
        <axesHelper args={[5]} />
        <primitive object={new THREE.GridHelper(200, 50)} />
        <Experience
          controlsRef={controlsRef}
          setCameraPosition={setCameraPosition}
          setActiveProject={setActiveProject}
        />
        <CameraController
          cameraPosition={cameraPosition}
          controlsRef={controlsRef}
        />
      </Canvas>
      <Overlay
        setCameraPosition={setCameraPosition}
        activeProject={activeProject}
        setActiveProject={setActiveProject}
      />
    </div>
  );
}
