import { configureStore } from "@reduxjs/toolkit";
import { AuthReducer, authReducer } from "../State/AuthSlice";
import { ModalReducer, modalReducer } from "../State/ModalSlice";
import { Reducer } from "react";
import { ProgressBarReducer,progressBarReducer } from "../State/ProgressBarSlice";
import {buttonReducer } from '../State/ButtonSlice'
import { ButtonReducer } from "../Types/ButtonComponent.types";

export interface RootState{
    authReducer:AuthReducer,
    modalReducer:ModalReducer,
    progressBarReducer:ProgressBarReducer,
    buttonReducer:ButtonReducer
    

}


export const store = configureStore({
    reducer:  {authReducer,modalReducer,progressBarReducer,buttonReducer}
})