import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import Notiflix from "notiflix";

axios.defaults.baseURL = "https://openexchangerates.org/api";

export const App_ID = '7da11d3863f245ceb2327e717229693d';

export const getCurrency = createAsyncThunk(
    "currency/getCurrency",
    async (_, thunkAPI) => {
        try {
            const response = await axios.get(`/latest.json?app_id=${App_ID}&base=RON`);
            return response.data;
        } catch (err) {
            Notiflix.Notify.failure('Cannot get currency data. Please try again later.');
            return thunkAPI.rejectWithValue(err.message);
        }
    }
);
