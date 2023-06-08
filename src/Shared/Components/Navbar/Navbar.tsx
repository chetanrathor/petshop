import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
import { linkItems } from './index'
const Navbar = () => {
    return (
        <div>
            <div className="d-flex flex-column justify-content-center navbar__container">
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
                   <button className='btn btn-outline-primary ps-3 pe-4 py-2-5'><img src={process.env.PUBLIC_URL + "/cart.png"} height='21px' width='30px' alt="" /> <span className='cart_btn_text'>Cart</span> </button>
                   <button className='btn btn-primary btn-outline-primary  px-5 background-primary py-2-5'> <span className='login_btn_text'>Login</span> </button>

                    </div>


                </div>
            </div>
        </div>
    )
}

export default Navbar
