import React,{useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { writerLogin } from '../../Redux/AuthReducer/action';
import { useNavigate } from 'react-router-dom';
import '../style.css';

function ContentWriterLogin(){
   const [email, setEmail] = useState('');
   const [password, setPassword] = useState('');
   const token = useSelector((store)=>store.AuthReducer.token);
   const dispatch = useDispatch();
   const navigate = useNavigate();

   const handleSubmit = (event)=>{
      event.preventDefault();
      let payload = {
         email,
         password
      }
      dispatch(writerLogin(payload));

      let name = localStorage.getItem('name');
      navigate(`/${name}/blog`);
   }

   return(
      <div>
      <h2 className='h2'>Welcome To Content Writer Panel</h2>
      <div className='login_form'>
         <form>
            <h2 className='h2'>Login Here</h2>
            <div>
               <label>Enter your email</label>
               <input type='email' placeholder='Enter Your EmailId' value={email} onChange={(e)=>setEmail(e.target.value)} />
            </div>
            <div>
               <label>Password</label>
               <input type='password' placeholder='Enter Your password' onChange={(e)=>setPassword(e.target.value)} />
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

export default ContentWriterLogin;