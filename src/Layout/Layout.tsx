import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import ModalComponent from '../components/ModalComponent'
import ProgressBar from '../components/ModalComponent';
import { setIsAuthenticatedTrue } from '../State/AuthSlice';
import { RootState } from '../stores/Store';
import AuthenticatedLayout from './Authenticated/AuthenticatedLayout';
import Checkout from './Authenticated/Pages/Checkout';
import Home from './Authenticated/Pages/Home';
import PetGuide from './Authenticated/Pages/PetGuide';
import PetGuideDetail from './Authenticated/Pages/PetGuideDetail';
import Shop from './Authenticated/Pages/Shop';
import { isTokenAvailable } from './Authenticated/Services/AuthService';
import MyProfile from '../features/profile/components/MyProfile';
import ProductPage from './Authenticated/Pages/ProductPage';
import ProductCart from './Authenticated/Pages/ProductCart';
import ConsultAVet from '../features/consultation/components/ConsultAVet';
const Layout = () => {

  const { modalReducer, progressBarReducer } = useSelector((state: RootState) => state)
  const { child, show } = modalReducer
  const { isProgressBarVisible } = progressBarReducer

  // console.log('child :>> ', state);
  const dispatch = useDispatch()

  if (isTokenAvailable()) {
    dispatch(setIsAuthenticatedTrue())
  }




  return (
    <>

      <div className=''>
        <Routes>
          <Route path='' element={<AuthenticatedLayout></AuthenticatedLayout>} >
            <Route path='home' element={<Home></Home>} ></Route>
            <Route path='consult' element={<ConsultAVet></ConsultAVet>} ></Route>
            <Route path='petguide' element={<PetGuide></PetGuide>}></Route>
            <Route path='petguide/:id' element={<PetGuideDetail></PetGuideDetail>}></Route>
            <Route path='profile/:id' element={<MyProfile></MyProfile>}></Route>
            <Route path='shop' element={<Shop></Shop>} ></Route>
            <Route path='shop/:id' element={<ProductPage></ProductPage>} ></Route>
            <Route path='checkout/:id' element={<ProductCart></ProductCart>}></Route>
            <Route path='payment/:id' element={<Checkout></Checkout>}></Route>
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
