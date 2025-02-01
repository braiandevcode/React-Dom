import PropTypes from 'prop-types';
export function GridContainer ({ children }) {
  return (
    <>
      <div className="GridCards">{children}</div>
    </>
  );
}

GridContainer.propTypes = {
  children: PropTypes.array.isRequired
};
