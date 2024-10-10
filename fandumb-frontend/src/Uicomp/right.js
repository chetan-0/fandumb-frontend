// SideNav.js
import React from 'react';

const Right = () => {
  return (
    <div className="bg-black h-full w-full flex justify-end items-start p-6">
      <div className="flex space-x-8">
        <a href="/login" className="text-white text-lg">
          LOGIN
        </a>
        <a href="/signup" className="text-white text-lg">
          SIGN UP
        </a>
      </div>
    </div>
  );
};

export default Right;
