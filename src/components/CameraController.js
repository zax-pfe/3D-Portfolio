import { useThree } from "@react-three/fiber";
import { useEffect, useLayoutEffect } from "react";
import gsap from "gsap";
import { useActiveStore } from "@/store/projectStore";
import { useControlStore } from "@/store/projectStore";

export default function CameraController({ controlsRef }) {
  const activeItem = useActiveStore((state) => state.activeItem);
  const activeProj = useActiveStore((state) => state.activeProject);
  const controlsEnabled = useControlStore((state) => state.controlsEnabled);
  const setControlsEnabled = useControlStore(
    (state) => state.setControlsEnabled
  );
  const { camera } = useThree();

  useLayoutEffect(() => {
    console.log("active project: ", activeProj);
    const [x, y, z] = activeProj.position;
    const [tx, ty, tz] = activeProj.target;

    gsap.to(camera.position, {
      duration: 2,
      x,
      y,
      z,
      ease: "power2.inOut",
    });

    gsap.to(controlsRef.current.target, {
      duration: 2,
      x: tx,
      y: ty,
      z: tz,
      ease: "power2.inOut",
      // onComplete: () => {
      //   setControlsEnabled(false);
      // },
    });
  }, [activeItem]);

  // useEffect(() => {
  //   controlsRef.current.enabled = controlsEnabled;
  // }, [controlsEnabled]);

  return null;
}
