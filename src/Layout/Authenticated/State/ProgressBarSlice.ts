import { createSlice } from "@reduxjs/toolkit"

export interface ProgressBarReducer {
    isProgressBarVisible:boolean
}

const initialState = {
    isProgressBarVisible:false,

}

export const progressBarSlice = createSlice({
    name:'ProgressBar Reducer',
    initialState,
    reducers :{
        setProgressBarVisiblity:(state,actions:{payload:{shouldProgressBarVisible:boolean},type:string})=>{

            return {
                ...state,isProgressBarVisible:actions.payload.shouldProgressBarVisible
            }


        }
    }

})


export const progressBarReducer = progressBarSlice.reducer
export const {setProgressBarVisiblity} = progressBarSlice.actions