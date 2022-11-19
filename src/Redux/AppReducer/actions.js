import * as types from './actionTypes';
import axios from './axios';

const getBlogs = (dispatch)=>{
   dispatch({type:types.USER_BLOG_GET_REQUEST});
   let name = localStorage.getItem('name');
   return axios.get(`http://localhost:8080/blogs?name=${name}`)
      .then((res)=>console.log(res.data))
      .catch((err)=>console.log(dispatch({type:types.USER_BLOG_GET_FAILURE})))
}

const postBlogs = (id)=>(dispatch)=>{
   dispatch({type:types.USER_BLOG_POST_REQUEST});
   let name = localStorage.getItem('name');
   return axios.post(`http://localhost:8080/blogs?name=${name}`)
      .then((res)=>console.log(res.data))
      .catch((err)=>console.log(dispatch({type:types.USER_BLOG_POST_FAILURE})))
}

export { getBlogs, postBlogs } ;
