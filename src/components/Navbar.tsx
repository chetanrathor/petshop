import { useDispatch, useSelector } from 'react-redux'
import { Link, useLocation } from 'react-router-dom'
import ButtonComponent from './button/ButtonComponent'
import { setShow, setChild } from '../State/ModalSlice'
import { setProgressBarVisiblity } from '../State/ProgressBarSlice'
import { MODAL_TYPES } from '../constant/modal-types'
import { RootState } from '../stores/Store'
import ButtonText from './button/ButtonText'
import Image from './Image'
import { getKey } from '../utils'
const Navbar = () => {
    const linkItems = [
        {
            name: 'Home',
            path: '/home',

        },
        {
            name: 'Consult a vet',
            path: '/consult',

        },
        {
            name: 'Shop',
            path: '/shop',

        },
        {
            name: 'Pet guid',
            path: '/petguide',

        }
    ]
    const { authReducer, modalReducer } = useSelector((state: RootState) => state)
    const { isAuthenticated } = authReducer
 
    const dispatch = useDispatch()
    const handelCartButtonClick = () => {
        dispatch(setShow(true))
        dispatch(setChild(MODAL_TYPES.LOGIN))

    }

    const location = useLocation();
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
                                        <div key={getKey()} className="d-flex flex-column align-items-center item">
                                            <Link to={item.path}>{item.name}</Link>
                                            {location.pathname === item.path ?
                                                <Image isPublicImage alt='active dot' height={'8px'} width={'8px'} path='Active-dot.png' className='mt-2' ></Image>
                                                : <>&nbsp;</>
                                            }
                                        </div>
                                    </>
                                )
                            })
                        }



                    </div>
                    <div className="col-3 d-flex flex-row justify-content-around flex-grow-1 cart_accoount_container" >
                        <ButtonComponent className='px-5 border ' handelClick={handelCartButtonClick} isSubmitButton={false} backgroundColor='primary' disabled={false} >
                            <ButtonText className='color-' fontSize='small' >Login</ButtonText>
                        </ButtonComponent>
                        <ButtonComponent className='px-5 border ' handelClick={handelCartButtonClick} isSubmitButton={false} backgroundColor='primary' disabled={false} >
                            <ButtonText className='color-' fontSize='small' >Cart</ButtonText>
                        </ButtonComponent>
                        {/* <ButtonComponent handelClick={handelLoginButtonClick} isSubmitButton={false} bgColor='background-primary' extraClass=' px-5 py-2-5 border-0' canActivateLoader={false} content='Login' shouldDisabel={false} ></ButtonComponent> */}
                    </div>


                </div>
            </div>
        </div>
    )
}

export default Navbar
