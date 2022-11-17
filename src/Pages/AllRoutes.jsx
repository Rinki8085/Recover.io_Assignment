import {Routes,Route} from 'react-router-dom';
import Homepage from './Homepage';
import Admin from './Admin/admin';
import WriteBlogs from './ContentWriter/writerBlogs';
import AllBlogs from './AllBlogs';

function AllRoutes(){
   return(
      <Routes>
         <Route path='/' element={<Homepage/>} />
         <Route path='/admin' element={<Admin/>} />
         <Route path='/writeBlogs' element={<WriteBlogs/>} />
         <Route path='/blogs' element={<AllBlogs/>} />
      </Routes>
   )
}

export default AllRoutes;