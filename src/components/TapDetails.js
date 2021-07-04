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
      <p>{tap.pints}</p>
      <div class="row">
        <div class="col-6">
          <button className="btn btn-success mb-3 btn-custom" onClick={props.onClickingEdit}>Edit Tap Details</button>
        </div>
        <div class="col-6">
          <button className="btn btn-danger mb-3 btn-custom" onClick={() => onClickingDelete(tap.id)}>Remove Tap</button>
        </div>
      </div>
    </React.Fragment>
  )
}

TapDetails.propTypes = {
  tap: PropTypes.object,
  onClickingEdit: PropTypes.func,
  onClickingDelete: PropTypes.func
}

export default TapDetails;