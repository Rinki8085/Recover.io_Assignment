import * as types from './actionTypes';

const initialState = {
   token:'',
   isLoading:false,
   isError:false
}

const reducer = (oldState=initialState,action)=>{
   const {type,payload} = action;

   switch(type){
      case types.ADMIN_LOGIN_REQUEST:
         return{
            isLoading:true,
         }
      case types.ADMIN_LOGIN_SUCCESS:
         return{
            isLoading:false,
            token:payload
         }
      case types.ADMIN_LOGIN_FAILURE:
         return{
            isError:true
         }
      case types.WRITER_LOGIN_REQUEST:
         return{
            isLoading:true
         }
      case types.WRITER_LOGIN_SUCCESS:
         return{
            isLoading:false,
            token:payload
         }
      case types.WRITER_LOGIN_FAILURE:
         return{
            isError:true
         }
      default:
         return{
            ...oldState
         }
   }

}

export {reducer}