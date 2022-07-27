import React from 'react';
import { NavLink } from 'react-router-dom';
import { CogIcon, ChevronLeftIcon, MicrophoneIcon } from '@heroicons/react/solid';

const Appbar = () => (
  <div className="flex items-center h-14 px-2 bg-pink-600">
    <NavLink className="basis-1/3 flex" to="/">
      <ChevronLeftIcon className="h-5 w-5" />
    </NavLink>
    <div className="basis-1/3 text-center font-light">Tech Stocks</div>
    <div className="basis-1/3 flex">
      <MicrophoneIcon className="h-5 w-5 mr-4 ml-auto" />
      <CogIcon className="h-5 w-5" />
    </div>
  </div>
);

export default Appbar;
