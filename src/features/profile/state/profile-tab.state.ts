import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getUserConsultation, getUserOrders, getUserShippings } from "../api";
import { AxiosError } from "axios";
import { ProfileTabReducer } from "../types/profile.state.type";

export const fetchUserShippings = createAsyncThunk('userId/shippings', async (userId: string, { rejectWithValue }) => {
    try {
        const response = await getUserShippings(userId)
        return response.data
    } catch (error: any) {
       return rejectWithValue(error.response)
    }

})
export const fetchUserOrders = createAsyncThunk('userId/orders', async (userId: string, { rejectWithValue }) => {
    try {
        const response = await getUserOrders(userId)
        return response.data
    } catch (error: any) {
    
      return  rejectWithValue(error.response)
    }

})
export const fetchUserConsultation = createAsyncThunk('userId/consultation', async (userId: string, { rejectWithValue }) => {
    try {
        const response = await getUserConsultation(userId)
        return response.data
    } catch (error: any) {
        console.log('error', error)
        return rejectWithValue('')
    }

})



const initialState = {
    activeTab: "myprofile"
} as unknown as ProfileTabReducer
export const profileTabSlice = createSlice({
    initialState,
    name: "Profile Tab Slice",
    reducers: {
        setProfileTab: (state, action) => {
            return { ...state, activeTab: action.payload.activeTab }
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchUserShippings.fulfilled, (state,action) => {
            state.shippings = action.payload.response.shippings
        })
        builder.addCase(fetchUserOrders.fulfilled, (state,action) => {
            state.orders = action.payload.response.orders
        })
        builder.addCase(fetchUserConsultation.fulfilled, (state,action) => {
            // console.log('inside',)
            state.consultations = action.payload.response.consultations
        })
        builder.addCase(fetchUserConsultation.rejected, (state,action) => {
            console.log('inside',)
            // state.consultations = action.payload.response.consultations
        })
    }
})

export const profileTabReducer = profileTabSlice.reducer
export const { setProfileTab } = profileTabSlice.actions
