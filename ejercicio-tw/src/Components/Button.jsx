import PropTypes from "prop-types";
export function Button({ text, className, handle }) {
    return (
        <>
            <button onClick={handle} className={className}>
                <span className="tw-followCard-text">{text}</span>
                <span className="tw-followCard-stopFollow">Dejar de seguir</span>
            </button>
        </>
    )
}

Button.propTypes = {
    text: PropTypes.string.isRequired,
    className: PropTypes.string.isRequired,
    handle:PropTypes.func.isRequired,
}