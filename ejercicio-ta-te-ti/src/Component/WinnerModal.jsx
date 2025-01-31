import { Square } from './Square';
import PropTypes from 'prop-types';
export function WinnerModal({ winner, resetGame }){
    const winnerText = winner === false ? 'Empate' : 'Ganó:';
    return(
        <section className='winner'>
        <div className='text'>
          <h2>{winnerText}</h2>

          <header className='win'>
            {winner && <Square>{winner}</Square>}
          </header>

          <footer>
            <button onClick={resetGame}>Empezar de Nuevo</button>
          </footer>
        </div>
      </section>
    )
} 

WinnerModal.propTypes = {
    winner: PropTypes.string,
    resetGame: PropTypes.func
}