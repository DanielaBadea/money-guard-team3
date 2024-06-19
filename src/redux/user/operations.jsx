import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://connections-api.herokuapp.com";

export const getCurrentUserInfo = createAsyncThunk(
    "users/currentUser",
    async(_, thunkAPI) => {
        try{
            const response = await axios.get('/users/current');
            return response.data;
        }catch(err){
            Notiflix.Notify.failure('Cannot get current user info. Please try again later.');
            return thunkAPI.rejectWithValue(err.message);
        }
    }
);