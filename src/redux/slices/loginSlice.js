import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { dealerLogin, login } from '../../core';

export const fetchLogin = createAsyncThunk(
    'login/fetchLogin',
    async ({ email, password }) => {
        const response = await dealerLogin(email, password);
        return response;
    }
);

const initialState = {
    data: null,
    status: 'idle',
    token: null,
};

const loginSlice = createSlice({
    name: 'login',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchLogin.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchLogin.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.data = action.payload;
                if (action.payload && typeof window !== "undefined") {
                    window.localStorage.setItem("token", action.payload.access_token);
                    state.token = action.payload.access_token;
                }
            })
            .addCase(fetchLogin.rejected, (state) => {
                state.status = 'failed';
            });
    },
});

export default loginSlice.reducer;
