import * as types from '../actions/actionTypes';

export default function registerReducer(state={},action){
  let newState=Object.assign({},state);
  switch(action.type){
    case types.REGISTER_USER:
      console.log("The new registered user is:" + JSON.stringify(action.data));
      return newState;
    default:
      return newState;
  }
}
