import axios from 'axios';
import {createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit'


interface ProductDetailState {
    loading: boolean,
    error: string | null,
    data: any
}

const initialState: ProductDetailState = {
    loading: true,
    error: null,
    data: null
}

export const getProductDetail = createAsyncThunk(
    'productDetailSlice/getProductDetail', // type
    async (touristRouteId: string, thunkAPI) => {
          const { data } = await axios.get(
            `/api/touristRoutes/${touristRouteId}`
          );
          return data
    }
)


export const productDetailSlice = createSlice({
    name: 'productDetail',
    initialState,
    reducers: {
        // fetchStart: (state) => {
        //     // return {...state, loading: true}
        //     state.loading = true
        // },
        // fetchSuccess: (state, action) => {
        //     state.loading = false
        //     state.data = action.payload
        //     state.error = null
        // },
        // fetchFail: (state, action: PayloadAction<string|null>) => {
        //     state.error = action.payload
        //     state.loading = false
        // }
    },
    extraReducers: {
        [getProductDetail.pending.type]: (state) => {
            // return {...state, loading: true}
            state.loading = true
        },
        [getProductDetail.fulfilled.type]: (state, action) => {
            state.loading = false
            state.data = action.payload
            state.error = null
        },
        [getProductDetail.rejected.type]: (state, action: PayloadAction<string|null>) => {
            state.error = action.payload
            state.loading = false
        }
    }

})