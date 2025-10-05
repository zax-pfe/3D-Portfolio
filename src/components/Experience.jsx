import { OrbitControls, ScrollControls } from "@react-three/drei";
import Stars from "./Stars/Stars";
import { Commodore } from "./Commodore/Commodore";
import Saturn from "./Satrun/Saturn";
import Moon from "./Moon/Moon";
import { projectsList } from "@/data/projects";
import { Guitar } from "./Guitar/Guitar";
import { Spaceship } from "./SpaceShip/Spaceship";
import { useControlStore } from "@/store/projectStore";
import styles from "./style.module.scss";
import { useActiveStore } from "@/store/projectStore";

export default function Experience({ controlsRef }) {
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

      <UniversElement project={projectsList[2]} mesh={<Moon />} scale={1} />
      <UniversElement project={projectsList[3]} mesh={<Saturn />} scale={1} />

      <UniversElement
        project={projectsList[1]}
        mesh={<Commodore />}
        scale={5}
      />

      <UniversElement project={projectsList[4]} mesh={<Guitar />} scale={3} />

      <UniversElement
        project={projectsList[5]}
        mesh={<Spaceship />}
        scale={1}
      />
    </>
  );
}

function UniversElement({ project, mesh, scale }) {
  const activeItem = useActiveStore((state) => state.activeItem);
  const activeProj = useActiveStore((state) => state.activeProject);
  const setIsActive = useActiveStore((state) => state.setIsActive);
  const controlsEnabled = useControlStore((state) => state.controlsEnabled);
  const setControlsEnabled = useControlStore(
    (state) => state.setControlsEnabled
  );
  function handleClick() {
    setIsActive(project.id);
  }
  function handlePointerOver() {
    document.body.style.cursor = "pointer";
  }
  function handlePointerOut() {
    document.body.style.cursor = "default";
  }
  return (
    <group
      position={project.target}
      scale={scale}
      onClick={() => handleClick()}
      className={styles.universElement}
      onPointerOver={handlePointerOver}
      onPointerOut={handlePointerOut}
    >
      {mesh}
    </group>
  );
}
