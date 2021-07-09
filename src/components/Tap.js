import React from 'react';
import PropTypes from 'prop-types';

function Tap(props) {
  return (
    <React.Fragment>
      <div>
        <div className="card tap-card">
          <h2>{props.name}</h2>
          <h3>Brewer - {props.brand}</h3>
          <p>Price - ${props.price}</p>
          <p>ABV% - {props.alcoholContent}</p>
          <p>Pints Left - {props.pints}</p>
          <p className="status">{props.status}</p>
          <button className="btn btn-success btn-sm btn-custom-sm" onClick={() => props.whenTapClicked(props.id)}>View Tap</button>
        </div>
      </div>
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
  status: PropTypes.string,
  whenTapClicked: PropTypes.func,
};

export default Tap;