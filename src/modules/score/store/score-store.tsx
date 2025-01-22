import { create } from "zustand";

type ScoreStore = {
  score: number;
  incrementScore: () => void;
  decrementScore: () => void;
  resetScore: () => void;
};

export const useScoreStore = create<ScoreStore>()((set) => ({
  score: 0,
  incrementScore: () => set((state) => ({ score: state.score + 1 })),
  decrementScore: () => set((state) => ({ score: state.score === 0 ? 0 : state.score - 1 })),
  resetScore: () => set(() => ({ score: 0 })),
}));
