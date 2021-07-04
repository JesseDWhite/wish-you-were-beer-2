import React from 'react';
import PropTypes from 'prop-types';
import ReusableForm from './ReusableForm';
import { v4 } from 'uuid';

function NewTapForm(props) {
  function handleNewTapFormSubmission(event) {
    event.preventDefault();

    props.onNewTapCreation({ name: event.target.name.value, brand: event.target.brand.value, price: event.target.price.value, alcoholContent: event.target.alcoholContent.value, pints: event.target.pints.value, id: v4() });
  };

  NewTapForm.propTypes = {
    onNewTapCreation: PropTypes.func,
  };

  return (
    <React.Fragment>
      <ReusableForm
        formSubmissionHandler={handleNewTapFormSubmission}
        buttonText="Add Tap" />
    </React.Fragment>
  )
}

export default NewTapForm;