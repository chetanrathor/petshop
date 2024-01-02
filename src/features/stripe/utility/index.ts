import { CardElement } from "@stripe/react-stripe-js";
import { Stripe, StripeCardElement, StripeElements } from "@stripe/stripe-js";

export interface ProcessPaymentOptions { stripe: Stripe | null, stripeElement: StripeElements | null | null, clientSecret: string }
export const processPayment = async ({ stripe, stripeElement, clientSecret }: ProcessPaymentOptions) => {

    if (!stripe || !stripeElement) return false;
    const card = stripeElement.getElement(CardElement)
    if (!card ) return false;
    const { paymentMethod } = await stripe.createPaymentMethod({
        type: 'card',
        card,

    });

    if (!paymentMethod) return false;
    const payment = await stripe.confirmCardPayment(clientSecret, {
        payment_method: paymentMethod.id,
        return_url:'http://localhost:3000/home',
        
    });

    return payment;


}