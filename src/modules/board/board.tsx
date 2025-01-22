import { useEffect } from "react";

import { useScoreStore } from "../score/store/score-store";
import { useControlPanelStore } from "../control-panel/store/control-panel-store";
import { useBoardStore } from "./store/board-store";

import { appereanceMole } from "./helper/appereanceMole";
import { EMPTY_HOLE, MOLE } from "./constants";
import { cn } from "../../utils/cn";

export const Board = () => {
  const { board, setBoard } = useBoardStore();

  const { incrementScore, decrementScore } = useScoreStore();
  const { gameStatus } = useControlPanelStore();

  useEffect(() => {
    if (gameStatus === "start") {
      const moleInterval = setInterval(() => {
        setBoard(appereanceMole(board));
      }, 2000);

      return () => clearInterval(moleInterval);
    }
  }, [board, gameStatus, setBoard]);

  const handleCellClick = (boardCellValue: string) => {
    if (gameStatus === "start") {
      if (boardCellValue === MOLE) {
        incrementScore();
        setBoard(appereanceMole(board));
      } else {
        decrementScore();
      }
    }
  };

  return (
    <ul className="grid grid-cols-4 gap-4">
      {board.map((el, i) => (
        <li
          key={i}
          className={cn(
            "w-10 h-10 transition-colors text-white flex items-center justify-center rounded-full cursor-pointer bg-slate-400",
            {
              "active:bg-green-500": el === MOLE && gameStatus === "start",
              "active:bg-red-400": el === EMPTY_HOLE && gameStatus === "start",
            }
          )}
          onClick={() => handleCellClick(el)}
        >
          {el}
        </li>
      ))}
    </ul>
  );
};
