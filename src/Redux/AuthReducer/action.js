import axios from 'axios';
import * as types from './actionTypes';

const adminLogin = (payload)=>(dispatch)=>{
   dispatch({type:types.ADMIN_LOGIN_REQUEST});
   return axios.post('https://reqres.in/api/login',payload)
         .then((res)=>dispatch({type:types.ADMIN_LOGIN_SUCCESS,payload:res.data}))
         .catch((err)=>dispatch({type:types.ADMIN_LOGIN_FAILURE}))
}

const writerLogin = (payload)=>(dispatch)=>{
   dispatch({type:types.WRITER_LOGIN_REQUEST});
   return axios.get('https://reqres.in/api/users')
         .then((res)=>{let find = findUser(res.data.data, payload);
                     if(find){
                        dispatch({type:types.WRITER_LOGIN_SUCCESS,payload:"wieunef1239"});
                     }else{
                        alert("You are not part")
                     }
         })
         .catch((err)=>console.log(err))
}

const findUser = (data,payload)=>{
   for(let i=0; i<data.length; i++){
      if(data[i].email===payload.email){
         let name = data[i].first_name;
         localStorage.setItem('name',name);
         return true;
      }
   }
}

export {adminLogin, writerLogin};