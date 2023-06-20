import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
import { linkItems } from './index'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../../Store/Store'
import { setChild, setHandelClose, setShow } from '../../../State/ModalSlice'
import Login from '../../../Layout/UnAuthenticated/Components/Login/Login'
import { MODAL_TYPES } from '../../../constant/modal-types'
import { setProgressBarVisiblity } from '../../../State/ProgressBarSlice'
import ButtonComponent from '../ButtonComponent/ButtonComponent'
const Navbar = () => {
    const { authReducer, modalReducer } = useSelector((state: RootState) => state)
    const {isAuthenticated} = authReducer
    const {} = modalReducer
    const dispatch = useDispatch()
    const handelCartButtonClick = ()=>{
        dispatch(setShow(true))
       dispatch(setChild(MODAL_TYPES.LOGIN))
  
    }

  const handelLoginButtonClick = ()=>{
    if (isAuthenticated) {
        
    }else{
        
        dispatch(setProgressBarVisiblity({shouldProgressBarVisible:true}))

        setTimeout(() => {
        dispatch(setProgressBarVisiblity({shouldProgressBarVisible:false}))
        handelCartButtonClick()
            
        }, 500);

    }
  }

    return (
        <div>
            <div className="d-none d-lg-flex flex-column justify-content-center navbar__container">
                <div className="d-flex flex-row w-100 navbar__wrapper">
                    <div className="col-5 ">
                        <div className="d-flex flex-row align-items-center justify-content-between logo_brand_container">

                            <img src={process.env.PUBLIC_URL + "/logo.png"} height='48px' width='61px' alt="" />
                            <h3 className='brand'>Just Pet</h3>
                        </div>
                    </div>

                    <div className="col-4 d-flex flex-row justify-content-around  align-items-center nav_menu_items">
                        {
                            linkItems.map((item) => {
                                return (
                                    <>
                                        <div className="d-flex flex-column align-items-center item">
                                            <Link to={item.path}>{item.name}</Link>
                                            <img src={process.env.PUBLIC_URL + "/Active-dot.png"} className='mt-2' height='8px' width='8px' alt="" />
                                        </div>
                                    </>
                                )
                            })
                        }



                    </div>
                    <div className="col-3 d-flex flex-row justify-content-around flex-grow-1 cart_accoount_container" >
                   {/* <button onClick={()=>{handelCartButtonClick()}} className='btn btn-outline-primary ps-3 pe-4 py-2-5'><img src={process.env.PUBLIC_URL + "/cart.png"} height='21px' width='30px' alt="" /> <span className='cart_btn_text'>Cart</span> </button> */}
                   {/* <button onClick={()=>{handelLoginButtonClick()}}  className='btn btn-primary btn-outline-primary  background-primary '> <span className='login_btn_text' >{(isAuthenticated?'My Account':'Login')}</span> </button> */}
                   <ButtonComponent handelClick={handelCartButtonClick}  isSubmitButton={false} bgColor='background-warning' extraClass=' px-5 py-2-5 border-primary-x ' canActivateLoader={false} content='Cart' shouldDisabel={false} ></ButtonComponent>
                   <ButtonComponent handelClick={handelLoginButtonClick}  isSubmitButton={false} bgColor='background-primary' extraClass=' px-5 py-2-5 border-0' canActivateLoader={false} content='Login' shouldDisabel={false} ></ButtonComponent>
                    </div>


                </div>
            </div>
        </div>
    )
}

export default Navbar
