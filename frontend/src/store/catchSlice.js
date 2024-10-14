// src/store/catchSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  catches: [],
  loading: false,
  error: null,
};

// Thunk to add a new catch
export const addCatch = createAsyncThunk(
  'catches/addCatch',
  async (catchData, { rejectWithValue }) => {
    try {
      const res = await axios.post('/api/catches', catchData);
      return res.data;
    } catch (err) {
      return rejectWithValue(err.response.data.message);
    }
  }
);

// Thunk to fetch user's catches
export const fetchCatches = createAsyncThunk(
  'catches/fetchCatches',
  async (userId, { rejectWithValue }) => {
    try {
      const res = await axios.get(`/api/catches/${userId}`);
      return res.data;
    } catch (err) {
      return rejectWithValue(err.response.data.message);
    }
  }
);

const catchSlice = createSlice({
  name: 'catches',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(addCatch.pending, (state) => {
        state.loading = true;
      })
      .addCase(addCatch.fulfilled, (state, action) => {
        state.catches.push(action.payload);
        state.loading = false;
      })
      .addCase(addCatch.rejected, (state, action) => {
        state.error = action.payload;
        state.loading = false;
      })
      .addCase(fetchCatches.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchCatches.fulfilled, (state, action) => {
        state.catches = action.payload;
        state.loading = false;
      })
      .addCase(fetchCatches.rejected, (state, action) => {
        state.error = action.payload;
        state.loading = false;
      });
  },
});

export default catchSlice.reducer;
