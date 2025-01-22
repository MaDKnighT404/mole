import { cn } from "../../utils/cn";
import { useScoreStore } from "./store/score-store";

export const Score = () => {
  const { score } = useScoreStore();

  return (
    <p
      className={cn("text-3xl text-black", {
        "text-teal-500": score > 0,
      })}
    >
      {score}
    </p>
  );
};
