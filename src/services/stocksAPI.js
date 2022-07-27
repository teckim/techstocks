import http from '../plugins/http';

export const fetchStocks = () => http.get('/stock-screener', {
  params: {
    sector: 'Technology',
    exchange: 'NASDAQ',
    limit: '10',
  },
});

export const fetchByCompanyId = (id) => http.get(`/profile/${id}`);
