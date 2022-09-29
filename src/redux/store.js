import { configureStore } from '@reduxjs/toolkit';
import currencyReducer from 'redux/currency/currency-slice';

export const store = configureStore({
  reducer: {
    currency: currencyReducer,
  },
});
