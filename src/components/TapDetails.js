import React from 'react';
import PropTypes from 'prop-types';

function TapDetails(props) {
  const { tap, onClickingDelete, handleSellingPint } = props;

  return (
    <React.Fragment>
      <div className="row">
        <div className="col-6">
          <h2>{tap.name} Details</h2>
          <h3>{tap.brand}</h3>
          <p>Price - ${tap.price}</p>
          <p>ABV% - {tap.alcoholContent}</p>
          <p>Pints Left - {tap.pints}</p>
          <p className="status">{tap.status}</p>
        </div>
        <div className="col-6">
          <button id="sell-button" className="btn btn-outline-light btn-custom" onClick={() => handleSellingPint()}><img id="sell-button-img" alt="drinking beer" src="https://media.giphy.com/media/eJMIGEQ1yaljaVBJ3F/giphy.gif"></img>Sell Pint</button>
        </div>
      </div>
      <div className="row">
        <div className="col-6">
          <button className="btn btn-secondary mb-3 btn-custom" onClick={props.onClickingEdit}>Edit Tap Details</button>
        </div>
        <div className="col-6">
          <button className="btn btn-danger mb-3 btn-custom" onClick={() => onClickingDelete(tap.id)}>Remove Tap</button>
        </div>
      </div>
    </React.Fragment >
  )
}

TapDetails.propTypes = {
  tap: PropTypes.object,
  onClickingEdit: PropTypes.func,
  onClickingDelete: PropTypes.func,
  handleSellingPint: PropTypes.func,
}

export default TapDetails;