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
    'productDetailSlice/getProductDetail', // 命名空间
    async (touristRouteId: string, thunkAPI) => {
        thunkAPI.dispatch(productDetailSlice.actions.fetchStart())
        try {
          const { data } = await axios.get(
            `/api/touristRoutes/${touristRouteId}`
          );
          thunkAPI.dispatch(productDetailSlice.actions.fetchSuccess(data))
        } catch (error:any) {
          thunkAPI.dispatch(productDetailSlice.actions.fetchFail(error.message))
        }
    }
)


export const productDetailSlice = createSlice({
    name: 'productDetail',
    initialState,
    reducers: {
        fetchStart: (state) => {
            // return {...state, loading: true}
            state.loading = true
        },
        fetchSuccess: (state, action) => {
            state.loading = false
            state.data = action.payload
            state.error = null
        },
        fetchFail: (state, action: PayloadAction<string|null>) => {
            state.error = action.payload
            state.loading = false
        }
    }

})