import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import StocksList from './StocksList';
import { fetchStocksAsync, selectStockItems } from '../store/stocksSlice';

const StocksView = () => {
  const dispatch = useDispatch();
  const stocks = useSelector(selectStockItems);

  useEffect(() => {
    dispatch(fetchStocksAsync());
  }, [dispatch]);

  return (<StocksList stocks={stocks} />);
};

export default StocksView;
