import { configureStore } from "@reduxjs/toolkit";
import { AuthReducer, authReducer } from "../Layout/Authenticated/State/AuthSlice";
import { ModalReducer, modalReducer } from "../Layout/Authenticated/State/ModalSlice";
import { Reducer } from "react";
import { ProgressBarReducer,progressBarReducer } from "../Layout/Authenticated/State/ProgressBarSlice";

export interface RootState{
    authReducer:AuthReducer,
    modalReducer:ModalReducer,
    progressBarReducer:ProgressBarReducer
    

}


export const store = configureStore({
    reducer:  {authReducer,modalReducer,progressBarReducer}
})