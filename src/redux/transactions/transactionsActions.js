// transactionsActions.js

import axios from 'axios';

export const fetchTransactions = (month, year) => async dispatch => {
  try {
    const response = await axios.get(
      `/api/transactions?month=${month}&year=${year}`
    );
    dispatch({ type: 'SET_TRANSACTIONS', payload: response.data });
  } catch (error) {
    console.error(error);
  }
};
