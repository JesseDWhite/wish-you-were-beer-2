import React from 'react';
import Tap from './Tap';
import PropTypes from 'prop-types';

function TapList(props) {
  return (
    <React.Fragment>
      {Object.values(props.tapList).map((tap) =>
        <Tap
          whenTapClicked={props.onTapSelection}
          handleSellingPint={props.handleSellingPint}
          name={tap.name}
          brand={tap.brand}
          price={tap.price}
          alcoholContent={tap.alcoholContent}
          pints={tap.pints}
          status={tap.status}
          id={tap.id}
          key={tap.id}
        />
      )}
    </React.Fragment>
  )
}

TapList.propTypes = {
  tapList: PropTypes.object,
  onTapSelection: PropTypes.func,
  handleSellingPint: PropTypes.func,
}

export default TapList;