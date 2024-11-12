import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { login } from '../../core';

export const fetchAuth = createAsyncThunk(
    'auth/fetchAuth',
    async () => {
        const data = window.localStorage.getItem("auth")
        if (data) {
            return JSON.parse(data)
        }
        const response = await login()
        localStorage.setItem("auth", JSON.stringify(response))
        return response;
    }
);

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        data: null,
        token: null,
        status: 'idle',
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchAuth.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchAuth.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.data = action.payload;
                state.token = action.payload.access_token;
            })
            .addCase(fetchAuth.rejected, (state) => {
                state.status = 'failed';
            });
    },
});

export default authSlice.reducer;
