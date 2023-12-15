import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getAddress, updateAddress, createAddress } from "../api";
import { AddressState, UpdateAddress, CreateAddress } from "../types";

export const fetchAddress = createAsyncThunk('fetch/address', async (userId: string, { rejectWithValue }) => {
    try {
        const response = await getAddress(userId);
        return response.data;
    } catch (error: any) {
        return rejectWithValue(error.response.data);
    }
});

export const updateAddressInfo = createAsyncThunk('update/address', async (payload: UpdateAddress, { rejectWithValue }) => {
    try {
        const { id } = payload;
        const response = await updateAddress(id, payload);
        return response.data;
    } catch (error: any) {
        return rejectWithValue(error.response.data);
    }
});

export const createNewAddress = createAsyncThunk('create/address', async (payload: CreateAddress, { rejectWithValue }) => {
    try {
        const response = await createAddress(payload);
        return response.data;
    } catch (error: any) {
        return rejectWithValue(error.response.data);
    }
});

const initialState = {
    address: new Array(),
    
    
} as unknown as AddressState;

export const addressSlice = createSlice({
    name: 'address/state',
    initialState,
    reducers: {
        // setSelectedAddress: (state, action) => {
        //     state.selectedAddress = action.payload;
        // },
    },
    extraReducers: (builder) => {
        builder
            // .addCase(fetchAddress.pending, (state) => {
            //     state.loading = true;
            // })
            .addCase(fetchAddress.fulfilled, (state, action) => {

                state.address = action.payload.response.data;
            })
            // .addCase(fetchAddress.rejected, (state) => {
            //     state.loading = false;
            //     // Handle error state if needed
            // })
            // .addCase(updateAddressInfo.fulfilled, (state, action) => {
            //     // Handle update success if needed
            // })
            .addCase(createNewAddress.fulfilled, (state, action) => {
                // Handle create success if needed
            });
    },
});

// export const { setSelectedAddress } = addressSlice.actions;

export const addressReducer = addressSlice.reducer;
