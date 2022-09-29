import { createSlice } from '@reduxjs/toolkit';
import { fetchCurrency } from './currency-operations';

const initialState = {
  currency: [],
  loading: false,
  error: null,
};

const currencySlice = createSlice({
  name: 'currency',
  initialState: {
    currency: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: {
    [fetchCurrency.pending]: state => {
      state.loading = true;
      state.error = false;
    },
    [fetchCurrency.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.currency = payload;
    },
    [fetchCurrency.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },
  },
});

export default currencySlice.reducer;
