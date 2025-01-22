import { EMPTY_HOLE } from "../constants";

export const createNewGame = (fieldNumber: number) => {
  return Array.from(EMPTY_HOLE.repeat(fieldNumber * fieldNumber));
};
