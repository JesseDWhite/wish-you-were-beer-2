import React from 'react';
import PropTypes from 'prop-types';
import ReusableForm from './ReusableForm';
import { v4 } from 'uuid';

function NewTapForm(props) {
  function handleNewTapFormSubmission(event) {
    event.preventDefault();
    const { name, brand, price, alcoholContent, pints } = event.target;

    props.onNewTapCreation({
      name: name.value,
      brand: brand.value,
      price: parseFloat(price.value).toFixed(2),
      alcoholContent: parseFloat(alcoholContent.value).toFixed(1),
      pints: parseInt(pints.value),
      id: v4()
    });
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