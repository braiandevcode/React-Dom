// APLICA ESTILOS A LA BOLA
export const stylesBall = (x, y) => {
  const STYLES_BALL = {
    position: 'absolute',
    width: 40,
    height: 40,
    backgroundColor: '#09f',
    opacity: 0.8,
    left: -20,
    top: -20,
    borderRadius: '50%',
    pointerEvents: 'none',
    transition: 'transform .3s ease',
    transform: `translate(${x}px, ${y}px)`
  };
  return STYLES_BALL;
};

// CHECKEAR SI LA BOLA DEBE SEGUIR CURSOR
export const checkMoveBall = (enable, handleMouse) => {
  // SI ESTA HABILITADO
  if (enable) {
    window.addEventListener('pointermove', handleMouse);
  }
};
