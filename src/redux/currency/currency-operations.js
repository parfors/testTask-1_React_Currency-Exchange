import { createAsyncThunk } from '@reduxjs/toolkit';
import { getExchangeRates } from 'helpers/api';

export const fetchCurrency = createAsyncThunk(
  'currency/fetch',
  async (_, { rejectWithValue }) => {
    try {
      const response = await getExchangeRates();
      return response;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
