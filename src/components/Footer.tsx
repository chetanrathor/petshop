import { Link, useNavigate } from "react-router-dom"
import { getKey } from "../utils"
import Image from "./Image"
import { useDispatch, useSelector } from "react-redux"
import { RootState, store } from "../stores/Store"
import { setChild, setShow } from "../State/ModalSlice"
import { MODAL_TYPES } from "../constant/modal-types"
import { getStaticImages } from "../assets/Images"

const Footer = () => {
    const navigate = useNavigate()
    const auth = useSelector((state: RootState) => state.authReducer)
    const dispatch = useDispatch<typeof store.dispatch>()
    const handelClick = (isRequireAuthentication: boolean, path?: string) => {
        if (isRequireAuthentication) {

            if (auth.isAuthenticated) {
                navigate('/')
            } else {
                dispatch(setShow(true))
                dispatch(setChild(MODAL_TYPES.LOGIN))
            }
        } else {
            window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
            navigate(path ?? '/', { preventScrollReset: true })
        }


    }
    const usefullLink1 = [
        {
            link: 'Consult',
            path: '/',


        },
        {
            link: 'Shop',
            path: '/shop',


        },
        {
            link: 'Pet guide',
            path: '/petguide',


        }
    ]
    const usefullLink2 = [
        {
            link: 'My orders',
            path: '/profile/1',


        },
        {
            link: 'Cart',
            path: '/',


        },
        {
            link: 'My Address',
            path: '/',


        }
    ]

    const socialLinks = [
        {
            src: 'footersocial1.png',
            height: '30px',
            width: '17px',
            to: 'https://www.facebook.com'
        },
        {
            src: 'footersocial2.png',
            height: '31px',
            width: '26px',
            to: 'https://www.facebook.com'
        },
        {
            src: 'footersocial3.png',
            height: '29px',
            width: '30px',
            to: 'https://www.facebook.com'
        }
    ]

    const { icon_fb_footer, icon_insta_footer, icon_twitter_footer,email_footer,phone_footer } = getStaticImages()

    return (
        <div>
            <div className="p-2 pt-md-5 p-md-0 d-flex flex-column footer_container">
                <div className="m-auto d-flex flex-column flex-md-row justify-content-between footer_wrapper">

                    <div className="mt-4 mt-md-0  col-12 col-md-3 p-2">
                        <div className="d-flex flex-row">
                            <img src={process.env.PUBLIC_URL + "/logo.png"} height='48px' width='61px' alt="" />
                            <h3 className='ms-3 footer_heading'>Just pet</h3>
                        </div>
                        <p className='mt-4 footer_subheading'>
                            Tristique nulla aliquet enim tortor at auctor urna nunc. Massa enim nec dui nunc mattis enim ut tellus. Sed ut perspiciatis unde ...
                        </p>
                        <div className="d-flex flex-row">
                            <div className="col-4 d-flex flex-row justify-content-between social_icon_container">
                                {/* {
                                    socialLinks.map((item) => {

                                        return (

                                            <Link to={item.to} target="_blank">
                                                <Image alt="" height={item.height} isPublicImage path={item.src} width={item.width} ></Image>

                                            </Link>
                                        )

                                    })
                                } */}
                                <img src={icon_fb_footer} alt="" />
                                <img src={icon_insta_footer} alt="" />
                                <img src={icon_twitter_footer} alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="mt-4 mt-md-0 col-12 col-md-3" >
                        <div className="col-10">
                            <h6 className='footer_useful_links'>Useful Links</h6>
                            <div className="mt-4 d-flex flex-row justify-content-between">
                                <div className="col-6">
                                    {
                                        usefullLink1.map((item) => {
                                            return (<>
                                                <div className='mt-3 cursor-pointer_2'>
                                                    <img src={process.env.PUBLIC_URL + "/Active-dot.png"} alt="" height='8px' width='8px' />
                                                    <span onClick={() => { handelClick(false, item.path) }} className='ms-2 consult'>{item.link}</span>
                                                </div>
                                            </>)
                                        })
                                    }
                                </div>
                                <div className="col-6">
                                    {
                                        usefullLink2.map((item) => {
                                            return (<>
                                                <div className='mt-3 cursor-pointer_2'>
                                                    <img src={process.env.PUBLIC_URL + "/Active-dot.png"} alt="" height='8px' width='8px' />
                                                    <span onClick={() => { handelClick(true) }} className='ms-2 consult'>{item.link}</span>
                                                </div>
                                            </>)
                                        })
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mt-4 mt-md-0 col-12 col-md-3">
                        <h6 className='footer_useful_links'>Contact Us</h6>
                        <div className="mt-4 d-flex flex-row">
                            <div className="col-8">
                                <div className="">

                                    <img src={email_footer} alt="" />
                                    <span className='ms-3 footer_call'>(913) 756-3126</span>
                                </div>
                                <div className="mt-5    ">
                                </div>
                                <img src={phone_footer} alt="" />
                                <span className='ms-3 footer_call'>(913) 756-3126</span>

                            </div>
                        </div>
                    </div>

                </div>
                <div className="bar pb-3">
                    <div className="d-flex flex-row align-items-center justify-content-center bottom_bar">
                        <h6 className='copyright'>Nokode © Justpet Template All rights reserved Copyrights 2022</h6>
                    </div>
                </div>

            </div>

        </div>
    )
}
export default Footer
