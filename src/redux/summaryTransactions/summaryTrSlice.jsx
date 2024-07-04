import { createSlice } from '@reduxjs/toolkit';
import { getTransactionsSummary } from './operations';

const initialState = {
  summary: [],
  isLoading: false,
  error: null,
};

const summaryTrSlice = createSlice({
  name: 'summary_transactions',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(getTransactionsSummary.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getTransactionsSummary.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.summary = action.payload;
      })
      .addCase(getTransactionsSummary.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload; 
      });
  },
});

export const summaryTrReducer = summaryTrSlice.reducer;
