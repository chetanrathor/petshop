import { useDispatch, useSelector } from 'react-redux'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { setChild, setShow } from '../State/ModalSlice'
import { MODAL_TYPES } from '../constant/modal-types'
import { getKey } from '../utils'
import Image from './Image'
import ButtonComponent from './button/ButtonComponent'
import ButtonText from './button/ButtonText'
import { RootState } from '../stores/Store'
const Navbar = () => {
    function createLinkItem(name: string, path: string) {
        return {
            name: name,
            path: path
        };
    }

    const linkItems = [
        createLinkItem('Home', '/home'),
        createLinkItem('Consult a vet', '/consult'),
        createLinkItem('Shop', '/shop'),
        createLinkItem('Pet guide', '/petguide')
    ];

    const { isAuthenticated, user } = useSelector((state: RootState) => state.authReducer)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const handelCartButtonClick = () => {
        if (isAuthenticated === false) {
            dispatch(setShow(true))
            dispatch(setChild(MODAL_TYPES.LOGIN))
        }else{
            navigate(`/checkout/${user.id? user.id:1} `)
        }

    }
    const handelProfileClick = () => {
        navigate(`/profile/${user.id}`)
    }
    const handelLogoClick = () => {

        navigate('/')
        window.scrollTo({ top: 0, left: 0 })
    }
    const location = useLocation();
    return (
        <div>
            <div className="d-none d-lg-flex flex-column justify-content-center navbar__container">
                <div className="d-flex flex-row w-100 navbar__wrapper">
                    <div className="col-4 ">
                        <div onClick={handelLogoClick} className="d-flex flex-row align-items-center justify-content-between logo_brand_container">

                            <img src={process.env.PUBLIC_URL + "/logo.png"} height='48px' width='61px' alt="" />
                            <h3 className='brand'>Just Pet</h3>
                        </div>
                    </div>

                    <div className="col-4 d-flex flex-row justify-content-around  align-items-center nav_menu_items">
                        {
                            linkItems.map((item) => {
                                return (

                                    <div key={getKey()} className="d-flex flex-column align-items-center item">
                                        <Link to={item.path}>{item.name}</Link>
                                        {location.pathname === item.path ?
                                            <Image isPublicImage alt='active dot' height={'8px'} width={'8px'} path='Active-dot.png' className='mt-2' ></Image>
                                            : <>&nbsp;</>
                                        }
                                    </div>

                                )
                            })
                        }



                    </div>
                    <div className="col-4 d-flex flex-row justify-content-end gap-5  cart_accoount_container" >

                        <ButtonComponent className='px-4 cart-btn ' handelClick={handelCartButtonClick} isSubmitButton={false} backgroundColor='warning' disabled={false} >
                            {/* <ButtonText className='cart_btn_text' fontSize='small' > <Image isPublicImage height='30px' width='21px' path='cart.png' alt='' className=''></Image> Cart</ButtonText> */}
                            <div className="d-flex flex-row align-items-center gap-2"> <Image isPublicImage height='22px' width='20px' path='cart.png' alt='' className=''></Image> <ButtonText className='cart_btn_text' fontSize='small' >
                                {
                                    isAuthenticated ? '(0 items)' : 'cart'
                                }
                            </ButtonText> </div>
                        </ButtonComponent>

                        {
                            isAuthenticated ? <ButtonComponent className='px-4 border ' handelClick={handelProfileClick} isSubmitButton={false} backgroundColor='primary' disabled={false} >
                                <div className="d-flex flex-row gap-2 ">
                                    <Image alt='' height='28px' isPublicImage path='btn_user.png' width='28px'></Image>
                                    <ButtonText className='color-' fontSize='small' >  Accounts </ButtonText>
                                </div>
                            </ButtonComponent> : <ButtonComponent className='px-5 border ' handelClick={handelCartButtonClick} isSubmitButton={false} backgroundColor='primary' disabled={false} >
                                <ButtonText className='color-' fontSize='small' >Login</ButtonText>
                            </ButtonComponent>
                        }

                        {/* <ButtonComponent handelClick={handelLoginButtonClick} isSubmitButton={false} bgColor='background-primary' extraClass=' px-5 py-2-5 border-0' canActivateLoader={false} content='Login' shouldDisabel={false} ></ButtonComponent> */}
                    </div>


                </div>
            </div>
        </div>
    )
}

export default Navbar
