import React,{useState, useDisptach, useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { adminLogin, writerLogin } from '../../Redux/AuthReducer/action';
import '../style.css';

function AdminLogin(){
   const [email, setEmail] = useState('');
   const [password, setPassword] = useState('');
   const token = useSelector((store)=>store.AuthReducer.token);
   const dispatch = useDispatch();

   const handleSubmit=(event)=>{
      event.preventDefault();
      let payload = {
         email,
         password 
      }
      dispatch(adminLogin(payload));
   }

   console.log(token)

   useEffect(()=>{

   },[])

   return(
      <div>
      <h2 className='h2'>Welcome To Admin Panel</h2>
      <div className='login_form'>
         <form>
            <h2 className='h2'>Login Here</h2>
            <div>
               <label>Enter your email</label>
               <input type='email' placeholder='Enter Your EmailId' value={email} onChange={(e)=>setEmail(e.target.value)} />
            </div>
            <div>
               <label>Password</label>
               <input type='password' placeholder='Enter Your password' value={password} onChange={(e)=>setPassword(e.target.value)} />
            </div>
            <div>
               <div></div>
               <button onClick={(e)=>handleSubmit(e)}>Submit</button>
            </div>
         </form>
      </div>
      </div>
   )
}

export default AdminLogin;