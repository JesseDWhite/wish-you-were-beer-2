import React from 'react';
import PropTypes from 'prop-types';

function Tap(props) {
  return (
    <React.Fragment>
      {/* <div onClick={() => props.whenTapClicked(props.id)}> */}
      <div class="card tap-card">
        <h2>{props.name}</h2>
        <h3>Brewer - {props.brand}</h3>
        <p>Price - ${props.price}</p>
        <p>ABV - {props.alcoholContent}</p>
        <p>Pints Left - {props.pints}</p>
        <button class="btn btn-success btn-sm btn-custom-sm" onClick={() => props.whenPintSells(props.id)}>Sell Pint</button>
      </div>
      {/* </div> */}
    </React.Fragment>
  )
}

Tap.propTypes = {
  name: PropTypes.string,
  brand: PropTypes.string,
  price: PropTypes.number,
  alcoholContent: PropTypes.number,
  pints: PropTypes.number,
  id: PropTypes.string,
  whenTapClicked: PropTypes.func,
  whenPintSells: PropTypes.func
};

export default Tap;