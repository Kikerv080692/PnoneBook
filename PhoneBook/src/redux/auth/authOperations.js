import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios'

axios.defaults.baseURL = 'https://connections-api.herokuapp.com'

const setAuthHeaders = (token) => {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`
}

const clearAuthHeader = () => {
    axios.defaults.headers.common.Authorization = ''
}

export const register = createAsyncThunk('auth/register', async (credentials, thunkAPI) => {
   try{
    const user = await axios.post('/users/signup', credentials)
    setAuthHeaders(user.data.token)
    return user.data
   }catch(error) {
    return thunkAPI.rejectWithValue(error.message)
   }
})

export const login = createAsyncThunk('auth/login', async(credentials, thunkAPI) => {
    try{
       const user = await axios.post('/users/login', credentials) 
       setAuthHeaders(user.data.token)
       return user.data
    }catch(error){
        return thunkAPI.rejectWithValue(error.message)
    }
})

export const logOut = createAsyncThunk('auth/logout', async(_, thunkAPI) => {
    try{
        await axios.post('/users/logout')
        clearAuthHeader()
    }catch(error){
        return thunkAPI.rejectWithValue(error.message)
    }
})

export const refreshUser = createAsyncThunk('auth/refresh', async(_, thunkAPI) => {
    const state = thunkAPI.getState()
    const persistToken = state.auth.token
    if(!persistToken){
        return thunkAPI.rejectWithValue('unable to fetch user')
    }
    try{
        setAuthHeaders(persistToken)
        const user = await axios.get('/users/current')
        return user.data
    }catch(error){
        return thunkAPI.rejectWithValue(error.message)
    }
})