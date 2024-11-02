import { login } from '@/service';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchLogin = createAsyncThunk(
    'login/fetchLogin',
    async ({ email, password }) => {
        const response = await login(email, password)
        return response.result;
    }
);

const loginSlice = createSlice({
    name: 'login',
    initialState: {
        data: null,
        status: 'idle',
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchLogin.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchLogin.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.data = action.payload;
            })
            .addCase(fetchLogin.rejected, (state) => {
                state.status = 'failed';
            });
    },
});

export default loginSlice.reducer;
