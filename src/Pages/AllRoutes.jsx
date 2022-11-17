import {Routes,Route} from 'react-router-dom';
import Homepage from './Homepage';
import AdminLogin from './Admin/adminLogin';
import ContentWriterLogin from './ContentWriter/ContentLogin';
import AllBlogs from './AllBlogs';

function AllRoutes(){
   return(
      <Routes>
         <Route path='/' element={<Homepage/>} />
         <Route path='/admin' element={<AdminLogin/>} />
         <Route path='/writeBlogs' element={<ContentWriterLogin/>} />
         <Route path='/blogs' element={<AllBlogs/>} />
      </Routes>
   )
}

export default AllRoutes;