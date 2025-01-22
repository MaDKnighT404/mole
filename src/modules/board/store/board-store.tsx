import { create } from "zustand";

import { createNewGame } from "../helper/createNewGame";

type BoardStore = {
  board: string[];
  setBoard: (val: string[]) => void;
  resetBoard: () => void;
};

const initialState = createNewGame(4);

export const useBoardStore = create<BoardStore>()((set) => ({
  board: initialState,
  setBoard: (newBoard) => set(() => ({ board: [...newBoard] })),
  resetBoard: () => set(() => ({ board: initialState })),
}));
