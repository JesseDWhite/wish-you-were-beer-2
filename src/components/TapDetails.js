import React from 'react';
import PropTypes from 'prop-types';

function TapDetails(props) {
  const { tap, onClickingDelete } = props;

  return (
    <React.Fragment>
      <h2>{props.name} Details</h2>
      <h3>{props.brand}</h3>
      <p>{props.price}</p>
      <p>{props.alcoholContent}</p>
      <p>{props.quantity}</p>

      <button onClick={() => onClickingEdit(tap.id)}>Edit Tap Details</button>
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