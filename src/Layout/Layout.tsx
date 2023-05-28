import React from 'react'
import AuthenticatedLayout from './Authenticated/AuthenticatedLayout'
import {createBrowserRouter,RouterProvider,Route,Link, createRoutesFromElements, Routes, useLocation, useNavigate} from 'react-router-dom'
import App from '../App';
import UnAuthenticatedLayout from './UnAuthenticated/UnAuthenticatedLayout';


const Layout = () => {
  const location = useLocation()
  const navigate = useNavigate()
  return (
    <div>
     {/* <button onClick={(e)=>{
      e.preventDefault();
     if(location.pathname == '/'){
      navigate('/auth')
    }else{
      
      navigate('/')
     }

     }}>Click</button> */}
    <Routes>
    <Route path='/' element={<UnAuthenticatedLayout></UnAuthenticatedLayout>} ></Route>
    <Route path='/auth' element={<AuthenticatedLayout></AuthenticatedLayout>} ></Route>
    </Routes>
    </div>
  )
}

export default Layout
