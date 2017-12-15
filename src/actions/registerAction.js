import * as types from './actionTypes';
import RegisterApi  from '../api/mockRegisterApi';
import register from "../components/register/register";


export default{
  registerUser:(user)=>{
    return{
      type:types.REGISTER_USER,
      data:user
    };
  }
};













