import './App.css';
import { useState } from 'react';
import confetti from 'canvas-confetti';
import { TURN } from './constant';
import { checkEndGame, checkWinnerFrom } from './utiil/board';
import { Square } from './Component/Square';
import { WinnerModal } from './Component/WinnerModal';
import { resetGameToStorage, saveGameToStorage } from './utiil/storage';

// COMPONENTE APP PRINCIPAL
function App () {
  // USESTATES
  const [board, setBoard] = useState(() => {
    const boardFromStorage = window.localStorage.getItem('board');
    return boardFromStorage ? JSON.parse(boardFromStorage) : Array(9).fill(null);
  });

  const [turn, setTurn] = useState(() => {
    const turnFromStorage = window.localStorage.getItem('turn');
    return turnFromStorage ?? TURN.X;
  });

  const [winner, setWinner] = useState(null);

  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setTurn(TURN.X);
    setWinner(null);
    resetGameToStorage();
  };

  const updateBoard = (index) => {
    if (board[index] || winner) return;
    // NUEVO BOARD
    const newBoard = [...board];
    newBoard[index] = turn;
    setBoard(newBoard);

    // NUEVO ESTADO DE TURNO
    const newTurn = turn === TURN.X ? TURN.O : TURN.X;
    setTurn(newTurn);

    // GUARDAR ULTIMA INSTANCIA DEL JUEGO EN localstorage.
    saveGameToStorage({
      board: newBoard,
      turn: newTurn
    });

    // REVISAR SI HAY UN GANADOR
    const newWinner = checkWinnerFrom(newBoard);
    if (newWinner) {
      confetti();
      setWinner(newWinner); // GANADOR
      resetGameToStorage();
    } else if (checkEndGame(newBoard)) {
      setWinner(false); // EMPATE
    }
  };

  return (
    <main className='board'>
      <h2>Ta-Te-Ti</h2>
      <button onClick={resetGame}>Reset Juego</button>
      <section className='game'>
        {
          board.map((square, index) => {
            return (
              <Square
                key={index}
                index={index}
                updateBoard={updateBoard}
              >
                {square}
              </Square>
            );
          })
        }
      </section>

      <section className='turn'>
        <Square isSelected={turn === TURN.X}>
          {TURN.X}
        </Square>
        <Square isSelected={turn === TURN.O}>
          {TURN.O}
        </Square>
      </section>

      {
        // SI ES TRUE RENDERIZAR LO DE LA DERECHA CON AND
        winner !== null && (<WinnerModal winner={winner} resetGame={resetGame} />)
      }
    </main>
  );
}
export default App;
