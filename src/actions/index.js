import * as c from './ActionTypes';

export const deleteTap = id => ({
  type: c.DELETE_TAP,
  id
});

export const toggleForm = () => ({
  type: c.TOGGLE_FORM
});