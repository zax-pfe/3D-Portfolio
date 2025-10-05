import styles from "./style.module.scss";
import { projectsList } from "@/data/projects";
import { useActiveStore } from "@/store/projectStore";
import { IoMdClose, IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const xVariant = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
  },
};

export default function Navigation() {
  const [hoveredX, setHoveredX] = useState(false);

  const activeItem = useActiveStore((state) => state.activeItem);
  const activeProj = useActiveStore((state) => state.activeProject);
  const setIsActive = useActiveStore((state) => state.setIsActive);

  function handleCloseClick() {
    setIsActive(0);
    setControlsEnabled(true);
  }

  function handleNextClick() {
    setControlsEnabled(true);
    setIsActive(activeItem + 1 >= projectsList.length ? 0 : activeItem + 1);
  }

  function handlePrevClick() {
    setControlsEnabled(true);
    setIsActive(activeItem - 1 < 0 ? projectsList.length - 1 : activeItem - 1);
  }
  return (
    <div className={styles.overlay}>
      <div className={styles.close}>
        <AnimatePresence>
          {activeItem !== 0 && (
            <motion.span
              className={styles.closeIcon}
              onClick={() => handleCloseClick()}
              onMouseOver={() => setHoveredX(true)}
              onMouseOut={() => setHoveredX(false)}
              variants={xVariant}
              initial="hidden"
              animate="visible"
              exit="hidden"
            >
              <motion.div
                initial={{ rotate: 0 }}
                animate={{ rotate: hoveredX ? 90 : 0 }}
              >
                <IoMdClose size={30} />
              </motion.div>
            </motion.span>
          )}
        </AnimatePresence>
      </div>
      <div className={styles.navigationContainer}>
        <div className={styles.previous}>
          <span onClick={() => handlePrevClick()}>
            <IoIosArrowBack size={25} />
          </span>
        </div>

        <div className={styles.navigationName}>
          <span>{activeProj.name}</span>
        </div>

        <div className={styles.next}>
          <span onClick={() => handleNextClick()}>
            <IoIosArrowForward size={25} />
          </span>
        </div>
      </div>
    </div>
  );
}
