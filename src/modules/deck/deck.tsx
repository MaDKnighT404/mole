import { useEffect, useState } from "react";
import { useScoreStore } from "../score/store/score-store";
import { useControlPanelStore } from "../control-panel/store/control-panel-store";
import { cn } from "../../utils/cn";

const EMPTY_HOLE = "O";
const MOLE = "X";

type Cell = {
  status: string;
  id: number;
};

const createDeck = (rowNumbers: number) => {
  const result = [];

  for (let i = 0; i < rowNumbers; i++) {
    const cell = Array.from(`${EMPTY_HOLE.repeat(rowNumbers)}`).map((el, i) => {
      return {
        status: el,
        id: i,
      };
    });
    result.push(cell);
  }

  return result;
};

const updateDesk = (currentDesk: Cell[][]) => {
  const randomRow = Math.floor(Math.random() * BASEDECK.length);
  const randomCell = Math.floor(Math.random() * BASEDECK[randomRow].length);
  return currentDesk.map((row, rowIndex) =>
    row.map((cell, cellIndex) => {
      if (rowIndex === randomRow && cellIndex === randomCell) {
        return { ...cell, status: "X" };
      }
      return { ...cell, status: "O" };
    })
  );
};
const BASEDECK = createDeck(3);

export const Deck = () => {
  const [desk, setDesk] = useState<Cell[][]>(BASEDECK);
  const { increment } = useScoreStore();
  const { gameStatus } = useControlPanelStore();

  const handlerClick = (status: string) => {
    if (status === MOLE && gameStatus === "start") {
      increment();
      setDesk((prev) => updateDesk(prev));
    }
  };

  useEffect(() => {
    if (gameStatus === "start") {
      const moleAppear = setInterval(() => {
        setDesk((prev) => updateDesk(prev));
      }, 2000);
      return () => {
        clearInterval(moleAppear);
      };
    }
  }, [gameStatus]);

  return (
    <div className="flex gap-5">
      {desk.map((row, i) => (
        <div key={i} className="flex flex-col gap-5 cursor-pointer text-white">
          {row.map((cell) => (
            <div
              key={cell.id}
              onClick={() => handlerClick(cell.status)}
              className={cn(
                "transition-colors w-10 active:bg-red-400 h-10 rounded-full bg-slate-500 flex items-center justify-center",
                {
                  "active:bg-green-500":
                    cell.status === MOLE && gameStatus === "start",
                }
              )}
            >
              {cell.status}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};
