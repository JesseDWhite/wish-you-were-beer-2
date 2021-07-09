import * as c from './ActionTypes';

export const deleteTap = id => ({
  type: c.DELETE_TAP,
  id
});

export const toggleForm = () => ({
  type: c.TOGGLE_FORM
});

export const addTap = (tap) => {
  const { name, brand, price, alcoholContent, pints, id } = tap;
  return {
    type: c.ADD_TAP,
    name: name,
    brand: brand,
    price: price,
    alcoholContent: alcoholContent,
    pints: pints,
    id: id
  }
}