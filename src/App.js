import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<div>Layout here</div>}>
          <Route path="/" element={<div>Home view here</div>} />
          <Route path=":id" element={<div>Stock view here</div>} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
