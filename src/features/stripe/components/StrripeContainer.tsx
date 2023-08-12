import { Elements } from '@stripe/react-stripe-js'
import { loadStripe } from '@stripe/stripe-js'
import React from 'react'
const PUBLIC_KEY = ''
const stripeTestPromise = loadStripe(PUBLIC_KEY)


const StrripeContainer = () => {
  return (
  <Elements stripe={stripeTestPromise}></Elements>
  )
}

export default StrripeContainer