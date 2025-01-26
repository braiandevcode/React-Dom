import PropTypes from "prop-types";
export function Button({ text, className, handle }) {
    return (
        <>
            <button onClick={handle} className={className}>{text}</button>
        </>
    )
}

Button.propTypes = {
    text: PropTypes.string.isRequired,
    className: PropTypes.string.isRequired,
    handle:PropTypes.func.isRequired,
}