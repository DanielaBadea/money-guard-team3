// transactionsActions.js
import axios from 'axios';

// Base URL for API requests
const API_BASE_URL = 'https://wallet.b.goit.study/api';

export const fetchTransactions = (month, year) => async dispatch => {
  try {
    console.log(`Fetching transactions for month: ${month}, year: ${year}`);
    const response = await axios.get(
      `${API_BASE_URL}/transactions?month=${month}&year=${year}`
    );
    console.log('Fetched transactions:', response.data);
    dispatch({ type: 'SET_TRANSACTIONS', payload: response.data });
  } catch (error) {
    console.error('Error fetching transactions:', error);
    dispatch({ type: 'SET_TRANSACTIONS_ERROR', payload: error.message });
  }
};
