import PropTypes from 'prop-types';
// COMPONENTE SQUARE
export const Square = ({ children, isSelected, updateBoard, index }) => {
  const classNameSquare = `square ${isSelected ? 'is-selected' : ''}`; // OPERADOR TERNARIO PARA AÑADIR CLASE DE ESTILO  SEGUN CONDICION

  // FUNCION PARA EJECUTAR LUEGO DEL CLICK EN COMPONENTE
  const handleClick = () => {
    updateBoard(index);
  };

  return (
    <div onClick={handleClick} className={classNameSquare}>
      {children}
    </div>
  );
};

// CONFIGURACION PARA USO DE PROPOS
Square.propTypes = {
  children: PropTypes.string,
  isSelected: PropTypes.bool,
  updateBoard: PropTypes.func,
  index: PropTypes.number
};
