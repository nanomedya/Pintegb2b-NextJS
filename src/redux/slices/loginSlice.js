import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { login } from '@/service';

export const fetchLogin = createAsyncThunk(
    'login/fetchLogin',
    async ({ email, password }) => {
        const response = await login(email, password);
        return response;
    }
);

const loginSlice = createSlice({
    name: 'login',
    initialState: {
        data: null,
        status: 'idle',
        token: null,
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
                if (action.payload)
                    state.token = action.payload.access_token;
            })
            .addCase(fetchLogin.rejected, (state) => {
                state.status = 'failed';
            });
    },
});

export default loginSlice.reducer;
