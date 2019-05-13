import React from 'react';
import PropTypes from 'prop-types';

const Button = (props) => (
    <button
        style={props.style}
        className={`deck-number text-center btn ${props.class}`} 
        onClick={() => props.onClick()}
        disabled={props.disabled}
    >
        {props.text}
    </button>
)

Button.defaultProps = {
    class: 'btn-primary',
    disabled: false,
    text: 'button'
}

Button.propTypes = {
    class: PropTypes.string,
    onClick: PropTypes.func.isRequired,
    disabled: PropTypes.bool,
    text: PropTypes.string
}

export default Button;