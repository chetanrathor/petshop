import React, { useEffect } from 'react'
import Toolkit from '../../../components/Toolkit'
import Navbar from '../../../components/Navbar'
import BreadCrumb from '../../../components/BreadCrumb'
import QuantityCounter from '../../../components/QuantityCounter'
import ButtonComponent from '../../../components/button/ButtonComponent'
// import ServicesOffered from '../../../components/'
import Footer from '../../../components/Footer'
import ServicesOffered from '../Components/ServicesOffered'
import ButtonText from '../../../components/button/ButtonText'
import { useNavigate } from 'react-router-dom'
import { getKey } from '../../../utils'
import { RootState, useAppDispatch } from '../../../stores/Store'
import { useSelector } from 'react-redux'
import { fetchCartItems, removeItemFromCart } from '../../../features/cart/state/cart.slice'
import Loader from '../../../Shared/Loader'


const ProductCart = () => {
    const navigate = useNavigate()

    const handelCheckoutClick = () => {
        navigate('/payment/1')
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }

    const dispatch = useAppDispatch()
    const { authReducer, cartReducer, loaderReducer } = useSelector((state: RootState) => state)
    const { isLoading } = loaderReducer
    const { user } = authReducer
    const { cartItems,subTotalBeforDelivery } = cartReducer

    useEffect(() => {
            dispatch(fetchCartItems(user.id))
    }, [])


    const heading = [{
        name: 'PRODUCTS',
        extraclass: 'col-4'
    }, {
        name: 'PRICE'
    }, {
        name: 'QTY'
    }, {
        name: 'TOTAL',
        extraclass: 'col-3'
    }]
    console.log('cartItems', cartItems)
    return (
        <div>
            <Toolkit></Toolkit>
            <Navbar></Navbar>
            <BreadCrumb breadCrumbItems={[{ name: 'HOME' }, { name: 'SHOP' }, { name: 'PRODUCT PAGE' }, { name: 'CART' }]}></BreadCrumb>
            <div className="mw-1264  m-auto mt-3">

                <div className='continue_shopping'>Continue Shopping</div>
                <div className="mt-5 px-4 py-5 border-bottom d-flex flex-row justify-content-between">

                    {
                        heading.map((item) => {
                            return (
                                <div key={getKey()} className={`col-2 d-flex flex-column px-5  heading-text color-gre ${item.extraclass}`} >{item.name}</div>
                            )
                        })
                    }

                </div>
                {isLoading ? <Loader></Loader> :
                    cartItems?.map((item) => {
                        return (
                            <div key={item.id} className="d-flex flex-row px-4 py-5 border-bottom justify-content-between ">
                                <div className="col-4  d-flex flex-row align-items-center">
                                    <button onClick={() => {
                                        dispatch(removeItemFromCart(item.id)).then((r) => {
                                            if (r.meta.requestStatus === 'fulfilled') {
                                                dispatch(fetchCartItems(user.id))
                                            }
                                        })
                                    }} className='delete-product-btn border-0 me-4'> <span className='cross'>X</span>  </button>
                                    <img src={process.env.PUBLIC_URL + '/productPage.png'} height={110} width={110} alt="" />
                                    <div className="ms-3 product_page-text">
                                        {item.product.name}
                                    </div>
                                </div>
                                <div className="col-2 px-4">
                                    <div className="ms-3 product_page-text">
                                        ${item.product.mrp}
                                    </div>
                                </div>
                                <div className="col-2 px-5">
                                    <QuantityCounter id={item.id} value={item.quantity} ></QuantityCounter>
                                </div>
                                <div className="col-3 px-4">
                                    <div className="ms-3 product_page-text">
                                        ${Number(item.product.mrp) * item.quantity}
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }


                <div className="mt-5 d-flex flex-row justify-content-between">
                    <div className="col-4 d-flex flex-column">
                        <div className="order_note">
                            Add a note to your order
                        </div>
                        <div className="">
                            <textarea className='w-100 mt-2   product-order-note-textarea'> </textarea>
                        </div>
                    </div>
                    <div className="col-4 d-flex flex-column ">
                        <div className="sub-total-text">
                            Subtotal before delivery
                        </div>
                        <div className="mt-3 sub-total-price">${subTotalBeforDelivery}</div>
                        <div className="d-flex mt-3 flex-row justify-content-end">
                            <form action='/create-checkout-session' method='post'>
                                <ButtonComponent className='px-5 py-3 border ' handelClick={() => { handelCheckoutClick() }} isSubmitButton={true} backgroundColor='primary' disabled={false} >

                                    <ButtonText className='color-' fontSize='small' >Checkout</ButtonText>
                                </ButtonComponent>
                            </form>
                            {/* <ButtonComponent bgColor='background-primary' canActivateLoader={false} content='Checkout' isSubmitButton={false} shouldDisabel={false} extraClass='py-3 px-4 border-0 '  ></ButtonComponent> */}
                        </div>
                    </div>

                </div>
                <ServicesOffered></ServicesOffered>
            </div>
            <Footer></Footer>
        </div>
    )
}

export default ProductCart
