import { createAsyncThunk } from "@reduxjs/toolkit";
import { post } from "../../../service/api.service";

export const fetchPaymentIntent = createAsyncThunk('stripe/paymentIntent', async (arg: PaymentIntent, { rejectWithValue }) => {
    try {
        const response = await getPaymentIntent(arg)
        return response.data
    } catch (error: any) {
        return rejectWithValue(error.response.data)
    }
})
interface PaymentIntent {
    amount: number;
    userId: string;
    description: string;
    // shipping: Shipping;
}

interface Shipping {
    name: string;
    address: Address;
}

interface Address {
    line1: string;
    postal_code: string;
    city: string;
    state: string;
    country: string;
}



export const getPaymentIntent = (data: PaymentIntent) => post('stripe/payment-intent', data)