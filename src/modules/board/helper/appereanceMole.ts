import { EMPTY_HOLE, MOLE } from "../constants";

export const appereanceMole = (board: string[]) => {
  const randomIndex = Math.floor(Math.random() * board.length);

  return board.map((_, i) => (i === randomIndex ? MOLE : EMPTY_HOLE));
};
