import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import Notiflix from "notiflix";

axios.defaults.baseURL = "https://wallet.b.goit.study/api";

export const getTransactionsSummary = createAsyncThunk(
  "transaction/transactionsSummary",
  async ({ month, year }, thunkAPI) => {
    try {
      const response = await axios.get(`/transactions-summary?month=${month}&year=${year}`);
      // if(response.status === 200){
      //   Notiflix.Notify.success('Transaction summary returned!');
      // }
      console.log('Get summary', response.data);
      return response.data;
    } catch (error) {
      if (error.response && error.response.status === 400) {
        Notiflix.Notify.failure('Validation error!');
      } else if (error.response && error.response.status === 401) {
        Notiflix.Notify.failure('Bearer auth failed!');
      } else {
        Notiflix.Notify.failure('Unexpected error. Please try again later.');
      }
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

