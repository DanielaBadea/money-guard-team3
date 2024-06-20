import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import Notiflix from "notiflix";

axios.defaults.baseURL = "https://wallet.b.goit.study/api";

export const getTransactionsSummary = createAsyncThunk(
    "transaction/transactionsSummary",
    async(_, thunkAPI) => {
        try{
            const response = await axios.get('/transactions-summary');
            return response.data;
        }catch(err){
            Notiflix.Notify.failure('Cannot get transactions summary. Please try again later.');
            return thunkAPI.rejectWithValue(err.message);
        }
    }
);
