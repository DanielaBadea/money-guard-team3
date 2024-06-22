import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import Notiflix from 'notiflix';

Notiflix.Notify.init({
  width: '280px',
  position: 'center-center',
  distance: '10px',
  opacity: 1,
});


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
      if(res.status === 201){
        Notiflix.Notify.success(`Successful login! Welcome, ${res.data.user.username}!`)
      }
      return res.data;
    } catch (error) {
      if(error.response && error.response.status === 400){
        Notiflix.Notify.failure('Signup failed. Please try again.');
      } else if(error.response && error.response.status=== 409){
        Notiflix.Notify.failure('Email already exists. Please sing in.');
      }else {
        Notiflix.Notify.failure('Unexpected error. Please try again later.');
      }
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
      if(res.status === 201){
        Notiflix.Notify.success(`Successful login! Welcome, ${res.data.user.username}!`)
      }
      return res.data;
    } catch (error) {
      if(error.response && error.response.status === 400){
        Notiflix.Notify.failure('Sigin failed. Please try again.');
      } else if(error.response && error.response.status === 403){
        Notiflix.Notify.failure(' Password is incorrect. Please try again');
      }else if(error.response && error.response.status === 404){
        Notiflix.Notify.failure(' Email not found. Please sing up.');
      }else {
        Notiflix.Notify.failure('Unexpected error. Please try again.');
      }
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
export const signOut = createAsyncThunk(
  'auth/logout', 
  async (_, thunkAPI) => {
    try {
      const res = await axios.delete('https://wallet.b.goit.study/api/auth/sign-out');
      if (res.status === 204) {
        Notiflix.Notify.info('You have successfully logged out.');
        clearAuthHeader();
      }
      return res.data;
    } catch (error) {
      if (error.response && error.response.status === 404) {
        Notiflix.Notify.failure('Logout endpoint not found. Please try again later.');
      } else if (error.response && error.response.status === 401) {
        Notiflix.Notify.failure('Bearer authentication failed.');
      } else {
        Notiflix.Notify.failure('Logout failed. Please try again.');
      }
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
