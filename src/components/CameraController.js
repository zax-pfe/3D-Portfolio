import { useThree } from "@react-three/fiber";
import { useLayoutEffect } from "react";
import gsap from "gsap";

export default function CameraController({ cameraPosition, controlsRef }) {
  const { camera } = useThree();

  useLayoutEffect(() => {
    if (!cameraPosition) return;

    const [x, y, z] = cameraPosition.position;
    const [tx, ty, tz] = cameraPosition.target;

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
    });
  }, [cameraPosition]);

  return null;
}
