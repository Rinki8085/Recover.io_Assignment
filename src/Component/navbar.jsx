import React from 'react';
import {Link} from 'react-router-dom';
import './navbar.css';

function Navbar(){
   return(
      <div >
         <div className='navbar'>
            <div>
               <Link to='/admin'>Admin</Link>
            </div>
            <div>
               <Link to='/writeBlogs'>Content Writer</Link>
            </div>
            <div>
               <Link to='/blogs'>All Blogs</Link>
            </div>
         </div>
      </div>
   )
}

export default Navbar;