import { configureStore } from '@reduxjs/toolkit';
import loginReducer from './slices/loginSlice';
import authReducer from './slices/authSlice';
import userReducer from './slices/userSlice';

export const store = configureStore({
    reducer: {
        login: loginReducer,
        auth: authReducer,
        user: userReducer,
    },
});

export default store;
