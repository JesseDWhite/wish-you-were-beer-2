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
        />
        <input
          type='text'
          name='brand'
          placeholder='Tap Maker'
        />
        <input
          type='number'
          name='price'
          placeholder='Price Per Pint'
        />
        <input
          type='number'
          name='alcoholContent'
          placeholder='Alcohol Content'
        />
        <input
          type='number'
          name='quantity'
          placeholder='Number of Pints Availible'
        />
      </form>
    </React.Fragment>
  )
}

ReusableForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string
};

export default ReusableForm;