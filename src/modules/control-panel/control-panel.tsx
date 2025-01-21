import { useScoreStore } from "../score/store/score-store";
import { useControlPanelStore } from "./store/control-panel-store";

export const ControlPanel = () => {
  const { reset: resetScore } = useScoreStore();
  const { gameStatus } = useControlPanelStore();
  const { changeGameStatus } = useControlPanelStore();

  const handleResetScore = () => {
    resetScore();
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
      <button
        className="border-2 rounded-md p-2"
        onClick={handlerChangeGameStatus}
      >
        {gameStatus} the game
      </button>
    </div>
  );
};
