import {combineReducers} from 'redux';
import defaultReducer from './defaultReducer';
import registerReducer from './registerReducer';


const rootReducer=combineReducers(
  defaultReducer,
  registerReducer
);

export default rootReducer;
