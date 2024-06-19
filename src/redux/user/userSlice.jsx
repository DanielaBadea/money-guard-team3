import { createSlice } from '@reduxjs/toolkit';
import { getCurrentUserInfo } from './operations';

const currentUserInitialState = {
    currentUser: null,
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
  
  const currentUserSlice = createSlice({
    name: "user",
    initialState: currentUserInitialState,
    extraReducers: (builder) => {
      builder
        .addCase(getCurrentUserInfo.pending, handlePending)
        .addCase(getCurrentUserInfo.fulfilled, (state, action) => {
          state.isLoading = false;
          state.error = null;
          state.currentUser = action.payload;
        })
        .addCase(getCurrentUserInfo.rejected, handleRejected)
    },
  });
  export const currentUserReducer = currentUserSlice.reducer;