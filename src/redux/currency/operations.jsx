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
            if(response.status ===200){
                Notiflix.Notify.success('Currency data returned!')
            }
            return response.data;
        } catch (err) {
            if(err.response && err.response.status === 404){
                Notiflix.Notify.failure('Cannot get currency data.');
            }
            return thunkAPI.rejectWithValue(err.message);
        }
    }
);
