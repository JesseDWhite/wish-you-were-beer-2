import tapListReducer from '../../tap-list-reducer';
import * as c from '../../../actions/ActionTypes'

describe('tapListReducer', () => {
  let action;

  const tapData = {
    id: "5c495f3a-eda5-44f9-8632-10a5dce2e406",
    name: "name",
    brand: "brand",
    price: 12.99,
    alcoholContent: 6.7,
    pints: 124
  }

  test('Should return default state if no aciton type is recognized', () => {
    expect(tapListReducer({}, { type: null })).toEqual({});
  })

  test('Should successfully add anew tap to masterTapList', () => {
    const { name, brand, price, alcoholContent, pints, id } = tapData;
    action = {
      type: c.ADD_TAP,
      name,
      brand,
      price,
      alcoholContent,
      pints,
      id,
    };
    expect(tapListReducer({}, action)).toEqual({
      [id]: {
        name,
        brand,
        price,
        alcoholContent,
        pints,
        id
      }
    })
  })
})