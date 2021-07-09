import tapListReducer from '../../tap-list-reducer';

describe('tapListReducer', () => {
  let action;
  test('Should return default state if no aciton type is recognized', () => {
    expect(tapListReducer({}, { type: null })).toEqual({});
  })
})