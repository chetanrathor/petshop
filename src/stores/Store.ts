import { configureStore } from "@reduxjs/toolkit";
import { authReducer } from "../features/authentication/stores/AuthSlice";
import { buttonReducer } from '../State/ButtonSlice';
import { ModalReducer, modalReducer } from "../State/ModalSlice";
import { ProgressBarReducer, progressBarReducer } from "../State/ProgressBarSlice";
import { ButtonReducer } from "../Types/ButtonComponent.types";
import { profileTabReducer } from '../features/profile/state/profile-tab.state';
import { ProfileTabReducer } from "../features/profile/types/profile.state.type";
import { AuthReducer } from "../features/authentication/types/auth.types";
import { useDispatch } from "react-redux";
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

// export const useAppDispatch = useDispatch<typeof store.dispatch>()
