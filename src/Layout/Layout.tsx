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
            <Route path='petguide' element={<PetGuide></PetGuide>}></Route>
            <Route path='petguide/:id' element={<PetGuideDetail></PetGuideDetail>}></Route>
            <Route path='profile/:id' element={<Checkout></Checkout>}></Route>
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
