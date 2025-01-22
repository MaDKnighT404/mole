import { ControlPanel } from "./modules/control-panel";
import { Board } from "./modules/board";
import { Score } from "./modules/score";

function App() {
  return (
    <main className="flex flex-col mt-20 items-center justify-center gap-10">
      <Score />
      <ControlPanel />
      <Board />
    </main>
  );
}

export default App;
