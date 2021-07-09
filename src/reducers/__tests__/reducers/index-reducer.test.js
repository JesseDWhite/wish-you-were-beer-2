import rootReducer from "../../index";
import { createStore } from "redux";
import tapListReducer from '../../tap-list-reducer';
import formVisibleOnPage from '../../form-visible-on-page-reducer'

describe("rootReducer", () => {
  let store = createStore(rootReducer);

  test('Should return default state if no action type is given', () => {
    expect(rootReducer({}, { type: null })).toEqual({
      masterTapList: {},
      formVisibleOnPage: false,
      editing: false
    });
  });
  test('Check that initial state of tapListReducer matches root reducer', () => {
    expect(store.getState().masterTapList).toEqual(tapListReducer(undefined, { type: null }));
  });

  test('Check that initial state of formVisibleOnPage matches root reducer', () => {
    expect(store.getState().formVisibleOnPage).toEqual(formVisibleOnPage(undefined, { type: null }));
  });

});