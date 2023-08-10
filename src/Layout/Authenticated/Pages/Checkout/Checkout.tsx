import React from 'react'
import Toolkit from '../../../../Shared/Components/Toolkit/Toolkit'
import Navbar from '../../../../Shared/Components/Navbar/Navbar'
import BreadCrumb from '../../../../Shared/Components/BreadCrumb/BreadCrumb'
import './Checkout.css'
import Address from '../../Components/Address/Address'
import ButtonComponent from '../../../../Shared/Components/ButtonComponent/ButtonComponent'
import { Link } from 'react-router-dom'


const Checkout = () => {
    return (
        <div>
            <Toolkit></Toolkit>
            <Navbar></Navbar>
            <BreadCrumb breadCrumbItems={[{ name: 'HOME' }, { name: 'SHOP' }, { name: 'PRODUCT PAGE' }, { name: 'CART' }, { name: 'SHIPPING & PAYMENTS' }]}></BreadCrumb>
            <div className="d-flex flex-row mw-1264 gap-4 m-auto mt-3">
                <div className="col-8 p-3 left_adress">
                    <div className='selct_address_text'>Select address </div>
                    <div className="d-flex flex-column mt-4  gap-4">
                        <Address></Address>
                        <Address></Address>
                        <Address></Address>
                    </div>
                    <div className="mt-5">

                        <ButtonComponent bgColor='background-primary' canActivateLoader={false} content='Add New Address' isSubmitButton={false} shouldDisabel={false} extraClass='py-3 border-0' ></ButtonComponent>
                    </div>
                </div>
                <div className="col-4 p-3 left_adress">
                    <div className="border-bottom pb-5">

                        <div className="my-order-text">
                            My Orders
                        </div>
                        <div className="d-flex flex-row mt-4">
                            <div className="col-1">
                                <div className="checkout-text">
                                    1x
                                </div>

                            </div>
                            <div className="col-8">
                                <div className="checkout-text">
                                    Tug of War Dog Toy
                                </div>
                            </div>
                            <div className="col-3">
                                <div className="checkout-text text-end">
                                    $12.12
                                </div>
                            </div>
                        </div>
                        <div className="d-flex flex-row mt-5">
                            <div className="col-1">
                                <div className="checkout-text ">
                                    1x
                                </div>

                            </div>
                            <div className="col-8">
                                <div className="checkout-text">
                                    Tug of War Dog Toy
                                </div>
                            </div>
                            <div className="col-3">
                                <div className="checkout-text text-end">
                                    $12.12
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="">
                        <div className="d-flex flex-row justify-content-between mt-3">
                            <div className="col-4">
                                <div className="subtotal">Subtotal</div>
                            </div>
                            <div className="col-4">
                                <div className="checkout-text text-end">
                                    $1,952.66
                                </div>
                            </div>
                        </div>
                        <div className="d-flex flex-row border-bottom  pb-3 justify-content-between mt-3">
                            <div className="col-4">
                                <div className="subtotal">Shipping</div>
                            </div>
                            <div className="col-5    text-end">
                                <span className="subtotal ">Free Shipping</span>
                                <span className="ms-3 checkout-text">
                                    $0
                                </span>
                            </div>
                        </div>
                        <div className="d-flex flex-row justify-content-between mt-3 pb-3 border-bottom">
                            <div className="order-total">Order Total</div>
                            <div className="total-price">$32.39</div>
                        </div>
                        <div className="">
                            <div className="order-total">Payments</div>
                            <div className="d-flex flex-row align-items-center">
                                <div className="d-flex flex-row align-items-center col-4">

                                    <input type="checkbox" className='form-check-input mt-0 checkbox_height_width' />
                                    <img src={process.env.PUBLIC_URL + '/stripe.png'} className='ms-2' alt="" />
                                </div>
                                <div className="d-flex flex-row align-items-center col-4    ">
                                    <input type="checkbox" className='form-check-input mt-0 checkbox_height_width' />
                                    <div className="ms-3 order-total">COD</div>

                                </div>

                            </div>
                        </div>
                    </div>
                    <div className="d-flex flex-column">

                        <ButtonComponent bgColor='background-primary' canActivateLoader={false}  isSubmitButton={false} shouldDisabel={false}  content='Place Order' extraClass='px-5 py-4 border-0 mt-3'></ButtonComponent>
                        <div className=" mt-2 d-flex flex-row">
                        <input type="checkbox" className='form-check-input mt-0 checkbox_height_width' />
                        <div className="ms-2 tandc">I accept the <Link to={''} className='color-primary text-decoration-underline'>terms and conditions</Link></div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Checkout