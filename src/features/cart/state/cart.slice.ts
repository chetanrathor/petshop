import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { addToCart, getCartItems, removeCart, updateCart } from "../api";
import { AddToCart, CartState, UpdateCart } from "../types";

export const removeItemFromCart = createAsyncThunk('remove/cart/item', async (arg: string, { rejectWithValue }) => {
    try {
        const response = await removeCart(arg)
        return response.data
    } catch (error: any) {
        return rejectWithValue(error.response.data)
    }
})

export const addItemIntoCart = createAsyncThunk('add/item', async (arg: AddToCart, { rejectWithValue }) => {
    try {
        const response = await addToCart(arg)
        return response.data
    } catch (error: any) {
        return rejectWithValue(error.response.data)
    }
})

export const updateItemOfCart = createAsyncThunk('update/item:id', async (arg: UpdateCart, { rejectWithValue }) => {
    try {
        const { id, ...rest } = arg
        const response = await updateCart(id, rest)
        return response.data
    } catch (error: any) {
        return rejectWithValue(error.response.data)
    }
})


export const fetchCartItems = createAsyncThunk('cart/userId', async (arg: string, { rejectWithValue }) => {
    try {
        const response = await getCartItems(arg)
        return response.data
    } catch (error: any) {
        return rejectWithValue(error.response.data)
    }
})

const initialState = {
    cartItems: [],
    subTotalBeforDelivery:0
} as unknown as CartState



export const cartSlice = createSlice({
    name: 'carts',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(removeItemFromCart.fulfilled, (state, action) => {
            state.cartItems = action.payload.response.data
        })
        builder.addCase(fetchCartItems.fulfilled, (state, action) => {
            state.cartItems = action.payload.response.data
            state.subTotalBeforDelivery = action.payload.response.subTotalBeforDelivery

        })
    }
})


export const cartReducer = cartSlice.reducer
