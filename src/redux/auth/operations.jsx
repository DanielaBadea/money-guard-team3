import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import Notiflix from 'notiflix';

axios.defaults.baseURL = 'https://wallet.b.goit.study/api';

const setAuthHeader = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = '';
};

export const signUp = createAsyncThunk(
  'auth/register',
  async (credentials, thunkAPI) => {
    try {
      const res = await axios.post('/auth/sign-up', credentials);
      setAuthHeader(res.data.token);
      // Notiflix.Notify.Success('Successful login! Welcome!');
      return res.data;
    } catch (error) {
      // Notiflix.Notify.Failure('Signup failed. Please try again.');
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const signIn = createAsyncThunk(
  'auth/login',
  async (credentials, thunkAPI) => {
    try {
      const res = await axios.post('/auth/sign-in', credentials);
      setAuthHeader(res.data.token);
      // Notiflix.Notify.Success('Successful login! Welcome!');
      return res.data;
    } catch (error) {
      // Notiflix.Notify.Failure('Logoin failed. Please try again.');
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const signOut = createAsyncThunk(
  'auth/logout', 
  async (_, thunkAPI) => {
    try {
      await axios.post('/auth/sign-out');
      clearAuthHeader();
      Notiflix.Notify.Info('You have successfully logged out.');
    } catch (error) {
      if (error.response && error.response.status === 404) {
        Notiflix.Notify.Failure('Logout endpoint not found. Please try again later.');
      } else {
        Notiflix.Notify.Failure('Logout failed. Please try again.');
      }
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
