import React from 'react';
import PropTypes from 'prop-types';
import '../../css/Card.css';

const Card = (props) => (
    <div className="item">
        <img src={props.url} alt={props.cardName} className="card"/>
    </div>
)

Card.defaultProps = {
    url: '',
    cardName: ''
}

Card.propTypes = {
    url: PropTypes.string.isRequired,
    cardName: PropTypes.string
}

export default Card;