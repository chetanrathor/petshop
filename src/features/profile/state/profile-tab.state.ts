import { createSlice } from "@reduxjs/toolkit";

export const profileTabSlice = createSlice({
    initialState: { activeTab: "myprofile" },
    name: "Profile Tab Slice",
    reducers: {
        setProfileTab: (state, action) => {
            return { ...state, activeTab: action.payload.activeTab }
        }
    }
})

export const profileTabReducer = profileTabSlice.reducer
export const { setProfileTab } = profileTabSlice.actions
