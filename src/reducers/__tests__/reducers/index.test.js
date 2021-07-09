import * as actions from '../../../actions/index';
import * as c from '../../../actions/ActionTypes';

describe('Tap list actions', () => {
  it('deleteTap should create DELETE_TAP action', () => {
    expect(actions.deleteTap(1)).toEqual({
      type: c.DELETE_TAP,
      id: 1
    });
  });
  it('toggleForm should create TOGGLE_FORM action', () => {
    expect(actions.toggleForm()).toEqual({
      type: c.TOGGLE_FORM
    })
  })
  it('addTap should create an ADD_TAP action', () => {
    expect(actions.addTap({
      type: c.ADD_TAP,
      name: "name",
      brand: "brand",
      price: 12.99,
      alcoholContent: 6.7,
      pints: 124,
      id: 1
    })).toEqual({
      type: c.ADD_TAP,
      name: "name",
      brand: "brand",
      price: 12.99,
      alcoholContent: 6.7,
      pints: 124,
      id: 1
    });
  })
});