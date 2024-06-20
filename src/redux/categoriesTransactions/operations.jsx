import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import Notiflix from "notiflix";

axios.defaults.baseURL = "https://wallet.b.goit.study/api";

export const getTransactionCategories = createAsyncThunk(
    "transaction/transactionCategories",
    async(_, thunkAPI) => {
        try{
            const response = await axios.get('/transaction-categories');
            return response.data;
        }catch(err){
            Notiflix.Notify.failure('Cannot get transaction categories. Please try again later.');
            return thunkAPI.rejectWithValue(err.message);
        }
    }
);