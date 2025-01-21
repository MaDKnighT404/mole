import { create } from "zustand";

type ScoreStore = {
  score: number;
  increment: () => void;
  reset: () => void;
};

export const useScoreStore = create<ScoreStore>()((set) => ({
  score: 0,
  increment: () => set((state) => ({ score: state.score + 1 })),
  reset: () => set(() => ({ score: 0 })),
}));
