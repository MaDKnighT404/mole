import { ControlPanel } from "./modules/control-panel";
import { Deck } from "./modules/deck";
import { Score } from "./modules/score";

function App() {
  return (
    <main className="flex flex-col mt-20 items-center justify-center gap-10">
      <Score />
      <ControlPanel />
      <Deck />
    </main>
  );
}

export default App;
