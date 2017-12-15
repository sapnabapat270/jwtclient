import * as types from '../actions/actionTypes';

export default function registerReducer(state={},action){
  let newState=Object.assign({},state);
  switch(action.type){
    case types.LOAD_DEFAULT:
      console.log("The new state is:" + JSON.stringify(newState));
      return newState;
    default:
      return newState;
  }
}
