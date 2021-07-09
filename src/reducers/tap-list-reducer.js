import sampleTap from '../static/sampleTap.json'
import * as c from '../actions/ActionTypes'

const reducer = (state = sampleTap, action) => {
  const { name, brand, price, alcoholContent, pints, id } = action;
  switch (action.type) {
    case c.ADD_TAP:
      return {
        ...state,
        [id]: {
          name,
          brand,
          price,
          alcoholContent,
          pints,
          id
        }
      }
    default:
      return state;
  }

}

export default reducer;