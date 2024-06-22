import { createSlice } from '@reduxjs/toolkit';
import { signUp, signIn, signOut } from './operations';

const initialState = {
  user: {username: null, email: null },
  token: null,
  isLoggedIn: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(signUp.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })
      .addCase(signIn.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })
      .addCase(signOut.fulfilled, state => {
        state.user = { username: null, email: null };
        state.token = null;
        state.isLoggedIn = false;
      })
  },
});

export const authReducer = authSlice.reducer;
