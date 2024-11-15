import PropTypes from "prop-types";
export function Button ({text, className}){
    return (
        <button className={className}>{text}</button>
    )
}

Button.propTypes = {
    text: PropTypes.string.isRequired,
    className: PropTypes.string.isRequired,

}