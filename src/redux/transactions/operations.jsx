import { createAsyncThunk } from "@reduxjs/toolkit";
import Notiflix from "notiflix";
import axios from "axios";

axios.defaults.baseURL = "https://connections-api.herokuapp.com";

export const getTransactions = createAsyncThunk(
    "transactions/getAllTransactions",
    async(_, thunkAPI) => {
        try{
            const response = await axios.get("/transactions");
            return response.data

        }catch(err){
            Notiflix.Notify.failure('Cannot get transactions data. Please try again later.');
            return thunkAPI.rejectWithValue(err.message);

        }
    }
);

export const addTransactions = createAsyncThunk(
    "transactions/addTransactions",
    async (transaction, thunkAPI) => {
        const { 
            transactionDate,
            type,
            categoryId,
            comment,
            amount
          } = transaction 
      try {
        const response = await axios.post("/transactions",  { 
            transactionDate,
            type,
            categoryId,
            comment,
            amount
          } );
          Notiflix.Notify.success('Transaction added successfully.');
        return response.data;
      } catch (err) {
        Notiflix.Notify.failure('Cannot add the transaction. Please try again later.');
        return thunkAPI.rejectWithValue(err.message);
      }
    }
  );

  export const updateTransactions = createAsyncThunk(
    "transactions/updateTransactions",
    async(transactionId, thunkAPI) => {
        try{
            const response = await axios.patch(`/transactions/${transactionId}`);
            Notiflix.Notify.success('Transaction updated successfully.');
            return response.data;
        }catch(err){
            Notiflix.Notify.failure('Cannot update the transaction. Please try again later.');
            return thunkAPI.rejectWithValue(err.message);
        }
    }
);

export const deleteTransactions = createAsyncThunk(
    "transactions/deleteTransactions",
    async(transactionId, thunkAPI) => {
        try{
            const response = await axios.delete(`/transactions/${transactionId}`);
            Notiflix.Notify.success('Transaction deleted successfully.');
            return response.data;
        }catch(err){
            Notiflix.Notify.failure('Cannot delete the transaction. Please try again later.');
            return thunkAPI.rejectWithValue(err.message);
        }
    }
);