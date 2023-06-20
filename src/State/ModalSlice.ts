import { createSlice } from "@reduxjs/toolkit";
import { ReactNode } from "react";
import Login from "../Layout/UnAuthenticated/Components/Login/Login";
import { MODAL_TYPES } from "../constant/modal-types";


export interface ModalReducer {
    show: boolean,
    handleClose: string,
    child: MODAL_TYPES,
}
const initialState: ModalReducer = {
    show: false,
    handleClose: 'hello world',
    child: MODAL_TYPES.LOGIN,
}

export const ModalSlice = createSlice({
    name: 'Modal State',    
    initialState: {
        show: false,
        handleClose: 'hello world',
        child: MODAL_TYPES.LOGIN,
    },
    reducers: {
        setShow: (state, action) => {
            console.log('action :>> ', action);
            return { ...state, show: action.payload }
        },

        setHandelClose: (state, action) => {
            return { ...state, handleClose: action.payload }
        },

        setChild: (state, action) => {
            return { ...state, child: action.payload }
        },
        resetModalState:(state)=>{
            return {...state,...initialState}
        },
    


    },
    
})

export const { setChild, setHandelClose, setShow,resetModalState } = ModalSlice.actions
export const modalReducer = ModalSlice.reducer