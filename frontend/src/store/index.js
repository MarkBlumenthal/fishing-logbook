// src/store/index.js
import { configureStore } from '@reduxjs/toolkit';
import authReducer from './authSlice';
import catchReducer from './catchSlice';

const store = configureStore({
  reducer: {
    auth: authReducer,
    catches: catchReducer,
  },
});

export default store;
