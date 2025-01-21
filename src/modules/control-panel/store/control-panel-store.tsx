import { create } from "zustand";

type GameStatus = "start" | "pause";

type ControlPanelStore = {
  gameStatus: GameStatus;
  changeGameStatus: (val: GameStatus) => void;
};

export const useControlPanelStore = create<ControlPanelStore>()((set) => ({
  gameStatus: "pause",
  changeGameStatus: (val: GameStatus) =>
    set(() => ({
      gameStatus: val,
    })),
}));
