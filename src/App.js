import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import StocksView from './components/StocksView';
import StockView from './components/StockView';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<StocksView />} />
          <Route path=":companyId" element={<StockView />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
