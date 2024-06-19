import { createSlice } from '@reduxjs/toolkit';
import { getTransactionsSummary} from './operations';

const summaryTrInitialState = {
    summary: {},
    isLoading: false,
    error: null,
  };
  
  const handlePending = (state) => {
    state.isLoading = true;
  };
  
  const handleRejected = (state, action) => {
    state.isLoading = false;
    state.error = action.payload;
  };
  
  const summaryTrSlice = createSlice({
    name: "transactions",
    initialState: summaryTrInitialState,
    extraReducers: (builder) => {
      builder
        .addCase(getTransactionsSummary.pending, handlePending)
        .addCase(getTransactionsSummary.fulfilled, (state, action) => {
          state.isLoading = false;
          state.error = null;
          state.summary = action.payload;
        })
        .addCase(getTransactionsSummary.rejected, handleRejected)
    },
  });
  export const summaryTrReducer = summaryTrSlice.reducer;