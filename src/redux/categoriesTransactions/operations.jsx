import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import Notiflix from "notiflix";

axios.defaults.baseURL = "https://wallet.b.goit.study/api";

export const getTransactionCategories = createAsyncThunk(
    "transaction/transactionCategories",
    async(_, thunkAPI) => {
        try{
            const response = await axios.get('/transaction-categories');
            if(response.status === 200){
                // Notiflix.Notify.success('Transactions returned!')
              }
              console.log(response.data)
            return response.data;
        }catch(error){
            if(error.response && error.response.status=== 401){
                Notiflix.Notify.failure('Bearer auth failed!')
              }else {
                Notiflix.Notify.failure('Unexpected error. Please try again later.');
              }
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);