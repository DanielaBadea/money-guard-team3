// transactionsReducer.js

const initialState = {
  currentMonth: [], // Initialize with an empty array
};

const transactionsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_TRANSACTIONS':
      return { ...state, currentMonth: action.payload };
    default:
      return state;
  }
};

export default transactionsReducer;
