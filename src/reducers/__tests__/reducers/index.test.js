import * as actions from '../../../actions';
import * as c from '../../../actions/ActionTypes';

describe('Tap list actions', () => {
  test('deleteTap shoult create DELETE_TAP action', () => {
    expect(actions.deleteTap(1)).toEqual({
      type: c.DELETE_TAP,
      id: 1
    });
  });
});