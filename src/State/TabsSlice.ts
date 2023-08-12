import { createSlice } from "@reduxjs/toolkit";

export interface TabsReducer{
    activeTab:string
}

export const TabsSlice = createSlice(
    {
        name:'Tabs State',
        initialState:{
            activeTab:''
        },
        reducers:{
            setActiveTab:(state,action)=>{
                return {...state,activeTab:action.payload.setActiveTabToBe}
            }
        }
    }
)

export const { setActiveTab} =  TabsSlice.actions
export const tabsReducer =  TabsSlice.reducer