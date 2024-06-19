import { createSlice } from '@reduxjs/toolkit';
import { getTransactionCategories} from './operations';

const categoriesTrInitialState = {
    categories: [],
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
  
  const categoriesTrSlice = createSlice({
    name: "transactions",
    initialState: categoriesTrInitialState,
    extraReducers: (builder) => {
      builder
        .addCase(getTransactionCategories.pending, handlePending)
        .addCase(getTransactionCategories.fulfilled, (state, action) => {
          state.isLoading = false;
          state.error = null;
          state.categories = action.payload;
        })
        .addCase(getTransactionCategories.rejected, handleRejected)
    },
  });
  export const categoriesTrReducer = categoriesTrSlice.reducer;