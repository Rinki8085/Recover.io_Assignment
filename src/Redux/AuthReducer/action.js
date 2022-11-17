import axios from 'axios';
import * as types from './actionTypes';

const adminLogin = (payload)=>(dispatch)=>{
   console.log('e')
   dispatch({type:types.ADMIN_LOGIN_REQUEST});
   return axios.post('https://reqres.in/api/login',payload)
         .then((res)=>dispatch({type:types.ADMIN_LOGIN_SUCCESS,payload:res.data}))
         .catch((err)=>dispatch({type:types.ADMIN_LOGIN_FAILURE}))
}

export {adminLogin};