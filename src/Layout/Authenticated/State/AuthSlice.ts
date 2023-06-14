import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {Get, Post} from '../Services/ApiService' 
import { store } from "../../../Store/Store";
import { setProgressBarVisiblity } from "./ProgressBarSlice";

export const loginAction = createAsyncThunk('login',async (data:any)=>{
    console.log('data :>> ', data);
    return  await Post({endpoint:'auth/signup',body:data})
})



export interface AuthReducer {
    isAuthenticated:boolean
}

const initialState:AuthReducer = {
    isAuthenticated: false 
}

export const authSlice = createSlice({
    name: 'Auth Slice',
    initialState,
    reducers: {
        setIsAuthenticatedTrue: (state) => {


            state.isAuthenticated = true

        },
        setIsAuthenticatedFalse: state => {

            state.isAuthenticated = false
        }
    },
    extraReducers(builder){
        builder.addCase(loginAction.pending,(state,action)=>{
            // store.dispatch(setProgressBarVisiblity({shouldProgressBarVisible:true}))}
            
            return {...state,}
          })

        // builder.addCase(loginAction.fulfilled,(state,action)=>{
        //     store.dispatch(setProgressBarVisiblity({shouldProgressBarVisible:false}))

        // })

      

        // builder.addCase(loginAction.rejected,(state,action)=>{
        //   store.dispatch(setProgressBarVisiblity({shouldProgressBarVisible:false}))
        // })
    }
})

export const { setIsAuthenticatedFalse, setIsAuthenticatedTrue } = authSlice.actions
export const authReducer = authSlice.reducer