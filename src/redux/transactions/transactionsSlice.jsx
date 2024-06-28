import { createSlice } from '@reduxjs/toolkit';
import { getTransactions, addTransactions,updateTransactions, deleteTransactions, getTransactionCategories, getTransactionsSummary  } from './operations';

const transactionsInitialState = {
    transactions: [],
    totalAmount:0,
    isLoading: false,
    error: null,
  };
  
  const handlePending = (state) => {
    state.isLoading = true;
  };
  
  const handleRejected = (state, action) => {
    state.isLoading = false;
    state.error = action.payload;
  };
  
  const transactionsSlice = createSlice({
    name: "transactions",
    initialState: transactionsInitialState,
    extraReducers: (builder) => {
      builder
        .addCase(getTransactions.pending, handlePending)
        .addCase(getTransactions.fulfilled, (state, action) => {
          state.isLoading = false;
          state.error = null;
          state.transactions = action.payload;
          state.totalAmount = action.payload.reduce((total, transaction) => total + transaction.amount, 0);
        })
        .addCase(getTransactions.rejected, handleRejected)
        .addCase(addTransactions.pending, handlePending)
        .addCase(addTransactions.fulfilled, (state, action) => {
          state.isLoading = false;
          state.error = null;
          state.transactions.push(action.payload);
          state.totalAmount += action.payload.amount;
        })
        .addCase(addTransactions.rejected, handleRejected)
        .addCase(updateTransactions.pending, handlePending)
        .addCase(updateTransactions.fulfilled, (state, action) => {
          state.isLoading = false;
          state.error = null;
          const index = state.transactions.findIndex(transaction => transaction.id === action.payload.id);
          if (index !== -1) {
            state.totalAmount -= state.transactions[index].amount;
            state.transactions[index] = action.payload;
            state.totalAmount += action.payload.amount;
          }
        })
        .addCase(updateTransactions.rejected, handleRejected)
        .addCase(deleteTransactions.pending, handlePending)
        .addCase(deleteTransactions.fulfilled, (state, action) => {
          state.isLoading = false;
          state.error = null;
          const index =  state.transactions.findIndex(
            (item) => item.id === action.payload.id
          );
          if (index > -1) {
            state.transactions.splice(index, 1);
          }
          state.totalAmount -= action.payload.amount;
      })      
        .addCase(deleteTransactions.rejected, handleRejected)
    },
  });
  export const transactionsReducer = transactionsSlice.reducer;