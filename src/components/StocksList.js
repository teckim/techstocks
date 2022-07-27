import React from 'react';
import PropTypes from 'prop-types';
import StockCard from './StockCard';

const StocksList = ({ stocks }) => (
  <div className="grid grid-cols-2">
    {
      stocks
        .filter((stock) => stock.country === 'US')
        .map((stock) => <StockCard key={stock.symbol} stock={stock} />)
    }
  </div>
);

StocksList.propTypes = {
  stocks: PropTypes.instanceOf(Array).isRequired,
};

export default StocksList;
