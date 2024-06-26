import { combineReducers } from 'redux';
import transactionsReducer from './transactionsReducer';

const rootReducer = combineReducers({
  transactions: transactionsReducer,
  // other reducers
});

export default rootReducer;
