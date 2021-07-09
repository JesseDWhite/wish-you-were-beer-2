import formVisibleOnPage from '../../form-visible-on-page-reducer'
import * as c from '../../../actions/ActionTypes';

describe('formVisibleOnPage', () => {
  test('Should return default state if no action type is recognized', () => {
    expect(formVisibleOnPage(false, { type: null })).toEqual(false);
  })
  test('Should toggle form visibility state to true', () => {
    expect(formVisibleOnPage(false, { type: c.TOGGLE_FORM })).toEqual(true)
  })
})