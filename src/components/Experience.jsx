import { OrbitControls, ScrollControls } from "@react-three/drei";
import Stars from "./Stars/Stars";
import Universe from "./Universe/Universe";
import { useRef } from "react";
import gsap from "gsap";
import { useThree } from "@react-three/fiber";
import { Commodore } from "./Commodore/Commodore";
import Overlay from "./Overlay/Overlay";
import Saturn from "./Satrun/Saturn";
import Moon from "./Moon/Moon";
import { projectsList } from "@/data/projects";
import { Guitar } from "./Guitar/Guitar";
import { Spaceship } from "./SpaceShip/Spaceship";

// export const DEFAULT_POSITION = [0, 20, 20];
// export const MOON_POSITION = [-30, 0, -30];
// export const SATURN_POSITION = [30, 0, -30];
// export const MOON_CAMERA = [-20, 10, -20];
// export const SATURN_CAMERA = [20, 10, -20];
// export const COMODORE_POSITION = [0, 0, 0];
// export const COMODORE_CAMERA = [0, 10, 10];

export default function Experience({
  controlsRef,
  setCameraPosition,
  setActiveProject,
}) {
  // const controlsRef = useRef();
  // const { camera } = useThree(); // récupérer la caméra

  // const goToPlanet = ({ cameraPosition, targetPosition }) => {
  //   const [x, y, z] = cameraPosition;
  //   const [tx, ty, tz] = targetPosition;

  //   gsap.to(camera.position, {
  //     duration: 2,
  //     x,
  //     y,
  //     z,

  //     ease: "power2.inOut",
  //   });

  //   gsap.to(controlsRef.current.target, {
  //     duration: 2,
  //     x: tx,
  //     y: ty,
  //     z: tz,
  //     ease: "power2.inOut",
  //     onComplete: () => {
  //       controlsRef.current.enabled = false;
  //     },
  //   });
  // };

  return (
    <>
      <ambientLight intensity={1} />
      <OrbitControls ref={controlsRef} enableZoom={false} />
      <Stars />

      <UniversElement
        setActiveProject={setActiveProject}
        setCameraPosition={setCameraPosition}
        project={projectsList[2]}
        mesh={<Moon />}
        scale={1}
      />
      <UniversElement
        setActiveProject={setActiveProject}
        setCameraPosition={setCameraPosition}
        project={projectsList[3]}
        mesh={<Saturn />}
        scale={1}
      />

      <UniversElement
        setActiveProject={setActiveProject}
        setCameraPosition={setCameraPosition}
        project={projectsList[1]}
        mesh={<Commodore />}
        scale={5}
      />

      <UniversElement
        setActiveProject={setActiveProject}
        setCameraPosition={setCameraPosition}
        project={projectsList[4]}
        mesh={<Guitar />}
        scale={3}
      />

      <UniversElement
        setActiveProject={setActiveProject}
        setCameraPosition={setCameraPosition}
        project={projectsList[5]}
        mesh={<Spaceship />}
        scale={1}
      />
    </>
  );
}

function UniversElement({
  setActiveProject,
  setCameraPosition,
  project,
  mesh,
  scale,
}) {
  function handleClick() {
    setCameraPosition({ position: project.position, target: project.target });
    setActiveProject(project.name);
  }
  return (
    <group
      position={project.target}
      scale={scale}
      onClick={() => handleClick()}
    >
      {mesh}
    </group>
  );
}
