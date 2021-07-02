import React from 'react';
import PropTypes from 'prop-types';

function Tap(props) {
  return (
    <React.Fragment>
      <div onClick={() => props.whenTapClicked(props.id)}>
        <h2>{props.name}</h2>
        <h3>{props.brand}</h3>
        <p>{props.price}</p>
        <p>{props.alcoholContent}</p>
        <p>{props.quantity}</p>
      </div>
    </React.Fragment>
  )
}

Tap.propTypes = {
  name: PropTypes.string,
  brand: PropTypes.string,
  price: PropTypes.number,
  alcoholContent: PropTypes.number,
  quantity: PropTypes.number,
  id: PropTypes.string,
  whenTapClicked: PropTypes.func
};

export default Tap;