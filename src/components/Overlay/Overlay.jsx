import Navigation from "./Navigation";
import { useActiveStore } from "@/store/projectStore";
import styles from "./style.module.scss";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

const infoVariant = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: { duration: 0.8 },
  },
};

export default function Overlay() {
  const activeItem = useActiveStore((state) => state.activeItem);
  const activeProj = useActiveStore((state) => state.activeProject);
  const setIsActive = useActiveStore((state) => state.setIsActive);

  const [showInfo, setShowInfo] = useState(false);

  useEffect(() => {
    let timer;
    setShowInfo(false);
    if (activeItem !== 0) {
      timer = setTimeout(() => setShowInfo(true), 800); // 800ms de délai
    } else {
      setShowInfo(false);
    }
    return () => clearTimeout(timer);
  }, [activeItem]);

  return (
    <>
      <Navigation />
      <AnimatePresence mode="wait">
        {showInfo && (
          <motion.div
            className={styles.info}
            variants={infoVariant}
            initial="hidden"
            animate="visible"
            exit="hidden"
            key={activeItem}
          >
            <p>{activeProj.name}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
