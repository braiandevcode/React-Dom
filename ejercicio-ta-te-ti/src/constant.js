// OBJETO DE TURNOS
export const TURN = {
  X: '❌',
  O: '⚪'
};

export const WINNER_COMBOS = [
  // POSIBLES CONBINACIONES EJE X
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],

  // POSIBLES CONBINACIONES EJE Y
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],

  // POSIBLES CONBINACIONES EJE DIAGONAL
  [0, 4, 8],
  [2, 4, 6]
];
