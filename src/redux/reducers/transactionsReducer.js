const initialState = {
  currentMonth: [],
  loading: false,
  error: null,
};

const transactionsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_TRANSACTIONS_REQUEST':
      return { ...state, loading: true };
    case 'SET_TRANSACTIONS':
      return { ...state, currentMonth: action.payload, loading: false };
    case 'SET_TRANSACTIONS_ERROR':
      return { ...state, error: action.payload, loading: false };
    default:
      return state;
  }
};

export default transactionsReducer;
