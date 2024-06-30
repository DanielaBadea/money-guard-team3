// export const selectorCurrency = (state) => state.currency.currency;
// export const selectorIsLoading =  (state) => state.currency.isLoading;
// export const selectorError = (state) => state.currency.error;

export const selectCurrency = state => state.currency.data;
export const selectLastUpdatedTime = state => state.currency.lastUpdatedTime;