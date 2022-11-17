import React from 'react';
import '../style.css';

function ContentWriterLogin(){
   return(
      <div>
      <h2 className='h2'>Welcome To Content Writer Panel</h2>
      <div className='login_form'>
         <form>
            <h2 className='h2'>Login Here</h2>
            <div>
               <label>Enter your email</label>
               <input type='email' placeholder='Enter Your EmailId'/>
            </div>
            <div>
               <label>Password</label>
               <input type='password' placeholder='Enter Your password'/>
            </div>
            <div>
               <div></div>
               <button>Submit</button>
            </div>
         </form>
      </div>
      </div>
   )
}

export default ContentWriterLogin;