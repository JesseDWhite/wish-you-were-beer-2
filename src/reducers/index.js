import formVisibleOnPageReducer from './form-visible-on-page-reducer';
import tapListReducer from './tap-list-reducer'
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  formVisibleOnPage: formVisibleOnPageReducer,
  masterTapList: tapListReducer
})

export default rootReducer;