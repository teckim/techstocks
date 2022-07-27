import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import { ArrowNarrowRightIcon } from '@heroicons/react/outline';
import '../assets/css/stock-card.css';

const StockCard = ({ stock }) => (
  <NavLink className="stock-card h-52 flex flex-col px-4 py-6 relative" to={`/${stock.symbol}`}>
    <div className="absolute inset-0 pt-1">
      <div className="[writing-mode:vertical-lr] font-extrabold subpixel-antialiased tracking-widest text-6xl text-white/25 blur-sm">{stock.symbol}</div>
    </div>
    <div className="text-right mt-auto">
      <div className="text-xl uppercase break-normal font-bold tracking-wider">{stock.companyName}</div>
      <div className="tracking-wider">
        {`$ ${stock.price}`}
      </div>
    </div>
    <div className="p-1 absolute right-4 top-6 rounded-full border border-white">
      <ArrowNarrowRightIcon className="h-3 w-3" />
    </div>
  </NavLink>
);

StockCard.propTypes = {
  stock: PropTypes.instanceOf(Object).isRequired,
};

export default StockCard;
