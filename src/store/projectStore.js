import { create } from "zustand";
import { projectsList } from "@/data/projects";

// export const initialCameraValues = {
//   position: [0, 40, 40],
//   target: [0, 0, 0],
// };

export const useActiveStore = create((set) => ({
  // init
  activeItem: 0,
  activeProject: projectsList[0],
  // on updateCamera, the active item is updated and the active project too
  setIsActive: (index) =>
    set({ activeItem: index, activeProject: projectsList[index] }),
}));

export const useControlStore = create((set) => ({
  controlsEnabled: true,
  setControlsEnabled: (enabled) => set({ controlsEnabled: enabled }),
}));
