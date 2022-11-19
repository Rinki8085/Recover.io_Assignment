import * as types from './actionTypes';

const initialState = {
   blog:[],
   isLoading:false,
   isError:false
}

const reducer = (oldState=initialState, action)=>{
   const {type, payload} = action;
   switch(type){
      case types.USER_BLOG_GET_REQUEST:
         return{
            isLoading:true
         }
      case types.USER_BLOG_GET_SUCCESS:
         return{
            isLoading:false,
            blogs:payload
         }
      case types.USER_BLOG_GET_FAILURE:
         return{
            isError:true
         }
      case types.USER_BLOG_POST_REQUEST:
         return{
            isLoading:true
         }
      case types.USER_BLOG_POST_SUCCESS:
         return{
            isLoading:false,
            blogs:payload
         }
      case types.USER_BLOG_POST_FAILURE:
         return{
            isError:true
         }
      default:
         return{
            ...oldState
         }
   }
}

export {reducer};