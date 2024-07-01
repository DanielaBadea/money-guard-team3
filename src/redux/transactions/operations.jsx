import { createAsyncThunk } from "@reduxjs/toolkit";
import Notiflix from "notiflix";
import axios from "axios";

axios.defaults.baseURL = "https://wallet.b.goit.study/api";

export const getTransactions = createAsyncThunk(
    "transactions/getAllTransactions",
    async(_, thunkAPI) => {
        try{
            const response = await axios.get("/transactions");
            if(response.status === 200){
                // Notiflix.Notify.success('Transactions returned!')
              }
            return response.data
        }catch(error){
            if(error.response && error.response.status === 400){
                Notiflix.Notify.failure('Validation error!');
              } else if(error.response && error.response.status=== 401){
                Notiflix.Notify.failure('Bearer authorization failed!')
              }else {
                Notiflix.Notify.failure('Unexpected error. Please try again later.');
              }
            Notiflix.Notify.failure('Cannot get transactions data. Please try again later.');
            return thunkAPI.rejectWithValue(error.message);

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
          if(response.status === 201){
            Notiflix.Notify.success('Transaction created!')
          }
          console.log(response.data);
        return response.data;
      } catch (error) {
        if(error.response && error.response.status === 400){
            Notiflix.Notify.failure('Validation error!');
          } else if(error.response && error.response.status=== 401){
            Notiflix.Notify.failure('Bearer authorization failed!')
          }else if(error.response && error.response.status=== 404){
            Notiflix.Notify.failure('Transaction category not found!')
          }else if(error.response && error.response.status=== 409){
            Notiflix.Notify.failure('Transaction category type does not match transaction type!')
          }else {
            Notiflix.Notify.failure('Unexpected error. Please try again later.');
          }
        return thunkAPI.rejectWithValue(error.message);
      }
    }
  );

  export const updateTransactions = createAsyncThunk(
    "transactions/updateTransactions",
    async({ transactionId, values }, thunkAPI) => {
        try{
            const response = await axios.patch(`/transactions/${transactionId}`, values)
            if(response.status === 200){
                Notiflix.Notify.success('Transaction updated!')
              }
            return response.data;
        }catch(error){
            if(error.response && error.response.status === 400){
                Notiflix.Notify.failure('Validation error!');
              } else if(error.response && error.response.status=== 401){
                Notiflix.Notify.failure('Bearer authorization failed!')
              }else if(error.response && error.response.status=== 403){
                Notiflix.Notify.failure('User does not owns transaction!')
              }else if(error.response && error.response.status=== 404){
                Notiflix.Notify.failure('Transaction or transaction category not found')
              }else {
                Notiflix.Notify.failure('Unexpected error. Please try again later.');
              }
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);

export const deleteTransactions = createAsyncThunk(
    "transactions/deleteTransactions",
    async(transactionId, thunkAPI) => {
        try{
            const response = await axios.delete(`/transactions/${transactionId}`)
            if(response.status === 204){
                Notiflix.Notify.success('Transaction deleted!')
              }
            return response.data;
        }catch(error){
            if(error.response && error.response.status === 400){
                Notiflix.Notify.failure('Validation error!');
              } else if(error.response && error.response.status=== 401){
                Notiflix.Notify.failure('Bearer authorization failed!')
              }else if(error.response && error.response.status=== 403){
                Notiflix.Notify.failure('User does not owns transaction!')
              }else if(error.response && error.response.status=== 404){
                Notiflix.Notify.failure('Transaction not found!')
              }else {
                Notiflix.Notify.failure('Unexpected error. Please try again later.');
              }
            return thunkAPI.rejectWithValue(error.message)
        }
    }
);