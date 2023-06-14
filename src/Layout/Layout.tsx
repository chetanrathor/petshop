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
import { useSelector, useDispatch } from 'react-redux';
import { isTokenAvailable } from './Authenticated/Services/AuthService';
import { setIsAuthenticatedFalse, setIsAuthenticatedTrue } from './Authenticated/State/AuthSlice';
import ModalComponent from '../Shared/Components/Modal/ModalComponent';
import { RootState } from '../Store/Store';
import ProgressBar from '../Shared/Components/ProgressBar/ProgressBar';
const Layout = () => {

  const { modalReducer, progressBarReducer } = useSelector((state: RootState) => state)
  const { child, show } = modalReducer
  const { isProgressBarVisible } = progressBarReducer

  // console.log('child :>> ', state);
  const dispatch = useDispatch()

  if (isTokenAvailable()) {
    dispatch(setIsAuthenticatedTrue())
  }

  const getProgressBar = () => {

    console.log('isProgressBarVisible :>> ', isProgressBarVisible);

    if (isProgressBarVisible) {
      return (<>
        <ProgressBar></ProgressBar>

      </>)
    }
    else {
      return null
    }
  }


  return (
    <>
      {
        getProgressBar()
      }
      <div className=''>
        <Routes>
          <Route path='' element={<AuthenticatedLayout></AuthenticatedLayout>} >
            <Route path='home' element={<Home></Home>} ></Route>
            <Route path='petguide' element={<PetGuide></PetGuide>}></Route>
            <Route path='petguide/:id' element={<PetGuideDetail></PetGuideDetail>}></Route>
            <Route path='shop' element={<Shop></Shop>} ></Route>
          </Route>
        </Routes>
      </div>
      <div className="">
        <ModalComponent child={child} handleClose='hds' show={show}></ModalComponent>
      </div>
    </>
  )

}
export default Layout
