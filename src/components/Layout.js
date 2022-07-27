import React from 'react';
import { Outlet } from 'react-router-dom';
import Appbar from './Appbar';

const Layout = () => (
  <main className="text-white">
    <div className="mx-auto my-8 rounded-3xl overflow-hidden py-10 shadow-2xl bg-slate-200 relative" style={{ width: '390px', height: '750px' }}>
      <div className="absolute inset-x-0 z-10">
        <Appbar />
      </div>
      <div className="w-full h-full pt-14 overflow-y-auto bg-pink-500">
        <div>
          <Outlet />
        </div>
      </div>
    </div>
  </main>
);

export default Layout;
