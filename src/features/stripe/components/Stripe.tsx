import { useStripe, useElements, PaymentElement, CardElement } from '@stripe/react-stripe-js';
import React from 'react'

const Stripe = () => {
    const stripe = useStripe();
    const elements = useElements();






    return (
        <CardElement options={{ hidePostalCode: true }} />
    )
}

export default Stripe