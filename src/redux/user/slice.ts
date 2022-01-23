import axios from 'axios'
import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'

interface UserState {
  loading: boolean
  error: string | null
  token: string | null
}

const initialState: UserState = {
  loading: false,
  error: null,
  token: null,
}

export const signIn = createAsyncThunk(
  'user/signIn', // type
  async (
    parameter: {
      username: string
      password: string
    },
    thunkAPI
  ) => {
    const { data } = await axios.post('/auth/login', {
      username: parameter.username,
      password: parameter.password,
    })
    return data.token
  }
)

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    signOut: (state) => {
      state.error = null
      state.loading = false
      state.token = null
    },
  },
  extraReducers: {
    [signIn.pending.type]: (state) => {
      state.loading = true
    },
    [signIn.fulfilled.type]: (state, action) => {
      state.loading = false
      state.token = action.payload
      state.error = null
    },
    [signIn.rejected.type]: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload
      state.loading = false
    },
  },
})
