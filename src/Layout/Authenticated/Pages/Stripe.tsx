import { useStripe, useElements, PaymentElement, CardElement } from '@stripe/react-stripe-js';
import React from 'react'

const Stripe = () => {
    const stripe = useStripe();
    const elements = useElements();



    return (
        <form onSubmit={async () => {
            if (elements) {
                if (elements.getElement(CardElement)) {

                    const result = await stripe?.confirmCardPayment('', {
                        payment_method: {
                            card: elements.getElement(CardElement) 
                        }
                    })
                }
            }
        }}>
            <PaymentElement />
            <button >Submit</button>
        </form>
    )
}

export default Stripe