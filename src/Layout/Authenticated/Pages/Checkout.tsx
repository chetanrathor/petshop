import { Link, useLocation } from 'react-router-dom'
import BreadCrumb from '../../../components/BreadCrumb'
import Navbar from '../../../components/Navbar'
import Toolkit from '../../../components/Toolkit'
import ButtonComponent from '../../../components/button/ButtonComponent'
import ButtonText from '../../../components/button/ButtonText'
import { post } from '../../../features/checkout/api/checkout'
import Address from '../../../features/profile/components/Address'
import { RootState, useAppDispatch } from '../../../stores/Store'
import { useEffect, useState } from 'react';
import { fetchCartItems } from '../../../features/cart/state/cart.slice'
import { useSelector } from 'react-redux'
import { PaymentMethod } from '../../../constant/payment-method'
import { CardElement, Elements, PaymentElement, useElements, useStripe, } from '@stripe/react-stripe-js'
import Stripe from '../../../features/stripe/components/Stripe'
import { loadStripe } from '@stripe/stripe-js'
import { setChild, setShow } from '../../../State/ModalSlice'
import { MODAL_TYPES } from '../../../constant/modal-types'
import { fetchPaymentIntent } from '../../../features/stripe/api'
import { processPayment } from '../../../features/stripe/utility'
import AddNewAddress from '../../../features/address/components/AddNewAddress'
import { fetchAddress } from '../../../features/address/state/address.slice'
export enum AddressComponenetVisblity {
    'NewAddress',
    'AddressList'
}

const Checkout = () => {

    const stripe = useStripe()
    const stripeElement = useElements()
    const dispatch = useAppDispatch()
    const { authReducer, cartReducer, addressReducer } = useSelector((state: RootState) => state)
    const { address } = addressReducer
    const { cartItems, subTotalBeforDelivery } = cartReducer
    const { user } = authReducer
    const [paymentMode, SetPaymentMode] = useState(PaymentMethod.Cash)

    const location = useLocation();
    const note = new URLSearchParams(location.search).get('note');
    useEffect(() => {
        dispatch(fetchCartItems(user.id))
        dispatch(fetchAddress(user.id))
    }, [])
    const handelOrderPlace = async () => {

        if (paymentMode === PaymentMethod.Stripe) {
            const response = await dispatch(fetchPaymentIntent({
                amount: subTotalBeforDelivery,
                description: note ?? 'NA',
                userId: user.id
            }
            ))
            const { clientSecret } = response.payload.response
            const paymentResult = await processPayment({ stripe, clientSecret, stripeElement })
            console.log('paymentResult', paymentResult)
            if (!paymentResult) return;
        }

    }

    const stripePromise = loadStripe('pk_test_51Ne2HsSJWBez7tD47Y1veUV1csEi2oNIpq56oEh0KTY29lxhAIZjhwLkkonGccQb3uSEvZZpA819LrtN8oCByrgm008IcC7hyF')

    const [addressState, setAddressState] = useState(AddressComponenetVisblity.AddressList)
    return (
        <div>
            <Toolkit></Toolkit>
            <Navbar></Navbar>
            <BreadCrumb breadCrumbItems={[{ name: 'HOME' }, { name: 'SHOP' }, { name: 'PRODUCT PAGE' }, { name: 'CART' }, { name: 'SHIPPING & PAYMENTS' }]}></BreadCrumb>
            <div className="d-flex flex-row mw-1264 gap-4 m-auto mt-3">
                <div className="col-8 p-3 left_adress">
                    <div className='selct_address_text'>Select address </div>
                    {
                        addressState === AddressComponenetVisblity.AddressList ?
                            <>
                                <div className="d-flex flex-column mt-4  gap-4">
                                    {
                                        address.map((element) => {
                                            return (
                                                <Address addressElement={element}></Address>

                                            )
                                        })
                                    }

                                </div>
                                <div className="mt-4">

                                    <ButtonComponent handelClick={() => { setAddressState(AddressComponenetVisblity.NewAddress) }} className='px-5 py-3  border ' isSubmitButton={true} backgroundColor='primary' disabled={false} >
                                        <ButtonText className='color-' fontSize='small' >Add New Address</ButtonText>
                                    </ButtonComponent>
                                </div>
                            </>

                            :
                            <AddNewAddress addressState={setAddressState}></AddNewAddress>
                    }
                </div>
                <div className="col-4 p-3 left_adress">
                    <div className="border-bottom pb-5">

                        <div className="my-order-text">
                            My Orders
                        </div>
                        {
                            cartItems.map((item) => {
                                return (
                                    <div key={item.id} className="d-flex flex-row mt-4">
                                        <div className="col-1">
                                            <div className="checkout-text">
                                                {item.quantity}x
                                            </div>

                                        </div>
                                        <div className="col-8">
                                            <div className="checkout-text">
                                                {item.product.name}
                                            </div>
                                        </div>
                                        <div className="col-3">
                                            <div className="checkout-text text-end">
                                                ${Number(item.product.mrp)}
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }


                    </div>
                    <div className="">
                        <div className="d-flex flex-row justify-content-between mt-3">
                            <div className="col-4">
                                <div className="subtotal">Subtotal</div>
                            </div>
                            <div className="col-4">
                                <div className="checkout-text text-end">
                                    ${subTotalBeforDelivery}
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
                            <div className="total-price">${subTotalBeforDelivery}</div>
                        </div>
                        <div className="">
                            <div className="order-total">Payments</div>
                            <div className="d-flex flex-row align-items-center">
                                <div className="d-flex flex-row align-items-center col-4">

                                    <input onChange={() => { SetPaymentMode(PaymentMethod.Stripe) }} type="checkbox" checked={paymentMode === PaymentMethod.Stripe} className='form-check-input mt-0 checkbox_height_width' />
                                    <img src={process.env.PUBLIC_URL + '/stripe.png'} className='ms-2' alt="" />
                                </div>
                                <div className="d-flex flex-row align-items-center col-4    ">
                                    <input type="checkbox" onChange={() => { SetPaymentMode(PaymentMethod.Cash) }} checked={paymentMode === PaymentMethod.Cash} className='form-check-input mt-0 checkbox_height_width' />
                                    <div className="ms-3 order-total">COD</div>

                                </div>

                            </div>
                        </div>
                    </div>
                    <div className="d-flex flex-column gap-3 mt-3">
                        {
                            paymentMode === PaymentMethod.Stripe ?
                                <Stripe></Stripe>
                                : null
                        }
                        <ButtonComponent className='px-5 py-3  border ' handelClick={() => { handelOrderPlace() }} isSubmitButton={false} backgroundColor='primary' disabled={false} >
                            <ButtonText className='color-' fontSize='small' >Place Order</ButtonText>
                        </ButtonComponent>

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
