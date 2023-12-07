import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { GetBlogs, InitialState } from "../types";
import { getBlog, getBlogs } from "../api";

export const fetchBlogs = createAsyncThunk('get/blogs', async (arg: GetBlogs, { rejectWithValue }) => {
    try {
        return (await getBlogs(arg)).data
    } catch (error: any) {
        return rejectWithValue(error.response.data)
    }
})
export const fetchLatestBlogs = createAsyncThunk('get/blogs-latest', async (arg, { rejectWithValue }) => {
    try {
        return (await getBlogs({ limit: 3, offset: 0, order: 'DESC' })).data
    } catch (error: any) {
        return rejectWithValue(error.response.data)
    }
})
export const fetchBlog = createAsyncThunk('get/blog:id', async (arg: string, { rejectWithValue }) => {
    try {
        return (await getBlog(arg)).data
    } catch (error: any) {
        return rejectWithValue(error.response.data)
    }
})

const initialState = {
    blogs: new Array(),
    latestPost: new Array(),
    blog: new Object()
} as unknown as InitialState


export const petGuideSlice = createSlice({
    name: 'petguide',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchBlogs.fulfilled, (state, action) => {
            state.blogs = action.payload.response.data
        })
        builder.addCase(fetchBlog.fulfilled, (state, action) => {
            state.blog = action.payload.response.blog
        })
        builder.addCase(fetchLatestBlogs.fulfilled, (state, action) => {
            state.latestBlogs = action.payload.response.data
        })
    }
})

export const { } = petGuideSlice.actions
export const petGuideReducer = petGuideSlice.reducer