import React from 'react';
import PropTypes from 'prop-types';

function TapDetails(props) {
  const { tap, onClickingDelete } = props;

  return (
    <React.Fragment>
      <h2>{tap.name} Details</h2>
      <h3>{tap.brand}</h3>
      <p>{tap.price}</p>
      <p>{tap.alcoholContent}</p>
      <p>{tap.quantity}</p>

      <button onClick={props.onClickingEdit}>Edit Tap Details</button>
      <button onClick={() => onClickingDelete(tap.id)}>Remove Tap</button>
    </React.Fragment>
  )
}

TapDetails.propTypes = {
  tap: PropTypes.object,
  onClickingEdit: PropTypes.func,
  onClickingDelete: PropTypes.func
}

export default TapDetails;