import { Scroll } from "@react-three/drei";

import styles from "./style.module.scss";
export default function Overlay({
  setCameraPosition,
  activeProject,
  setActiveProject,
}) {
  function handleClick() {
    setCameraPosition({
      position: [0, 20, 20],
      target: [0, 0, 0],
    });
    setActiveProject(null);
  }

  return (
    <div className={styles.overlay}>
      <div className={styles.close} onClick={() => handleClick()}>
        X
      </div>
      <div className={styles.navigationContainer}>
        <div className={styles.navigationName}>
          {!activeProject ? "Home" : "Back to home"}
        </div>
      </div>
    </div>
  );
}
