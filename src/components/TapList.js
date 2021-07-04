import React from 'react';
import Tap from './Tap';
import PropTypes from 'prop-types';

function TapList(props) {
  return (
    <React.Fragment>
      {props.tapList.map((tap) =>
        <Tap
          whenTapClicked={props.onTapSelection}
          whenPintSells={props.onSaleOfPint}
          name={tap.name}
          brand={tap.brand}
          price={tap.price}
          alcoholContent={tap.alcoholContent}
          pints={tap.pints}
          id={tap.id}
          key={tap.id}
        />
      )}
    </React.Fragment>
  )
}

TapList.propTypes = {
  tapList: PropTypes.array,
  onTapSelection: PropTypes.func,
  onSaleOfPint: PropTypes.func
}

export default TapList;