import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fetchByCompanyId, fetchStocks } from '../services/stocksAPI';

const initialState = {
  status: 'idle',
  items: [],
  company: {},
};

export const fetchStocksAsync = createAsyncThunk(
  'stocks/fetchStocks',
  async (exchange) => {
    const { data } = await fetchStocks(exchange);

    return data;
  },
);

export const fetchCompanyAsync = createAsyncThunk(
  'stocks/fetchCompany',
  async (id) => {
    const { data } = await fetchByCompanyId(id);

    return data && data.length ? data[0] : {};
  },
);

export const stocksSlice = createSlice({
  name: 'stocks',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchStocksAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchStocksAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.items = action.payload;
      })
      .addCase(fetchCompanyAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchCompanyAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.company = action.payload;
      });
  },
});

export const selectStockItems = (state) => state.stocks.items;
export const selectCompany = (state) => state.stocks.company;

export default stocksSlice.reducer;
