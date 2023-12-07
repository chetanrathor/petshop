import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { setIsAuthenticatedTrue, setUser } from '../features/authentication/stores/AuthSlice';
import ModalComponent from '../components/ModalComponent';
import ConsultAVet from '../features/consultation/components/ConsultAVet';
import MyProfile from '../features/profile/components/MyProfile';
import { RootState } from '../stores/Store';
import AuthenticatedLayout from './Authenticated/AuthenticatedLayout';
import Checkout from './Authenticated/Pages/Checkout';
import Home from './Authenticated/Pages/Home';
import PetGuide from './Authenticated/Pages/PetGuide';
import PetGuideDetail from './Authenticated/Pages/PetGuideDetail';
import ProductCart from './Authenticated/Pages/ProductCart';
import ProductPage from './Authenticated/Pages/ProductPage';
import Shop from './Authenticated/Pages/Shop';
import { isTokenAvailable } from './Authenticated/Services/AuthService';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { ToastContainer } from 'react-toastify';
import ProtectedRoute from '../Shared/ProtectedRoute';
import { useEffect } from 'react';
const Layout = () => {

  const { modalReducer } = useSelector((state: RootState) => state)
  const { child, show } = modalReducer

  const dispatch = useDispatch()

  if (isTokenAvailable()) {
    dispatch(setIsAuthenticatedTrue())
  }

  const authenticationToken = localStorage.getItem('authentication')
  if (authenticationToken) {
    dispatch(setIsAuthenticatedTrue())
  }

  // useEffect(() => {
  //   let user = localStorage.getItem('user') ?? ''
  //   try {
  //     user = JSON.parse(user)
  //     dispatch(setUser(user))
  //   } catch (error) {
  //     return;
  //   }
  // }, [])



  return (

    <GoogleOAuthProvider clientId='776539522023-j8bru3hgob4tq7cnbo2e7p0406o2h57b.apps.googleusercontent.com' >
      <div className=''>
        <Routes>
          <Route path='' element={<AuthenticatedLayout></AuthenticatedLayout>} >
            <Route path='home' element={<Home></Home>} ></Route>
            <Route path='consult' element={<ConsultAVet></ConsultAVet>} ></Route>
            <Route path='petguide' element={<PetGuide></PetGuide>}></Route>
            <Route path='petguide/:id' element={<PetGuideDetail></PetGuideDetail>}></Route>

            <Route path='profile/:id' element={<ProtectedRoute>
              <MyProfile></MyProfile>
            </ProtectedRoute>} >

            </Route>

            <Route path='shop' element={<Shop></Shop>} ></Route>
            <Route path='shop/:id' element={<ProductPage></ProductPage>} ></Route>
            <Route path='checkout/:id' element={<ProtectedRoute><ProductCart></ProductCart></ProtectedRoute>}></Route>
            <Route path='payment/:id' element={<ProtectedRoute><Checkout></Checkout></ProtectedRoute>}></Route>
          </Route>
        </Routes>
      </div>
      <div className="">
        <ModalComponent child={child} handleClose='hds' show={show}></ModalComponent>
      </div>
    </GoogleOAuthProvider>

  )

}
export default Layout
