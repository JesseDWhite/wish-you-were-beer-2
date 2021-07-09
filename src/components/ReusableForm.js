import React from 'react';
import PropTypes from 'prop-types';

function ReusableForm(props) {
  return (
    <React.Fragment>
      <form onSubmit={props.formSubmissionHandler}>
        <div className='row mt-5'>
          <div className="col-6">
            <input
              type='text'
              name='name'
              placeholder='Name of Tap'
              className='form-control mb-3'
              required
            />
          </div>
          <div className="col-6">
            <input
              type='text'
              name='brand'
              placeholder='Tap Maker'
              className='form-control mb-3'
              required
            />
          </div>
          <div className="col-4">
            <label htmlFor='price' className='form-label'>Price</label>
            <input
              type='float'
              name='price'
              placeholder='Price Per Pint'
              className='form-control mb-3'
              min="0"
              step=".01"
              required
            />
          </div>
          <div className="col-4">
            <label htmlFor='price' className='form-label'>Alcohol Content</label>
            <input
              type='float'
              name='alcoholContent'
              placeholder='Alcohol Content'
              className='form-control mb-3'
              min="0"
              step=".01"
              required
            />
          </div>
          <div className="col-4 mb-5">
            <label htmlFor='pints' className='form-label'>Number of Pints Availible</label>
            <input
              type='number'
              name='pints'
              placeholder='Number of Pints Availible'
              className='form-control mb-3'
              min="0"
              required
            />
          </div>
        </div>
        <button type="submit" className="btn btn-success btn-custom">{props.buttonText}</button>
      </form>
    </React.Fragment>
  )
}

ReusableForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string
};

export default ReusableForm;