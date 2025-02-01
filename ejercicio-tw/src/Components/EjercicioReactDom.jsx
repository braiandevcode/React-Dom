import PropTypes from 'prop-types';
export function EjercicioReactDom ({ children }) {
  return (
    <>
      {children}
    </>
  );
}

EjercicioReactDom.propTypes = {
  children: PropTypes.array.isRequired
};
