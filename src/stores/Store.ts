import { configureStore } from "@reduxjs/toolkit";
import { AuthReducer, authReducer } from "../State/AuthSlice";
import { ModalReducer, modalReducer } from "../State/ModalSlice";
import { Reducer } from "react";
import { ProgressBarReducer, progressBarReducer } from "../State/ProgressBarSlice";
import { buttonReducer } from '../State/ButtonSlice'
import { ButtonReducer } from "../Types/ButtonComponent.types";
import { ProfileTabReducer } from "../features/profile/types/profile.state.type";
import { profileTabReducer } from '../features/profile/state/profile-tab.state'
// import { tabsReducer } from "../State/TabsSlice";
export interface RootState {
    authReducer: AuthReducer,
    modalReducer: ModalReducer,
    progressBarReducer: ProgressBarReducer,
    buttonReducer: ButtonReducer
    profileTabReducer: ProfileTabReducer

}


export const store = configureStore({
    reducer: { authReducer, modalReducer, progressBarReducer, buttonReducer, profileTabReducer }
})