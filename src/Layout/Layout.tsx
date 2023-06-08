import React, { useState } from 'react'
import AuthenticatedLayout from './Authenticated/AuthenticatedLayout'
import { createBrowserRouter, RouterProvider, Route, Link, createRoutesFromElements, Routes, useLocation, useNavigate } from 'react-router-dom'
import App from '../App';
import UnAuthenticatedLayout from './UnAuthenticated/UnAuthenticatedLayout';
import Home from './Authenticated/Pages/Home/Home';
import PetGuide from './Authenticated/Pages/PetGuide/PetGuide';
import PetGuideDetail from './Authenticated/Pages/PetGuideDetail/PetGuideDetail';
import PetGuideList from './Authenticated/Components/PetGuideList/PetGuideList';
import Shop from './Authenticated/Pages/Shop/Shop';
const Layout = () => {
  function getSession() {
    let token = localStorage.getItem('petshop')
    if (token) {
      return true
    }
    else return false
  }
  const [tokenState, setTokenState] = useState(getSession())

  if (tokenState) {
    return (
      <div>
        <Routes>
          <Route path='' element={<AuthenticatedLayout></AuthenticatedLayout>} >
            <Route path='home' element={<Home></Home>} ></Route>
            <Route path='petguide' element={<PetGuide></PetGuide>}></Route>
            <Route path='petguide/:id' element={<PetGuideDetail></PetGuideDetail>}></Route>
            <Route path='shop' element={<Shop></Shop>} ></Route>
          </Route>
        </Routes>
      </div>
    )
  } else {
    return (
      <div>
        <Routes>
          <Route path='' element={<UnAuthenticatedLayout></UnAuthenticatedLayout>} >
          </Route>

        </Routes>
      </div>
    )
  }
}
export default Layout
