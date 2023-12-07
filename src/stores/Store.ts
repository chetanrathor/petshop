import { configureStore } from "@reduxjs/toolkit";
import { authReducer } from "../features/authentication/stores/AuthSlice";
import { buttonReducer } from '../State/ButtonSlice';
import { ModalReducer, modalReducer } from "../State/ModalSlice";
import { ProgressBarReducer, progressBarReducer } from "../State/ProgressBarSlice";
import { ButtonReducer } from "../Types/ButtonComponent.types";
import { profileTabReducer } from '../features/profile/state/profile-tab.state';
import { ProfileTabReducer } from "../features/profile/types/profile.state.type";
import { AuthReducer } from "../features/authentication/types/auth.types";
import { useDispatch, useSelector } from "react-redux";
import { productReducer } from "../features/product/state/product.slice";
import { Product } from "../features/product/types";
import { petGuideReducer } from "../features/pet-guide/state/pet-guide.slice";
import { cartReducer } from "../features/cart/state/cart.slice";
import { loaderReducer } from "../features/loader/state/loader-slice";
// export interface RootState {
//     authReducer: AuthReducer,
//     modalReducer: ModalReducer,
//     progressBarReducer: ProgressBarReducer,
//     buttonReducer: ButtonReducer
//     profileTabReducer: ProfileTabReducer,
//     productReducer: {
//         products: [],
//         product: Product,
//         featureProductCategory: string,
//         productFilters: any
//     }}




export const store = configureStore({
    reducer: {
        authReducer,
        modalReducer,
        progressBarReducer,
        buttonReducer,
        profileTabReducer,
        productReducer,
        petGuideReducer,
        cartReducer,
        loaderReducer
    }
})

export const useAppDispatch = useDispatch<typeof store.dispatch>
export const useAppSelector = useSelector<ReturnType<typeof store.getState>>
export type RootState = ReturnType<typeof store.getState>
