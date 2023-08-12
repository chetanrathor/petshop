import { createSlice } from "@reduxjs/toolkit";



export const ButttonSlice = createSlice({
    name: 'button component slice',
    initialState: {
        canActivateLoader: false,
        shouldButtonDisable: false
    },
    reducers: {
        setCanActivateLoader: (state, action) => {
            return { ...state, canActivateLoader: action.payload.setCanActivateLoader }
        },
        setShouldButtonDisable: (state, action) => {
            return { ...state, shouldButtonDisable: action.payload.shouldButtonDisable }
        },
    }
})

export const buttonReducer = ButttonSlice.reducer
export const {setCanActivateLoader,setShouldButtonDisable} = ButttonSlice.actions