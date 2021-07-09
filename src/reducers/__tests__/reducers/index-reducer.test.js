import rootReducer from "../../index";

describe("rootReducer", () => {

  test('Should return default state if no action type is given', () => {
    expect(rootReducer({}, { type: null })).toEqual({
      masterTapList: {},
      formVisibleOnPage: false
    });
  });

});