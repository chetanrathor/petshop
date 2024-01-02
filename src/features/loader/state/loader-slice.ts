import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { fetchCartItems } from "../../cart/state/cart.slice";

export const loaderSlice = createSlice({
    name: 'loader/slice',
    initialState: {
        isLoading: false
    },
    reducers: {
        setIsLoading: (state, action) => {
            state.isLoading = action.payload
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchCartItems.pending, (state, action) => {
            state.isLoading = true
        })
        builder.addCase(fetchCartItems.fulfilled, (state, action) => {
            state.isLoading = false
        })
    }
})

export const loaderReducer = loaderSlice.reducer
export const { setIsLoading } = loaderSlice.actions