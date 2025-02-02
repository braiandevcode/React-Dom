import { stylesBall } from "../constants";
import PropTypes from "prop-types";

// COMPONENTE BOLA
export function FollowMove({ enable, position, updatedStateEnable }) {
  // INVOCO FUNCION PARA DAR ESTILOS A BOLA
  const STYLES_BALL = stylesBall(position.x, position.y);
  const handleClick = () => {
    updatedStateEnable(!enable);
  };

  return (
    <>
      <div style={STYLES_BALL}></div>
      <button onClick={handleClick} type="button">
        {`${enable ? "Desactivar" : "Activar"}`} seguir puntero
      </button>
    </>
  );
}

FollowMove.propTypes = {
  position: PropTypes.object.isRequired,
  enable: PropTypes.bool.isRequired,
  updatedStateEnable: PropTypes.func.isRequired,
};
