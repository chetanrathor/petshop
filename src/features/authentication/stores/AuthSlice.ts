import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { resetModalState, setChild, setShow } from "../../../State/ModalSlice";
import { MODAL_TYPES } from "../../../constant/modal-types";
import { logout, signIn, signUp, verifyOtpApi } from "../api/auth";
import { AuthReducer, SignIn, SignInUserResponse, SignUp, VerifyOtp, VerifyOtpResponse } from "../types/auth.types";
import { ApiResponse } from "../../../Types/types";
import { removeToken, setToken, setUserInLocal } from "../utils/token.service";




export const signupUser = createAsyncThunk(
    'auth/signup',
    async (signUpData: SignUp, thunkAPI) => {
        try {
            console.log('inside',)
            const response = await signUp(signUpData); // Make your API call
            return response.data; // Return relevant data on success
        } catch (error: any) {
            return thunkAPI.rejectWithValue(error.response.data); // Return error data on failure
        }
    }
);
export const signInUser = createAsyncThunk(
    'auth/signin',
    async (signInData: SignIn, thunkAPI) => {
        try {
            console.log('inside',)
            const response = await signIn(signInData); // Make your API call
            return response.data; // Return relevant data on success
        } catch (error: any) {
            return thunkAPI.rejectWithValue(error.response.data); // Return error data on failure
        }
    }
);
export const verifyOtp = createAsyncThunk(
    'auth/verifyOtp',
    async (verifyOtpData: VerifyOtp, thunkAPI) => {
        try {
            console.log('inside',)
            const response = await verifyOtpApi(verifyOtpData); // Make your API call
            return response.data; // Return relevant data on success
        } catch (error: any) {
            return thunkAPI.rejectWithValue(error.response.data); // Return error data on failure
        }
    }
);
export const logOutUser = createAsyncThunk(
    'auth/logout',
    async ({ }, thunkAPI) => {
        try {
            console.log('inside',)
            const response = await logout(); // Make your API call
            return response.data; // Return relevant data on success
        } catch (error: any) {
            return thunkAPI.rejectWithValue(error.response.data); // Return error data on failure
        }
    }
);

const initialState = {
    isAuthenticated: true,
    message: '',
    stage: 1,
    user: JSON.parse(localStorage.getItem('user') ?? '') || {} ,
} as unknown as AuthReducer

export const authSlice = createSlice({
    name: 'Auth Slice',
    initialState,
    reducers: {
        setIsAuthenticatedTrue: (state) => {
            state.isAuthenticated = true
        },
        setIsAuthenticatedFalse: state => {
            state.isAuthenticated = false
        },
        setUser: (state, action) => {
            return { ...state, user: action.payload }
        }
    },
    extraReducers(builder) {
        builder.addCase(signupUser.fulfilled, (state, action) => {

            console.log('state--------------------', action)
            // state.message = action.payload.message
            setChild(MODAL_TYPES.OTP_VERIFICATION)
        })
        builder.addCase(signupUser.rejected, (state) => {
            console.log('state====================', state)

        })
        builder.addCase(signupUser.pending, (state) => {
            console.log('state+++++++++++++++++++++++', state)

        })
        builder.addCase(verifyOtp.pending, (state) => {
            console.log('state', state)

        })
        builder.addCase(verifyOtp.fulfilled, (state, action: PayloadAction<ApiResponse<VerifyOtpResponse>>) => {
            const { response, message } = action.payload
            state.isAuthenticated = true
            setShow(resetModalState)
            setToken(action.payload.response)
            setUserInLocal(action.payload.response.user ?? {})
            state.user = response.user

        })
        builder.addCase(signInUser.pending, (state, action) => {
            // const payload = action.payload as ApiResponse<VerifyOtpResponse>
            state.isAuthenticated = true
            setShow(resetModalState)
            // setShow(resetModalState)
            // localStorage.setItem('authentication', JSON.stringify(payload.response.authToken))

        })
        builder.addCase(signInUser.fulfilled, (state, action) => {
            const payload = action.payload as ApiResponse<SignInUserResponse>
            state.isAuthenticated = true
            setShow(resetModalState)
            // setShow(resetModalState)
            setToken(payload.response)
        })
        builder.addCase(logOutUser.fulfilled, (state, action) => {
            const payload = action.payload as ApiResponse<SignInUserResponse>
            state.isAuthenticated = false
            setShow(resetModalState)
            // setShow(resetModalState)
            removeToken()
        })

    }
})


export const { setIsAuthenticatedFalse, setIsAuthenticatedTrue, setUser } = authSlice.actions
export const authReducer = authSlice.reducer