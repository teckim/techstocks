import http from '../plugins/http';

export const fetchStocks = (exchange) => http.get('/stock-screener', {
  params: {
    sector: 'Technology',
    limit: '10',
    exchange,
  },
});

export const fetchByCompanyId = (id) => http.get(`/profile/${id}`);
