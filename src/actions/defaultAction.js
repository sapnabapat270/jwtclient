import * as types from './actionTypes';

export function defaultSuccess() {
  return {type:types.LOAD_DEFAULT};
}

export default{
  loadDefault:()=>{
    return{
      type:types.LOAD_DEFAULT,
    };
  }
};
