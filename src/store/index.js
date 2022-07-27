import { configureStore } from '@reduxjs/toolkit';
import stocksReducer from './stocksSlice';

const reducer = {
  stocks: stocksReducer,
};

export const setupStore = (preloadedState) => configureStore({
  reducer,
  preloadedState,
});

export default setupStore;
