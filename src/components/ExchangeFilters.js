import { PropTypes } from 'prop-types';
import React from 'react';

const EXCHANGES = [
  'nasdaq',
  'nyse',
  'amex',
  'euronext',
  'tsx',
  'etf',
  'mutual_fund',
];

const ExchangeFilters = ({ onClick, value }) => {
  const classNames = 'h-8 px-4 rounded uppercase snap-center tracking-wide font-semibold';

  return (
    <div className="w-full px-2 py-2 flex items-center gap-x-2 overflow-x-auto snap-x no-scrollbar text-xs">
      {
        EXCHANGES.map((exchange) => (
          <button
            className={value !== exchange ? `${classNames} bg-pink-600/75` : `${classNames} text-pink-600 bg-white/90`}
            key={exchange}
            onClick={() => onClick(exchange)}
          >
            {exchange}
          </button>
        ))
      }
    </div>
  );
};

ExchangeFilters.propTypes = {
  value: PropTypes.string.isRequired,
  onClick: PropTypes.instanceOf(Function).isRequired,
};

export default ExchangeFilters;
