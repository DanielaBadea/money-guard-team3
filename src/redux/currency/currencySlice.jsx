// import { createSlice } from '@reduxjs/toolkit';
// import { getCurrency} from './operations';

// const currencyInitialState = {
//     currency: [],
//     isLoading: false,
//     error: null,
//   };
  
//   const handlePending = (state) => {
//     state.isLoading = true;
//   };
  
//   const handleRejected = (state, action) => {
//     state.isLoading = false;
//     state.error = action.payload;
//   };
  
//   const currencySlice = createSlice({
//     name: "currency",
//     initialState: currencyInitialState,
//     extraReducers: (builder) => {
//       builder
//         .addCase(getCurrency.pending, handlePending)
//         .addCase(getCurrency.fulfilled, (state, action) => {
//           state.isLoading = false;
//           state.error = null;
//           state.currency = action.payload;
//         })
//         .addCase(getCurrency.rejected, handleRejected)
//     },
//   });
//   export const currencyReducer = currencySlice.reducer;

import { createSlice } from '@reduxjs/toolkit';
import { fetchCurrency } from './operations';

const initialState = {
  data: [],
  lastUpdatedTime: null,
};

const currencySlice = createSlice({
  name: 'currency',
  initialState,
  reducers: {
    setLastUpdatedTime: (state, action) => {
      state.lastUpdatedTime = action.payload;
    },
  },
  extraReducers: builder =>
    builder.addCase(fetchCurrency.fulfilled, (state, { payload }) => {
      state.data = payload;
      state.lastUpdatedTime = new Date().getTime();
    }),
});

export const { setLastUpdatedTime } = currencySlice.actions;
export const currencyReducer = currencySlice.reducer;