import { useBoardStore } from "../board/store/board-store";
import { useScoreStore } from "../score/store/score-store";
import { useControlPanelStore } from "./store/control-panel-store";

export const ControlPanel = () => {
  const { resetScore } = useScoreStore();
  const { resetBoard } = useBoardStore();
  const { gameStatus, changeGameStatus } = useControlPanelStore();

  const handleResetScore = () => {
    resetScore();
    resetBoard();
    changeGameStatus("pause");
  };

  const handlerChangeGameStatus = () => {
    const newStatus = gameStatus === "pause" ? "start" : "pause";
    changeGameStatus(newStatus);
  };

  return (
    <div className="flex gap-5">
      <button className="border-2 rounded-md p-2" onClick={handleResetScore}>
        Reset Score
      </button>
      <button className="border-2 rounded-md p-2" onClick={handlerChangeGameStatus}>
        {gameStatus === "pause" ? "Start" : "Pause"} the game
      </button>
    </div>
  );
};
