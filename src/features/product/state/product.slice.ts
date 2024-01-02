import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getFilters, getProduct, getProducts } from "../api";
import { GetAllProducts, ProductState } from "../types";

export const fetchProducts = createAsyncThunk('fetch/products', async (data: GetAllProducts, { rejectWithValue }) => {
    try {
        const response = await getProducts(data)
        return response.data
    } catch (error: any) {
        return rejectWithValue(error.response.data)
    }
})

export const fetchProduct = createAsyncThunk('product/:id', async (productId: string, { rejectWithValue }) => {
    try {
        const response = await getProduct(productId)
        return response.data
    } catch (error: any) {
        return rejectWithValue(error.response.data)
    }
})
export const fetchFilters = createAsyncThunk('product/filters', async (arg, { rejectWithValue }) => {
    try {
        const response = await getFilters()
        return response.data
    } catch (error: any) {
        return rejectWithValue(error.response.data)
    }
})


 const initialState = {
        products: [],
        product: {},
        featureProductCategory: '',
        productFilters: new Object(),
        filters: {
            specy: '',
            category: '',
            offer: '',
            breedType: '',
            brand: ''
        }
    } as unknown as ProductState

export const productSlice = createSlice({
    name: 'product/slice',
    initialState,
    reducers: {
        setFeatureProductCategory: (state, action) => {
            return {
                ...state,
                featureProductCategory: action.payload
            }
        },
        setProductFilter: (state, action) => {
            return { ...state, filters: { ...state.filters, ...action.payload } }
        },
        resetProductFilters: (state) => {
            const filters = {
                specy: '',
                category: '',
                offer: '',
                breedType: '',
                brand: ''
            }
            return { ...state,filters:{...state.filters,...filters}}
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchProducts.fulfilled, (state, action) => {
            console.log('action.payload', action.payload)
            state.products = action.payload.response.data
        })
        builder.addCase(fetchProduct.fulfilled, (state, action) => {
            state.product = action.payload.response.product
        })
        builder.addCase(fetchFilters.fulfilled, (state, action) => {
            state.productFilters = action.payload.response
        })
    }
})

export const { setFeatureProductCategory, setProductFilter,resetProductFilters } = productSlice.actions;
export const productReducer = productSlice.reducer