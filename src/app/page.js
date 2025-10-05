"use client";

import Lenis from "lenis";
import { useEffect, useRef } from "react";
import Experience from "@/components/Experience";
import { Canvas } from "@react-three/fiber";
import * as THREE from "three";
import { useState } from "react";
import Overlay from "@/components/Overlay/Overlay";
import styles from "./page.module.scss";
import CameraController from "@/components/CameraController";
import { projectsList } from "@/data/projects";
import { useActiveStore } from "@/store/projectStore";

export default function Home() {
  const [activeProject, setActiveProject] = useState(projectsList[0]);
  const activeItem = useActiveStore((state) => state.activeItem);
  const activeProj = useActiveStore((state) => state.activeProject);
  const controlsRef = useRef(null);

  return (
    <div className={styles.page}>
      <Canvas
        className={styles.canvas}
        camera={{ fov: 64, position: projectsList[0].position }}
      >
        {/* <axesHelper args={[5]} /> */}
        <primitive object={new THREE.GridHelper(200, 50)} />
        <Experience controlsRef={controlsRef} />
        <CameraController controlsRef={controlsRef} />
      </Canvas>
      <Overlay />
    </div>
  );
}
