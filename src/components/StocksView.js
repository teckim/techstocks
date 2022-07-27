import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import StocksList from './StocksList';
import { fetchStocksAsync, selectStockItems } from '../store/stocksSlice';
import ExchangeFilters from './ExchangeFilters';

const StocksView = () => {
  const dispatch = useDispatch();
  const stocks = useSelector(selectStockItems);
  const [exchange, setExchange] = useState('nasdaq');

  const handleExchangeClick = (exchange) => {
    setExchange(exchange);
  };

  useEffect(() => {
    dispatch(fetchStocksAsync(exchange));
  }, [dispatch, exchange]);

  return (
    <>
      <ExchangeFilters value={exchange} onClick={handleExchangeClick} />
      <div className="px-4 py-2 bg-pink-600 uppercase tracking-widest text-sm font-semibold">{exchange}</div>
      <StocksList stocks={stocks} />
    </>
  );
};

export default StocksView;
