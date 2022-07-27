import React from 'react';
import { Outlet } from 'react-router-dom';
import Appbar from './Appbar';

const Layout = () => (
  <main>
    <div className="w-full max-w-md mx-auto bg-pink-500 text-white">
      <Appbar />
      <div>
        <Outlet />
      </div>
    </div>
  </main>
);

export default Layout;
