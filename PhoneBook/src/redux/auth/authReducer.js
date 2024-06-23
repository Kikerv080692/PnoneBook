import { createSlice } from "@reduxjs/toolkit";
import { register, login, logOut, refreshUser } from "./authOperations";

const initialState = {
    user: {name: null, email: null},
    token: null,
    isLoggedIn: false,
    isRefreshing: false,
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    extraReducers: builder => builder.addCase(register.pending, (state) => state)
    .addCase(register.rejected, (state) => state)
    .addCase(register.fulfilled, (state, action) => {
        state.user = action.payload.user
        state.token = action.payload.token
        state.isLoggedIn = true
        state.isRefreshing = false
    })
    .addCase(login.pending, (state) => state)
    .addCase(login.rejected, (state) => state)
    .addCase(login.fulfilled, (state, action) => {
        state.user = action.payload.user
        state.token = action.payload.token
        state.isLoggedIn = true
        state.isRefreshing = false
    })
    
})