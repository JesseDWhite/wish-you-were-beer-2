import formVisibleOnPageReducer from './form-visible-on-page-reducer';
import tapListReducer from './tap-list-reducer'
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  formVisibleOnPage: formVisibleOnPageReducer,
  masterTapList: tapListReducer,
  editing: formVisibleOnPageReducer
})

export default rootReducer;