import { WINNER_COMBOS } from "../constant.js";

// CHECKEAR SI EXISTE GANADOR
export const checkWinnerFrom = (checkToBoard) => {
  // REVISAMOS TODAS LAS CONVINACIONES GANADORAS
  // PARA VER SI GANÓ X U O
  for (const combo of WINNER_COMBOS) {
    const [a, b, c] = combo;
    if (
      checkToBoard[a] &&
      checkToBoard[a] === checkToBoard[b] &&
      checkToBoard[a] === checkToBoard[c]
    ) {
      return checkToBoard[a]; //NOS DEVUELVE EL GANADOR
    }
  }
  // NO HUBO GANADOR
  return null;
};

  // CHECKEAR SI FINALIZO JUEGO
export const checkEndGame= (checkToBoard) => {
    // REVISAMOS SI HUBO EMPATE
    return checkToBoard.every(square => square !== null);
  }
