import React from 'react';
import { Link } from 'react-router-dom';
import AdminLogin from './Admin/adminLogin';
import ContentWriterLogin from './ContentWriter/ContentLogin';
import './style.css';

function HomePage(){

   return(
      <div>
         <div >
            <h2 className='h2'>Welcome to blogger page</h2>
            <div className='partition'>
               <div>
                  <button>
                     <Link to='/admin'>Admin</Link>
                  </button>
               </div>
               <div></div>
               <div>
                  <button>
                     <Link to='/writer'>Content Writer</Link>
                  </button>
               </div>
            </div>
         </div>
      </div>
   )
}

export default HomePage;