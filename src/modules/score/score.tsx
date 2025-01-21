import { useScoreStore } from "./store/score-store";

export const Score = () => {
  const { score } = useScoreStore();

  return <div>{score}</div>;
};
