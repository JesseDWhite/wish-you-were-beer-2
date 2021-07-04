import React from 'react';
import PropTypes from 'prop-types';

function ReusableForm(props) {
  return (
    <React.Fragment>
      <form onSubmit={props.formSubmissionHandler}>
        <input
          type='text'
          name='name'
          placeholder='Name of Tap'
          className='form-control mb-3'
        />
        <input
          type='text'
          name='brand'
          placeholder='Tap Maker'
          className='form-control mb-3'
        />
        <input
          type='number'
          name='price'
          placeholder='Price Per Pint'
          className='form-control mb-3'
        />
        <input
          type='number'
          name='alcoholContent'
          placeholder='Alcohol Content'
          className='form-control mb-3'
        />
        <input
          type='number'
          name='pints'
          value='124'
          placeholder='Number of Pints Availible'
          className='form-control mb-3'
        />
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