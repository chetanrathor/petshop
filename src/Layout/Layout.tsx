import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import ModalComponent from '../Shared/Components/Modal/ModalComponent';
import ProgressBar from '../Shared/Components/ProgressBar/ProgressBar';
import { setIsAuthenticatedTrue } from '../State/AuthSlice';
import { RootState } from '../Store/Store';
import AuthenticatedLayout from './Authenticated/AuthenticatedLayout';
import Checkout from './Authenticated/Pages/Checkout/Checkout';
import Home from './Authenticated/Pages/Home/Home';
import PetGuide from './Authenticated/Pages/PetGuide/PetGuide';
import PetGuideDetail from './Authenticated/Pages/PetGuideDetail/PetGuideDetail';
import Shop from './Authenticated/Pages/Shop/Shop';
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
